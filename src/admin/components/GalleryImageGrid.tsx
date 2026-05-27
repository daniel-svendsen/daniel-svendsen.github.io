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
    return <p className="text-center">Laddar bilder...</p>
  }

  if (error) {
    return <p className="text-center text-destructive">{error}</p>
  }

  if (images.length === 0) {
    return <p className="text-center">Inga bilder hittades i detta galleri.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {images.map((image, index) => (
        <div key={image.id} className="relative group aspect-square">
          <motion.img
            src={imageUrl(image.previewKey)}
            alt={image.fileName}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(index)}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            layoutId={`gallery-image-${image.id}`}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-lg bg-black/60 px-2 py-1">
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
