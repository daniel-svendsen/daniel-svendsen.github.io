import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { useGalleryLikes } from '@/admin/hooks/useGalleryLikes'
import { useGalleryNavigation } from '@/admin/hooks/useGalleryNavigation'
import { GalleryModal } from '@/admin/components/GalleryModal'
import { GalleryImageGrid } from '@/admin/components/GalleryImageGrid'
import { GalleryHeader } from '@/admin/components/GalleryHeader'
import { apiUrl } from '@/admin/utils/apiUrl'
import {
  normalizeGalleryImages,
  type GalleryImage,
  type GalleryImageResponse,
} from '@/admin/types/gallery'

export default function CustomerGalleryPage() {
  const { galleryId } = useParams<{ galleryId: string }>()
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const { likedImages, toggleLike } = useGalleryLikes(galleryId || '')
  const { currentIndex, openModalAtIndex, closeModal, goToNext, goToPrevious } =
    useGalleryNavigation(images.length)

  useEffect(() => {
    if (!galleryId) return
    const fetchImages = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(apiUrl(`gallery/${galleryId}`))
        if (!response.ok) throw new Error('Kunde inte ladda galleriet.')
        const data = (await response.json()) as GalleryImageResponse[]
        setImages(normalizeGalleryImages(data))
      } catch (err) {
        if (err instanceof Error) setError(err.message)
        else setError('Ett okänt fel inträffade.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [galleryId])

  const currentImage = currentIndex !== null ? images[currentIndex] : null

  return (
    <main className="pt-16 md:pt-20 bg-background text-foreground">
      <GalleryHeader
        galleryId={galleryId}
        downloadUrl={apiUrl(`gallery/${galleryId || 'gallery'}/download`)}
      />
      <Section roundedTop="9xl">
        <SectionContent>
          <GalleryImageGrid
            images={images}
            isLoading={isLoading}
            error={error}
            onImageClick={openModalAtIndex}
          />
        </SectionContent>
      </Section>
      <GalleryModal
        isOpen={currentIndex !== null}
        onClose={closeModal}
        image={currentImage}
        isLiked={!!currentImage && likedImages.includes(currentImage.originalKey)}
        onLike={toggleLike}
        onNext={goToNext}
        onPrevious={goToPrevious}
        hasNext={currentIndex !== null && currentIndex < images.length - 1}
        hasPrevious={currentIndex !== null && currentIndex > 0}
      />
    </main>
  )
}
