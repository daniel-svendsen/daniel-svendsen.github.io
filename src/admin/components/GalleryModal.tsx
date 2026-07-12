import React from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'
import { ChevronLeft, ChevronRight, Download, Heart } from 'lucide-react'
import { imageUrl } from '@/admin/utils/apiUrl'
import type { GalleryImage } from '@/admin/types/gallery'

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  image: GalleryImage | null
  isLiked: boolean
  onLike: (imageKey: string) => void
  onNext: () => void
  onPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export function GalleryModal({
  isOpen,
  onClose,
  image,
  isLiked,
  onLike,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: GalleryModalProps) {
  if (!image) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex h-full w-full items-center justify-center">
        <motion.img
          key={image.id}
          src={imageUrl(image.previewKey)}
          alt="Förstorad bild"
          className="z-10 max-h-[85vh] max-w-[85vw] object-contain"
          layoutId={`gallery-image-${image.id}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 100 || velocity.x > 500) onPrevious()
            else if (offset.x < -100 || velocity.x < -500) onNext()
          }}
        />
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-3 rounded-full bg-black/55 p-2 backdrop-blur-md">
          <Button asChild subVariant="rounded" size="sm">
            <a href={imageUrl(image.originalKey)} download={image.fileName}>
              <Download className="mr-2 h-4 w-4" />
              Ladda ner
            </a>
          </Button>
          <Button
            variant="default"
            subVariant="rounded"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              onLike(image.originalKey)
            }}
          >
            <Heart
              className={`mr-2 h-4 w-4 transition-colors ${
                isLiked ? 'fill-destructive text-destructive' : ''
              }`}
            />
            {isLiked ? 'Gillad' : 'Gilla'}
          </Button>
        </div>
        {hasPrevious && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrevious()
            }}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur-md transition-opacity hover:opacity-80 sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur-md transition-opacity hover:opacity-80 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </Modal>
  )
}
