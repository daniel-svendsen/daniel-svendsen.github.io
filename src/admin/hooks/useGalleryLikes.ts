import { useEffect, useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'

export function useGalleryLikes(galleryId: string) {
  const [likedImages, setLikedImages] = useState<string[]>(() => {
    if (typeof window === 'undefined' || !galleryId) return []
    try {
      const saved = localStorage.getItem(`likes_${galleryId}`)
      return saved ? (JSON.parse(saved) as string[]) : []
    } catch (error) {
      console.error('Failed to parse likes from localStorage', error)
      return []
    }
  })

  useEffect(() => {
    if (galleryId) {
      localStorage.setItem(`likes_${galleryId}`, JSON.stringify(likedImages))
    }
  }, [likedImages, galleryId])

  const toggleLike = async (imageKey: string) => {
    const isLiked = likedImages.includes(imageKey)
    const originalLikes = [...likedImages]

    const newLikedImages = isLiked
      ? likedImages.filter((key) => key !== imageKey)
      : [...likedImages, imageKey]

    setLikedImages(newLikedImages)

    try {
      await fetch(apiUrl('like'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ galleryId, imageKey }),
      })
    } catch (err) {
      console.error('Failed to sync like with server', err)
      setLikedImages(originalLikes)
    }
  }

  return { likedImages, toggleLike }
}