import React from 'react'
import { Button, LinkButton } from '@/components/Button'
import { Eye, Trash2 } from 'lucide-react'

type GalleryListProps = {
  galleries: string[]
  isLoading: boolean
  error: string
  onDeleteGallery: (galleryName: string) => void
}

export function GalleryList({
  galleries,
  isLoading,
  error,
  onDeleteGallery,
}: GalleryListProps) {
  if (isLoading) {
    return <p className="text-textPrimary/68">Laddar gallerier...</p>
  }

  if (error) {
    return <p className="text-destructive">{error}</p>
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {galleries.map((gallery) => {
        const galleryId = gallery.replace(/\/$/, '')
        return (
          <div
            key={galleryId}
            className="flex flex-col justify-between rounded-[1.25rem] border border-black/6 bg-white p-5 shadow-[0_18px_45px_-38px_rgba(31,41,55,0.38)]"
          >
            <p className="truncate text-base font-semibold text-textPrimary">
              {galleryId}
            </p>
            <div className="mt-5 flex items-center justify-between gap-2">
              <a
                href={`/galleri/${galleryId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  subVariant="rounded"
                  className="w-full"
                >
                  <span>
                    <Eye className="mr-2 h-4 w-4" /> Visa
                  </span>
                </Button>
              </a>
              <LinkButton
                to={`/admin/gallery/${galleryId}`}
                variant="default"
                size="sm"
                subVariant="rounded"
                className="flex-1"
              >
                Hantera
              </LinkButton>
              <Button
                variant="ghost"
                className="h-9 w-9 p-0"
                onClick={() => onDeleteGallery(gallery)}
                aria-label={`Ta bort galleri ${galleryId}`}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
