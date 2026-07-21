import { useEffect, useState } from 'react'
import { type ResponsiveImageAsset } from '@/utils/responsiveImages'

const availableFolders = {
  portraits: import.meta.glob<{ default: ResponsiveImageAsset }>(
    '../assets/portraits/*.{jpg,jpeg,png}',
    { query: '?responsive' },
  ),
  weddings: import.meta.glob<{ default: ResponsiveImageAsset }>(
    '../assets/weddings/*.{jpg,jpeg,png}',
    { query: '?responsive' },
  ),
  carousel: import.meta.glob<{ default: ResponsiveImageAsset }>(
    '../assets/carousel/*.{jpg,jpeg,png}',
    { query: '?responsive' },
  ),
}

export function useImportedImages(folders: string[]) {
  const [images, setImages] = useState<
    Record<string, ResponsiveImageAsset[]>
  >({})

  useEffect(() => {
    const loadImages = async () => {
      const newImages: Record<string, ResponsiveImageAsset[]> = {}

      for (const folder of folders) {
        if (availableFolders[folder]) {
          const modules = availableFolders[folder]
          const paths = Object.keys(modules)
          newImages[folder] = await Promise.all(
            paths.map(async (path) => {
              const mod = await modules[path]()
              return mod.default
            }),
          )
        } else {
          console.warn(`Folder '${folder}' is not recognized.`)
        }
      }

      setImages(newImages)
    }

    loadImages()
  }, [folders])

  return images
}
