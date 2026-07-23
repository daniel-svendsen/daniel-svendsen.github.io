export interface GalleryImage {
  id: string
  previewKey: string
  originalKey: string
  fileName: string
}

export type GalleryImagesResponse = GalleryImage[]

export interface GalleryDetailResponse {
  images: GalleryImagesResponse
  folders: string[]
  likedImages: string[]
}
