import React from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'
import { ChevronLeft, ChevronRight, Download, Heart } from 'lucide-react'
import { imageUrl } from '@/admin/utils/apiUrl'

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  imageKey: string | null
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
  imageKey,
  isLiked,
  onLike,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: GalleryModalProps) {
  if (!imageKey) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.img
          key={imageKey}
          src={imageUrl(imageKey)}
          alt="Förstorad bild"
          className="max-w-[85vw] max-h-[85vh] object-contain z-10"
          layoutId={`gallery-image-${imageKey}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 100 || velocity.x > 500) onPrevious()
            else if (offset.x < -100 || velocity.x < -500) onNext()
          }}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-4 p-2 bg-overlay rounded-full">
          <Button asChild subVariant="rounded" size="sm">
            <a href={imageUrl(imageKey)} download={imageKey.split('/').pop()}>
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
              onLike(imageKey)
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
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-overlay text-white rounded-full hover:opacity-80"
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
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-overlay text-white rounded-full hover:opacity-80"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </Modal>
  )
}