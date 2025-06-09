import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { useGalleryLikes } from '@/admin/hooks/useGalleryLikes'
import { useImageDownloader } from '@/admin/hooks/useImageDownloader'
import { useGalleryNavigation } from '@/admin/hooks/useGalleryNavigation'
import { GalleryModal } from '@/admin/components/GalleryModal'
import { GalleryImageGrid } from '@/admin/components/GalleryImageGrid'
import { GalleryHeader } from '@/admin/components/GalleryHeader'
import { apiUrl } from '@/admin/utils/apiUrl'

export default function CustomerGalleryPage() {
  const { galleryId } = useParams<{ galleryId: string }>()
  const [imageKeys, setImageKeys] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const { likedImages, toggleLike } = useGalleryLikes(galleryId || '')
  const { status, message, downloadAndZip } = useImageDownloader()
  const { currentIndex, openModalAtIndex, closeModal, goToNext, goToPrevious } =
    useGalleryNavigation(imageKeys.length)

  useEffect(() => {
    if (!galleryId) return
    const fetchImages = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(apiUrl(`gallery/${galleryId}`))
        if (!response.ok) throw new Error('Kunde inte ladda galleriet.')
        const data = await response.json()
        setImageKeys(data)
      } catch (err) {
        if (err instanceof Error) setError(err.message)
        else setError('Ett okänt fel inträffade.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [galleryId])

  const currentImageKey = currentIndex !== null ? imageKeys[currentIndex] : null

  return (
    <main className="pt-16 md:pt-20 bg-background text-foreground">
      <GalleryHeader
        galleryId={galleryId}
        downloadStatus={status}
        downloadMessage={message}
        onDownloadAll={() => downloadAndZip(imageKeys, galleryId || 'gallery')}
      />
      <Section roundedTop="9xl">
        <SectionContent>
          <GalleryImageGrid
            imageKeys={imageKeys}
            isLoading={isLoading}
            error={error}
            onImageClick={openModalAtIndex}
          />
        </SectionContent>
      </Section>
      <GalleryModal
        isOpen={currentIndex !== null}
        onClose={closeModal}
        imageKey={currentImageKey}
        isLiked={!!currentImageKey && likedImages.includes(currentImageKey)}
        onLike={toggleLike}
        onNext={goToNext}
        onPrevious={goToPrevious}
        hasNext={currentIndex !== null && currentIndex < imageKeys.length - 1}
        hasPrevious={currentIndex !== null && currentIndex > 0}
      />
    </main>
  )
}