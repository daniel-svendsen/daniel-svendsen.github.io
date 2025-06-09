import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { AdminHeader } from '@/admin/components/AdminHeader'
import { AdminImageGrid } from '@/admin/components/AdminImageGrid'
import { useGalleryDetailData } from '@/admin/hooks/useGalleryDetailData'
import { useFileUpload } from '@/admin/hooks/useFileUpload'
import { apiUrl } from '@/admin/utils/apiUrl'

export default function GalleryDetailPage() {
  const { galleryId } = useParams<{ galleryId: string }>()
  const { images, setImages, likedImages, isLoading, error } =
    useGalleryDetailData(galleryId)
  const { uploadFiles, status, progress, error: uploadError } = useFileUpload()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || !galleryId) return
    const newKeys = await uploadFiles(event.target.files, galleryId)
    if (newKeys.length > 0) {
      setImages((prevImages) => [...prevImages, ...newKeys])
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDeleteImage = async (imageKey: string) => {
    const fileName = imageKey.split('/').pop()
    if (
      window.confirm(`Är du säker på att du vill ta bort bilden ${fileName}?`)
    ) {
      try {
        const response = await fetch(apiUrl(`gallery/${galleryId}/images`), {
          method: 'DELETE',
          credentials: 'include',
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(
            errorData.error || `Servern svarade med status ${response.status}`,
          )
        }

        setImages([])
        alert('Galleriet har tömts på alla bilder.')
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Ett okänt fel inträffade.'
        alert(`Kunde inte tömma galleriet: ${message}`)
      }
    }
  }

  const handleClearGallery = async () => {
    if (!galleryId || images.length === 0) {
      alert('Galleriet är redan tomt.')
      return
    }
    if (
      window.confirm(
        `Är du säker på att du vill radera ALLA ${images.length} bilder i detta galleri? Galleriet kommer finnas kvar, men blir tomt. Detta kan inte ångras.`,
      )
    ) {
      try {
        await fetch(apiUrl(`gallery/${galleryId}/images`), {
          method: 'DELETE',
          credentials: 'include',
        })
        setImages([])
        alert('Galleriet har tömts på alla bilder.')
      } catch (err) {
        alert('Kunde inte tömma galleriet.')
      }
    }
  }

  return (
    <main className="pt-16 md:pt-20 bg-background text-foreground min-h-screen">
      <AdminHeader
        galleryId={galleryId}
        likedImageKeys={likedImages}
        onSelectFiles={() => fileInputRef.current?.click()}
        isUploading={status === 'uploading'}
        uploadProgress={progress}
        actionError={uploadError}
        onClearGallery={handleClearGallery}
      />

      <Section roundedTop="9xl">
        <SectionContent heading={`Bilder i galleriet (${images.length})`}>
          <AdminImageGrid
            images={images}
            isLoading={isLoading}
            error={error}
            onDelete={handleDeleteImage}
          />
        </SectionContent>
      </Section>

      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
        accept="image/jpeg,image/png,image/webp,image/avif"
      />
    </main>
  )
}