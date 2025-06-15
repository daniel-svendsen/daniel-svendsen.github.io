import { useCallback, useEffect, useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'

interface GalleryContent {
  images: string[]
  folders: string[]
}

export function useGalleryDetailData(prefix: string | undefined) {
  const [images, setImages] = useState<string[]>([])
  const [folders, setFolders] = useState<string[]>([])
  const [likedImages, setLikedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = useCallback(async () => {
    if (!prefix) return

    setIsLoading(true)
    setError('')

    try {
      const galleryId = prefix.split('/')[0]
      const [contentRes, likesRes] = await Promise.all([
        fetch(apiUrl(`gallery-contents/${prefix}`), { credentials: 'include' }),
        fetch(apiUrl(`likes/${galleryId}`), { credentials: 'include' }),
      ])

      if (!contentRes.ok)
        throw new Error('Kunde inte ladda galleriets innehåll.')
      if (!likesRes.ok) throw new Error('Kunde inte ladda gillade bilder.')

      const contentData: GalleryContent = await contentRes.json()
      const likesData = await likesRes.json()

      setImages(contentData.images || [])
      setFolders(contentData.folders || [])
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
  }, [prefix])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    images,
    folders,
    setImages,
    setFolders,
    likedImages,
    isLoading,
    error,
    refetchData: fetchData,
  }
}