import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import type { Plugin } from 'vite'

const responsiveWidths = [480, 768, 1024, 1440, 1920]
const responsiveAssetDir = 'assets/responsive'
const responsiveFormats = [
  { extension: 'avif', type: 'image/avif', quality: 58 },
  { extension: 'webp', type: 'image/webp', quality: 78 },
] as const

function assetUrl(base: string, fileName: string) {
  return `${base.endsWith('/') ? base : `${base}/`}${fileName}`
}

function getResponsiveImageName(root: string, filePath: string) {
  const relativePath = path.relative(root, filePath).replace(/\\/g, '/')
  const imageName = path.basename(filePath, path.extname(filePath))
  const pathHash = crypto
    .createHash('sha256')
    .update(relativePath)
    .digest('hex')
    .slice(0, 8)

  return `${imageName}-${pathHash}`
}

function responsiveImagesPlugin(): Plugin {
  let isBuild = false
  let isClientBuild = false
  let root = process.cwd()
  let base = '/'

  return {
    name: 'responsive-images',
    enforce: 'pre',
    configResolved(config) {
      root = config.root
      base = config.base
      isBuild = config.command === 'build'
      isClientBuild = config.command === 'build' && !config.build.ssr
    },
    async load(id) {
      const [filePath, query] = id.split('?')

      if (query !== 'responsive') {
        return null
      }

      if (!isBuild) {
        return `
          import src from ${JSON.stringify(`${filePath}?url`)};
          export default { src, sources: [] };
        `
      }

      const sharp = (await import('sharp')).default
      const metadata = await sharp(filePath).metadata()
      const input = isClientBuild ? await fs.readFile(filePath) : undefined
      const originalWidth = metadata.width ?? responsiveWidths[0]
      const originalHeight = metadata.height
      const outputWidths = responsiveWidths.filter((width) => width < originalWidth)
      outputWidths.push(originalWidth)

      const imageName = getResponsiveImageName(root, filePath)
      const originalFileName = `${responsiveAssetDir}/${imageName}${path.extname(filePath)}`
      const src = assetUrl(base, originalFileName)

      if (isClientBuild && input) {
        this.emitFile({
          type: 'asset',
          fileName: originalFileName,
          source: input,
        })
      }

      const sources = await Promise.all(
        responsiveFormats.map(async (format) => {
          const srcSetParts = await Promise.all(
            Array.from(new Set(outputWidths)).map(async (width) => {
              const fileName = `${responsiveAssetDir}/${imageName}-${width}.${format.extension}`

              if (isClientBuild && input) {
                const output = await sharp(input)
                  .rotate()
                  .resize({ width, withoutEnlargement: true })
                  .toFormat(format.extension, { quality: format.quality })
                  .toBuffer()

                this.emitFile({
                  type: 'asset',
                  fileName,
                  source: output,
                })
              }

              return `${assetUrl(base, fileName)} ${width}w`
            }),
          )

          return `{ type: ${JSON.stringify(format.type)}, srcSet: \`${srcSetParts.join(', ')}\` }`
        }),
      )

      return `
        export default {
          src: ${JSON.stringify(src)},
          sources: [${sources.join(', ')}],
          width: ${originalWidth},
          height: ${originalHeight ?? 'undefined'},
        };
      `
    },
  }
}

export default defineConfig({
  plugins: [
    responsiveImagesPlugin(),
    react(),
    tsconfigPaths(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: true,
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  resolve: {
    // Använder path.resolve, vilket är standard för Vite/TS-projekt
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
