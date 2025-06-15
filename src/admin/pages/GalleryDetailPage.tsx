import React, { useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { AdminHeader } from '@/admin/components/AdminHeader'
import { AdminImageGrid } from '@/admin/components/AdminImageGrid'
import { useGalleryDetailData } from '@/admin/hooks/useGalleryDetailData'
import { useFileUpload } from '@/admin/hooks/useFileUpload'
import { apiUrl } from '@/admin/utils/apiUrl'
import { ChevronRight } from 'lucide-react'

export default function GalleryDetailPage() {
  const { galleryId } = useParams<{ galleryId: string }>()
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const currentPrefix = useMemo(
    () =>
      `${galleryId}/${currentPath.join('/')}${currentPath.length > 0 ? '/' : ''}`,
    [galleryId, currentPath],
  )

  const { images, folders, likedImages, isLoading, error, refetchData } =
    useGalleryDetailData(currentPrefix)

  const { uploadFiles, status, progress, error: uploadError } = useFileUpload()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || !galleryId) return
    await uploadFiles(event.target.files, currentPrefix, refetchData)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDeleteImage = async (imageKey: string) => {
    const fileName = imageKey.split('/').pop()
    if (
      !window.confirm(`Är du säker på att du vill ta bort bilden ${fileName}?`)
    ) {
      return
    }
    try {
      const response = await fetch(apiUrl(`image/${imageKey}`), {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!response.ok) {
        throw new Error('Kunde inte ta bort bild.')
      }
      refetchData()
    } catch (err) {
      alert(`Ett fel uppstod: ${err instanceof Error ? err.message : err}`)
    }
  }

  const handleClearGallery = async () => {
    if (!galleryId) return
    if (
      !window.confirm(
        `Är du säker på att du vill radera ALLT innehåll i galleriet "${galleryId}"? Detta kan inte ångras.`,
      )
    ) {
      return
    }
    try {
      await fetch(apiUrl(`gallery/${galleryId}/images`), {
        method: 'DELETE',
        credentials: 'include',
      })
      refetchData()
      alert('Hela galleriet har tömts.')
    } catch (err) {
      alert('Kunde inte tömma galleriet.')
    }
  }

  const handleCreateFolder = async () => {
    const folderName = prompt('Ange namn på den nya mappen:')
    if (!folderName || folderName.trim() === '') {
      alert('Mappnamn kan inte vara tomt.')
      return
    }
    const sanitizedName = folderName.trim().replace(/\s+/g, '-')
    const newFolderPath = `${currentPrefix}${sanitizedName}/`

    try {
      const response = await fetch(apiUrl('create-folder'), {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: newFolderPath }),
      })
      if (!response.ok) {
        throw new Error('Kunde inte skapa mappen.')
      }
      refetchData()
    } catch (err) {
      alert(`Ett fel uppstod: ${err instanceof Error ? err.message : err}`)
    }
  }

  const handleClearFolder = async (folderPath: string) => {
    const folderName = folderPath.split('/').filter(Boolean).pop()
    if (
      !window.confirm(
        `Är du säker på att du vill radera ALLA bilder i mappen "${folderName}"? Mappen kommer finnas kvar, men blir tomt. Detta kan inte ångras.`,
      )
    ) {
      return
    }

    try {
      const response = await fetch(apiUrl(`folder/${folderPath}`), {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!response.ok) {
        throw new Error('Kunde inte tömma mappen.')
      }
      refetchData()
    } catch (err) {
      alert(`Ett fel uppstod: ${err instanceof Error ? err.message : err}`)
    }
  }

  const handleNavigateToFolder = (path: string) => {
    const pathSegments = path.split('/').filter(Boolean)
    setCurrentPath(pathSegments.slice(1))
  }

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath(currentPath.slice(0, index))
  }

  const breadcrumbs = [
    { name: galleryId || '', path: [] },
    ...currentPath.map((name, i) => ({
      name,
      path: currentPath.slice(0, i + 1),
    })),
  ]

  return (
    <main className="pt-16 md:pt-20 bg-background text-foreground min-h-screen">
      <AdminHeader
        galleryId={galleryId}
        currentPath={currentPrefix}
        isRootLevel={currentPath.length === 0}
        likedImageKeys={likedImages}
        onSelectFiles={() => fileInputRef.current?.click()}
        isUploading={status === 'uploading'}
        uploadProgress={progress}
        actionError={uploadError}
        onClearGallery={handleClearGallery}
        onCreateFolder={handleCreateFolder}
      />

      <Section roundedTop="9xl">
        <SectionContent>
          <nav className="flex items-center space-x-2 mb-6 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => handleBreadcrumbClick(index)}
                  className={`hover:underline ${
                    index === breadcrumbs.length - 1
                      ? 'font-semibold text-textPrimary'
                      : 'text-textSecondary'
                  }`}
                  disabled={index === breadcrumbs.length - 1}
                >
                  {crumb.name}
                </button>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-textSecondary" />
                )}
              </React.Fragment>
            ))}
          </nav>
          <AdminImageGrid
            images={images}
            folders={folders}
            isLoading={isLoading}
            error={error}
            onDeleteImage={handleDeleteImage}
            onNavigateToFolder={handleNavigateToFolder}
            onClearFolder={handleClearFolder}
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