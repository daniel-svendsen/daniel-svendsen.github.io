import { useEffect, useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'

export function useGalleryDetailData(galleryId: string | undefined) {
  const [images, setImages] = useState<string[]>([])
  const [likedImages, setLikedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = async () => {
    if (!galleryId) return

    setIsLoading(true)
    setError('')

    try {
      const [imagesRes, likesRes] = await Promise.all([
        fetch(apiUrl(`gallery/${galleryId}`)),
        fetch(apiUrl(`likes/${galleryId}`), { credentials: 'include' }),
      ])

      if (!imagesRes.ok) throw new Error('Kunde inte ladda bilder.')
      if (!likesRes.ok) throw new Error('Kunde inte ladda gillade bilder.')

      const imagesData = await imagesRes.json()
      const likesData = await likesRes.json()

      setImages(imagesData)
      setLikedImages(likesData)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Ett okänt fel inträffade.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [galleryId])

  return {
    images,
    setImages,
    likedImages,
    isLoading,
    error,
    refetchData: fetchData,
  }
}