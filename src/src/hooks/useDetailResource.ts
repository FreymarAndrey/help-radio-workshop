import { useEffect, useState } from 'react'

type DetailStatus = 'loading' | 'ready' | 'not-found'

export function useDetailResource<T extends { id: string }>(
  id: string | undefined,
  fetcher: (resourceId: string) => Promise<T | undefined>,
) {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<DetailStatus>('loading')

  useEffect(() => {
    if (!id) return

    let active = true

    fetcher(id).then((result) => {
      if (!active) return
      if (result) {
        setData(result)
        setStatus('ready')
      } else {
        setData(null)
        setStatus('not-found')
      }
    })

    return () => {
      active = false
    }
  }, [id, fetcher])

  const isStale = Boolean(data && id && data.id !== id)
  const isLoading = status === 'loading' || isStale

  return {
    data: isStale ? null : data,
    isLoading,
    notFound: status === 'not-found' && !isStale,
  }
}
