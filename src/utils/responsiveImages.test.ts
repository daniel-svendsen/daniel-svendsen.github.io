import { describe, expect, it } from 'vitest'

import { getResponsiveImageSrc } from './responsiveImages'

describe('getResponsiveImageSrc', () => {
  const image = {
    src: '/original.jpg',
    sources: [
      {
        type: 'image/webp',
        srcSet: '/image-480.webp 480w, /image-640.webp 640w',
      },
    ],
  }

  it('selects the smallest candidate that covers the preferred width', () => {
    expect(getResponsiveImageSrc(image, 500)).toBe('/image-640.webp')
  })

  it('falls back to the largest candidate when the preferred width is larger', () => {
    expect(getResponsiveImageSrc(image, 800)).toBe('/image-640.webp')
  })

  it('keeps a plain image URL unchanged', () => {
    expect(getResponsiveImageSrc('/image.jpg', 640)).toBe('/image.jpg')
  })
})
