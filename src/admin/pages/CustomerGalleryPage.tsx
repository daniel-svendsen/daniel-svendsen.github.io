import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { useGalleryLikes } from '@/admin/hooks/useGalleryLikes'
import { useGalleryNavigation } from '@/admin/hooks/useGalleryNavigation'
import { GalleryModal } from '@/admin/components/GalleryModal'
import { GalleryImageGrid } from '@/admin/components/GalleryImageGrid'
import { GalleryHeader } from '@/admin/components/GalleryHeader'
import { apiUrl } from '@/admin/utils/apiUrl'
import { ChevronRight, Folder } from 'lucide-react'
import {
  galleryImageFolderPath,
  normalizeGalleryImages,
  type GalleryImage,
  type GalleryImageResponse,
} from '@/admin/types/gallery'

const normalizeFolderPath = (path: string) =>
  path
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .join('/')

const folderName = (path: string) =>
  path.split('/').filter(Boolean).pop() || path

export default function CustomerGalleryPage() {
  const { galleryId } = useParams<{ galleryId: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const currentFolderPath = normalizeFolderPath(searchParams.get('mapp') || '')
  const { likedImages, toggleLike } = useGalleryLikes(galleryId || '')

  const galleryEntries = useMemo(() => {
    const allFolders = new Set<string>()
    const currentPrefix = currentFolderPath ? `${currentFolderPath}/` : ''
    const visibleImages: GalleryImage[] = []

    images.forEach((image) => {
      const folderPath = galleryImageFolderPath(image, galleryId || '')

      if (folderPath) {
        const parts = folderPath.split('/')
        parts.forEach((_, partIndex) => {
          allFolders.add(parts.slice(0, partIndex + 1).join('/'))
        })
      }

      if (folderPath === currentFolderPath) {
        visibleImages.push(image)
      }
    })

    const folders = [...allFolders]
      .filter((path) => {
        if (currentFolderPath && !path.startsWith(currentPrefix)) return false
        const relativePath = currentFolderPath
          ? path.slice(currentPrefix.length)
          : path
        return relativePath.length > 0 && !relativePath.includes('/')
      })
      .sort((a, b) => folderName(a).localeCompare(folderName(b)))

    return { folders, images: visibleImages }
  }, [currentFolderPath, galleryId, images])

  const { currentIndex, openModalAtIndex, closeModal, goToNext, goToPrevious } =
    useGalleryNavigation(galleryEntries.images.length)

  useEffect(() => {
    closeModal()
  }, [currentFolderPath])

  const breadcrumbs = useMemo(() => {
    const parts = currentFolderPath.split('/').filter(Boolean)
    return parts.map((name, index) => ({
      name,
      path: parts.slice(0, index + 1).join('/'),
    }))
  }, [currentFolderPath])

  const navigateToFolder = (folderPath: string) => {
    const normalizedPath = normalizeFolderPath(folderPath)
    const nextParams = new URLSearchParams(searchParams)

    if (normalizedPath) {
      nextParams.set('mapp', normalizedPath)
    } else {
      nextParams.delete('mapp')
    }

    setSearchParams(nextParams)
  }

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

  const currentImage =
    currentIndex !== null ? galleryEntries.images[currentIndex] : null

  return (
    <main className="bg-[#f5f5f2] pt-16 text-foreground md:pt-20">
      <GalleryHeader
        galleryId={galleryId}
        downloadUrl={apiUrl(`gallery/${galleryId || 'gallery'}/download`)}
      />
      <Section bgColor="offWhite" rounded="none" className="bg-[#f5f5f2] pb-14">
        <SectionContent>
          {isLoading || error || images.length === 0 ? (
            <GalleryImageGrid
              images={images}
              isLoading={isLoading}
              error={error}
              onImageClick={openModalAtIndex}
            />
          ) : (
            <div className="space-y-8">
              <nav
                className="flex flex-wrap items-center gap-2 text-sm text-textSecondary"
                aria-label="Galleri mappar"
              >
                <button
                  type="button"
                  onClick={() => navigateToFolder('')}
                  className={`rounded-full px-3 py-1.5 transition-colors hover:bg-black/5 hover:text-textPrimary ${
                    currentFolderPath ? '' : 'font-semibold text-textPrimary'
                  }`}
                >
                  Galleri
                </button>
                {breadcrumbs.map((crumb) => (
                  <React.Fragment key={crumb.path}>
                    <ChevronRight className="h-4 w-4" />
                    <button
                      type="button"
                      onClick={() => navigateToFolder(crumb.path)}
                      className={`rounded-full px-3 py-1.5 transition-colors hover:bg-black/5 hover:text-textPrimary ${
                        crumb.path === currentFolderPath
                          ? 'font-semibold text-textPrimary'
                          : ''
                      }`}
                    >
                      {crumb.name}
                    </button>
                  </React.Fragment>
                ))}
              </nav>

              {galleryEntries.folders.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {galleryEntries.folders.map((path) => (
                    <button
                      key={path}
                      type="button"
                      onClick={() => navigateToFolder(path)}
                      className="group aspect-square rounded-[1.15rem] border border-black/6 bg-white p-4 text-center shadow-[0_18px_55px_-50px_rgba(31,41,55,0.55)] transition-colors hover:bg-[#f8f8f5] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f5f5f2]"
                    >
                      <span className="flex h-full flex-col items-center justify-center">
                        <Folder className="h-14 w-14 text-textSecondary transition-colors group-hover:text-textPrimary" />
                        <span className="mt-3 w-full truncate text-sm font-semibold text-textPrimary">
                          {folderName(path)}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {galleryEntries.images.length > 0 ? (
                <GalleryImageGrid
                  images={galleryEntries.images}
                  isLoading={false}
                  error=""
                  onImageClick={openModalAtIndex}
                />
              ) : (
                galleryEntries.folders.length === 0 && (
                  <p className="text-center text-textSecondary">
                    Inga bilder hittades i denna mapp.
                  </p>
                )
              )}
            </div>
          )}
        </SectionContent>
      </Section>
      <GalleryModal
        isOpen={currentIndex !== null}
        onClose={closeModal}
        image={currentImage}
        isLiked={
          !!currentImage && likedImages.includes(currentImage.originalKey)
        }
        onLike={toggleLike}
        onNext={goToNext}
        onPrevious={goToPrevious}
        hasNext={
          currentIndex !== null &&
          currentIndex < galleryEntries.images.length - 1
        }
        hasPrevious={currentIndex !== null && currentIndex > 0}
      />
    </main>
  )
}
