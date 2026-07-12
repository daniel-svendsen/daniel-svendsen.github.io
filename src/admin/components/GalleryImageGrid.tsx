import React from 'react'
import { motion } from 'framer-motion'
import { imageUrl } from '@/admin/utils/apiUrl'
import type { GalleryImage } from '@/admin/types/gallery'

interface GalleryImageGridProps {
  images: GalleryImage[]
  isLoading: boolean
  error: string
  onImageClick: (index: number) => void
}

export function GalleryImageGrid({
  images,
  isLoading,
  error,
  onImageClick,
}: GalleryImageGridProps) {
  if (isLoading) {
    return <p className="text-center text-textPrimary/64">Laddar bilder...</p>
  }

  if (error) {
    return <p className="text-center text-destructive">{error}</p>
  }

  if (images.length === 0) {
    return (
      <p className="rounded-[1.25rem] border border-black/6 bg-white p-8 text-center text-textPrimary/64 shadow-[0_18px_55px_-50px_rgba(31,41,55,0.55)]">
        Inga bilder hittades i detta galleri.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative aspect-square overflow-hidden rounded-[1.15rem] border border-black/6 bg-white shadow-[0_18px_55px_-50px_rgba(31,41,55,0.55)]"
        >
          <motion.img
            src={imageUrl(image.previewKey)}
            alt={image.fileName}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(index)}
            className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            layoutId={`gallery-image-${image.id}`}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/55 px-2 py-1 backdrop-blur-sm">
            <p
              className="truncate text-[11px] leading-4 text-white"
              title={image.fileName}
            >
              {image.fileName}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
