import React from 'react'

import {
  getImageSrc,
  type ImageAsset,
  type ResponsiveImageAsset,
} from '@/utils/responsiveImages'

interface ResponsiveImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  image: ImageAsset
}

const isResponsiveImage = (image: ImageAsset): image is ResponsiveImageAsset =>
  typeof image !== 'string' && Array.isArray(image.sources)

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  image,
  sizes = '100vw',
  ...props
}) => {
  const src = getImageSrc(image)

  if (!src) {
    return null
  }

  if (!isResponsiveImage(image) || image.sources?.length === 0) {
    return <img src={src} {...props} />
  }

  return (
    <picture>
      {image.sources?.map((source) => (
        <source
          key={source.type}
          type={source.type}
          srcSet={source.srcSet}
          sizes={sizes}
        />
      ))}
      <img
        src={src}
        width={image.width}
        height={image.height}
        sizes={sizes}
        {...props}
      />
    </picture>
  )
}
