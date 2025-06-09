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
    return <p>Laddar gallerier...</p>
  }

  if (error) {
    return <p className="text-destructive">{error}</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleries.map((gallery) => {
        const galleryId = gallery.replace(/\/$/, '')
        return (
          <div
            key={galleryId}
            className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between"
          >
            <p className="font-semibold text-textPrimary truncate">
              {galleryId}
            </p>
            <div className="flex items-center justify-between mt-4 gap-2">
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
                className="p-2 h-auto"
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