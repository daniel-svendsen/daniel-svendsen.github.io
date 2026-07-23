import type {
  GalleryDetailResponse,
  GalleryImage,
  GalleryImagesResponse,
} from './galleryContract'

export type {
  GalleryDetailResponse,
  GalleryImage,
  GalleryImagesResponse,
} from './galleryContract'

export type GalleryImageResponse = string | GalleryImage
export type CompatibleGalleryImagesResponse = GalleryImageResponse[]
export type CompatibleGalleryDetailResponse = Omit<
  GalleryDetailResponse,
  'images'
> & {
  images: CompatibleGalleryImagesResponse
}

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

export const galleryImageFolderPath = (
  image: GalleryImage,
  galleryId: string,
): string => {
  const galleryPrefix = galleryId ? `${galleryId.replace(/\/$/, '')}/` : ''
  const key = image.originalKey || image.previewKey || image.id
  const relativeKey =
    galleryPrefix && key.startsWith(galleryPrefix)
      ? key.slice(galleryPrefix.length)
      : key
  const parts = relativeKey.split('/').filter(Boolean)
  const systemFolderIndex = parts.findIndex(
    (part) => part === 'originals' || part === 'previews',
  )

  if (systemFolderIndex !== -1) {
    parts.splice(systemFolderIndex, 1)
  }

  parts.pop()
  return parts.join('/')
}
