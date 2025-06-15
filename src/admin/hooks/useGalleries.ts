import { useCallback, useEffect, useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'

export function useGalleries() {
  const [galleries, setGalleries] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(apiUrl('galleries'), {
        credentials: 'include',
      })
      if (!response.ok) throw new Error('Kunde inte hämta gallerier.')
      const data = await response.json()
      setGalleries(data)
    } catch (err) {
      if (err instanceof Error) setError(err.message)
      else setError('Ett okänt fel inträffade.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const deleteGallery = async (galleryName: string) => {
    const galleryId = galleryName.replace(/\/$/, '')
    if (
      !window.confirm(
        `Är du säker på att du vill ta bort hela galleriet "${galleryId}"? Detta kan inte ångras.`,
      )
    ) {
      return
    }

    try {
      await fetch(apiUrl(`gallery/${galleryId}`), {
        method: 'DELETE',
        credentials: 'include',
      })
      fetchData()
    } catch (err) {
      alert('Kunde inte ta bort galleriet.')
    }
  }

  return { galleries, isLoading, error, refetch: fetchData, deleteGallery }
}