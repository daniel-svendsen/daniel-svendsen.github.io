export interface ResponsiveImageSource {
  type: string
  srcSet: string
}

export interface ResponsiveImageAsset {
  src: string
  sources?: ResponsiveImageSource[]
  width?: number
  height?: number
}

export type ImageAsset = string | ResponsiveImageAsset

export const getImageSrc = (image: ImageAsset | undefined): string | undefined => {
  if (!image) {
    return undefined
  }

  return typeof image === 'string' ? image : image.src
}
