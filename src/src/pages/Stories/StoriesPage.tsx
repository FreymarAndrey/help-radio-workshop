import { useEffect, useState } from 'react'
import { AnimatedTitle } from '../../components/AnimatedTitle'
import { StoryCard } from '../../components/StoryCard'
import type { IStory } from '../../interfaces/story.interface'
import { getStories } from '../../services/stories.service'

export function StoriesPage() {
  const [stories, setStories] = useState<IStory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    getStories().then((data) => {
      if (active) {
        setStories(data)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <AnimatedTitle
        title="Cuentos y narraciones"
        subtitle="Historias con portada ilustrada, descripción y reproductor de audio integrado."
      />

      {loading ? (
        <p className="mt-12 text-center text-ink-muted">Cargando cuentos…</p>
      ) : (
        <div className="mt-12 flex flex-col gap-10">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}
