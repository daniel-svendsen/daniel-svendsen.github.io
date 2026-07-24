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

export const getResponsiveImageSrc = (
  image: ImageAsset | undefined,
  preferredWidth: number,
): string | undefined => {
  if (!image) {
    return undefined
  }

  if (typeof image === 'string') {
    return image
  }

  const candidates = (image.sources ?? [])
    .flatMap((source) => source.srcSet.split(','))
    .map((candidate) => {
      const [src, widthDescriptor] = candidate.trim().split(/\s+/)
      return {
        src,
        width: Number.parseInt(widthDescriptor, 10),
      }
    })
    .filter(
      (candidate) =>
        Boolean(candidate.src) && Number.isFinite(candidate.width),
    )
    .sort((a, b) => a.width - b.width)

  return (
    candidates.find((candidate) => candidate.width >= preferredWidth)?.src ??
    candidates.at(-1)?.src ??
    image.src
  )
}
