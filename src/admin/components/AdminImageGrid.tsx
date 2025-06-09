import React from 'react'
import { Trash2 } from 'lucide-react'
import { imageUrl } from '@/admin/utils/apiUrl'

interface AdminImageGridProps {
  images: string[]
  isLoading: boolean
  error: string | null
  onDelete: (imageKey: string) => void
}

export function AdminImageGrid({
  images,
  isLoading,
  error,
  onDelete,
}: AdminImageGridProps) {
  if (isLoading) {
    return <p>Laddar...</p>
  }

  if (error) {
    return <p className="text-center text-destructive">{error}</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {images.map((key) => (
        <div key={key} className="relative group aspect-square">
          <img
            src={imageUrl(key)}
            alt={key}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-overlay flex items-center justify-center rounded-lg opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onDelete(key)}
              className="p-2 bg-destructive text-white rounded-full"
              aria-label={`Ta bort bild ${key}`}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}