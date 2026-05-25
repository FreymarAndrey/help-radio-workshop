import { useCallback, useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

interface UseAudioPlayerOptions {
  src: string
  onEnd?: () => void
}

export function useAudioPlayer({ src, onEnd }: UseAudioPlayerOptions) {
  const howlRef = useRef<Howl | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.unload()
      howlRef.current = null
    }

    const howl = new Howl({
      src: [src],
      html5: true,
      onload: () => {
        setDuration(howl.duration())
        setIsReady(true)
      },
      onloaderror: () => {
        setError('No se pudo cargar el audio')
        setIsReady(false)
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => {
        setIsPlaying(false)
        setProgress(0)
      },
      onend: () => {
        setIsPlaying(false)
        setProgress(0)
        onEnd?.()
      },
    })

    howlRef.current = howl

    const interval = window.setInterval(() => {
      if (!howl.playing()) return
      const seek = howl.seek()
      if (typeof seek === 'number' && howl.duration()) {
        setProgress(seek / howl.duration())
      }
    }, 200)

    return () => {
      window.clearInterval(interval)
      howl.unload()
      howlRef.current = null
    }
  }, [src, onEnd])

  const toggle = useCallback(() => {
    const howl = howlRef.current
    if (!howl || error) return

    if (howl.playing()) {
      howl.pause()
    } else {
      howl.play()
    }
  }, [error])

  const seekTo = useCallback(
    (ratio: number) => {
      const howl = howlRef.current
      if (!howl || !howl.duration()) return
      howl.seek(ratio * howl.duration())
      setProgress(ratio)
    },
    [],
  )

  return {
    isPlaying,
    progress,
    duration,
    isReady,
    error,
    toggle,
    seekTo,
  }
}
