import { useEffect, useState } from 'react'
import { type ResponsiveImageAsset } from '@/utils/responsiveImages'

type ImageModuleLoader = () => Promise<{
  default: ResponsiveImageAsset
}>

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
} satisfies Record<string, Record<string, ImageModuleLoader>>

export type ImportedImageFolder = keyof typeof availableFolders
type ImportedImages = Partial<
  Record<ImportedImageFolder, ResponsiveImageAsset[]>
>

export function useImportedImages(
  folders: readonly ImportedImageFolder[],
): ImportedImages {
  const [images, setImages] = useState<ImportedImages>({})
  const folderKey = JSON.stringify(folders)

  useEffect(() => {
    let isCurrentRequest = true

    const loadImages = async () => {
      const requestedFolders = JSON.parse(
        folderKey,
      ) as ImportedImageFolder[]
      const newImages: ImportedImages = {}

      for (const folder of requestedFolders) {
        const modules: Record<string, ImageModuleLoader> | undefined =
          availableFolders[folder]

        if (modules) {
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

      if (isCurrentRequest) {
        setImages(newImages)
      }
    }

    loadImages()

    return () => {
      isCurrentRequest = false
    }
  }, [folderKey])

  return images
}
