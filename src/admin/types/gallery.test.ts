import { describe, expect, it } from 'vitest'
import {
  normalizeGalleryImage,
  normalizeGalleryImages,
  type GalleryImage,
} from './gallery'

describe('gallery image response normalization', () => {
  it('preserves the structured Worker response', () => {
    const image: GalleryImage = {
      id: 'gallery/portrait',
      previewKey: 'gallery/previews/portrait.webp',
      originalKey: 'gallery/originals/portrait.jpg',
      fileName: 'portrait.jpg',
    }

    expect(normalizeGalleryImage(image)).toBe(image)
  })

  it('normalizes a legacy string response without changing its key', () => {
    expect(normalizeGalleryImage('gallery/legacy/photo.jpg')).toEqual({
      id: 'gallery/legacy/photo.jpg',
      previewKey: 'gallery/legacy/photo.jpg',
      originalKey: 'gallery/legacy/photo.jpg',
      fileName: 'photo.jpg',
    })
  })

  it('normalizes mixed legacy and structured response arrays', () => {
    const image: GalleryImage = {
      id: 'gallery/current',
      previewKey: 'gallery/previews/current.webp',
      originalKey: 'gallery/originals/current.jpg',
      fileName: 'current.jpg',
    }

    expect(normalizeGalleryImages(['gallery/legacy.jpg', image])).toEqual([
      {
        id: 'gallery/legacy.jpg',
        previewKey: 'gallery/legacy.jpg',
        originalKey: 'gallery/legacy.jpg',
        fileName: 'legacy.jpg',
      },
      image,
    ])
  })
})
