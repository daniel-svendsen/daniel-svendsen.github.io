import React from 'react'
import { Trash2 } from 'lucide-react'
import { imageUrl } from '@/admin/utils/apiUrl'
import { FolderItem } from './FolderItem'
import type { GalleryImage } from '@/admin/types/gallery'

interface AdminImageGridProps {
  images: GalleryImage[]
  folders: string[]
  isLoading: boolean
  error: string | null
  onDeleteImage: (image: GalleryImage) => void
  onNavigateToFolder: (path: string) => void
  onClearFolder: (path: string) => void
}

export function AdminImageGrid({
  images,
  folders,
  isLoading,
  error,
  onDeleteImage,
  onNavigateToFolder,
  onClearFolder,
}: AdminImageGridProps) {
  if (isLoading) {
    return <p className="text-center text-textPrimary/68">Laddar...</p>
  }

  if (error) {
    return <p className="text-center text-destructive">{error}</p>
  }

  const hasContent = images.length > 0 || folders.length > 0

  if (!hasContent) {
    return (
      <p className="rounded-[1.5rem] border border-black/6 bg-white p-8 text-center text-textSecondary">
        Detta galleri är tomt.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {folders.map((path) => (
        <FolderItem
          key={path}
          path={path}
          onNavigate={onNavigateToFolder}
          onClearFolder={onClearFolder}
        />
      ))}
      {images.map((key) => (
        <div
          key={key.id}
          className="group relative aspect-square overflow-hidden rounded-[1.15rem] border border-black/6 bg-white"
        >
          <img
            src={imageUrl(key.previewKey)}
            alt={key.fileName}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-100 transition-opacity md:opacity-0 group-hover:opacity-100">
            <button
              onClick={() => onDeleteImage(key)}
              className="rounded-full bg-destructive p-2 text-white shadow-lg transition hover:bg-destructive/85"
              aria-label={`Ta bort bild ${key.fileName}`}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 bg-black/60 px-2 py-1">
            <p
              className="truncate text-[11px] leading-4 text-white"
              title={key.fileName}
            >
              {key.fileName}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
