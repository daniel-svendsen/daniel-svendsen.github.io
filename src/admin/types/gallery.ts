export interface GalleryImage {
  id: string
  previewKey: string
  originalKey: string
  fileName: string
}

export type GalleryImageResponse = string | GalleryImage

export const normalizeGalleryImage = (
  image: GalleryImageResponse,
): GalleryImage => {
  if (typeof image !== 'string') return image

  const fileName = image.split('/').pop() || 'image'
  return {
    id: image,
    previewKey: image,
    originalKey: image,
    fileName,
  }
}

export const normalizeGalleryImages = (
  images: GalleryImageResponse[] = [],
): GalleryImage[] => images.map(normalizeGalleryImage)
