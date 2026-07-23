import { useCallback, useEffect, useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'
import {
  normalizeGalleryImages,
  type CompatibleGalleryDetailResponse,
  type GalleryImage,
} from '@/admin/types/gallery'

export function useGalleryDetailData(prefix: string | undefined) {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [folders, setFolders] = useState<string[]>([])
  const [likedImages, setLikedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = useCallback(async () => {
    if (!prefix) return

    setIsLoading(true)
    setError('')

    try {
      const contentRes = await fetch(apiUrl(`gallery-detail/${prefix}`), {
        credentials: 'include',
      })

      if (!contentRes.ok)
        throw new Error('Kunde inte ladda galleriets innehåll.')

      const contentData: CompatibleGalleryDetailResponse =
        await contentRes.json()

      setImages(normalizeGalleryImages(contentData.images))
      setFolders(contentData.folders || [])
      setLikedImages(contentData.likedImages || [])
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
