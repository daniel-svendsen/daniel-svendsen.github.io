import React from 'react'
import { motion } from 'framer-motion'
import { imageUrl } from '@/admin/utils/apiUrl'

interface GalleryImageGridProps {
  imageKeys: string[]
  isLoading: boolean
  error: string
  onImageClick: (index: number) => void
}

export function GalleryImageGrid({
  imageKeys,
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

  if (imageKeys.length === 0) {
    return <p className="text-center">Inga bilder hittades i detta galleri.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {imageKeys.map((key, index) => (
        <div key={key} className="relative group aspect-square">
          <motion.img
            src={imageUrl(key)}
            alt={key}
            onClick={() => onImageClick(index)}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            layoutId={`gallery-image-${key}`}
          />
        </div>
      ))}
    </div>
  )
}