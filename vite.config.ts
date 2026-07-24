import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import type { Plugin } from 'vite'

const responsiveProfiles = {
  responsive: {
    widths: [640, 1280, 1920],
    quality: 78,
  },
  'responsive-small': {
    widths: [320, 480, 640, 960, 1280],
    quality: 72,
  },
  'responsive-icon': {
    widths: [40, 80],
    quality: 78,
  },
  'responsive-poster': {
    widths: [480, 640],
    quality: 72,
  },
} as const
const responsiveAssetDir = 'assets/responsive'
const responsiveFormats = [
  { extension: 'webp', type: 'image/webp' },
] as const
const responsiveCacheVersion = 'v1'

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
  let cacheDir = ''
  let processedImages = 0
  let cacheHits = 0
  let generatedVariants = 0
  let inBuildReuses = 0
  const variantJobs = new Map<string, Promise<Buffer>>()

  return {
    name: 'responsive-images',
    enforce: 'pre',
    configResolved(config) {
      root = config.root
      base = config.base
      isBuild = config.command === 'build'
      isClientBuild = config.command === 'build' && !config.build.ssr

      const configuredCacheDir = process.env.RESPONSIVE_IMAGE_CACHE_DIR?.trim()
      const npmCacheDir = process.env.npm_config_cache?.trim()
      const cloudflareNpmCacheDir =
        npmCacheDir ??
        (process.env.HOME?.trim()
          ? path.join(process.env.HOME, '.npm')
          : undefined)

      cacheDir = configuredCacheDir
        ? path.resolve(root, configuredCacheDir)
        : process.env.CF_PAGES === '1' && cloudflareNpmCacheDir
          ? path.join(cloudflareNpmCacheDir, 'svendsen-responsive-images')
          : path.join(root, 'node_modules', '.cache', 'responsive-images')
    },
    buildStart() {
      processedImages = 0
      cacheHits = 0
      generatedVariants = 0
      inBuildReuses = 0
      variantJobs.clear()
    },
    async load(id) {
      const [filePath, query] = id.split('?')

      const profile =
        responsiveProfiles[query as keyof typeof responsiveProfiles]

      if (!profile) {
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
      const inputHash = input
        ? crypto.createHash('sha256').update(input).digest('hex')
        : undefined
      const originalWidth = metadata.width ?? profile.widths[0]
      const originalHeight = metadata.height
      const outputWidths = profile.widths.filter((width) => width < originalWidth)
      const largestResponsiveWidth = profile.widths.at(-1) ?? originalWidth

      if (originalWidth <= largestResponsiveWidth) {
        outputWidths.push(originalWidth)
      }

      const baseImageName = getResponsiveImageName(root, filePath)
      const imageName =
        query === 'responsive' ? baseImageName : `${baseImageName}-${query}`
      const originalFileName = `${responsiveAssetDir}/${imageName}${path.extname(filePath)}`
      const src = assetUrl(base, originalFileName)

      if (isClientBuild && input) {
        processedImages += 1
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

              if (isClientBuild && input && inputHash) {
                const cacheKey = crypto
                  .createHash('sha256')
                  .update(
                    JSON.stringify({
                      version: responsiveCacheVersion,
                      inputHash,
                      width,
                      extension: format.extension,
                      quality: profile.quality,
                    }),
                  )
                  .digest('hex')
                const cacheFile = path.join(
                  cacheDir,
                  `${cacheKey}.${format.extension}`,
                )
                let outputJob = variantJobs.get(cacheKey)

                if (outputJob) {
                  inBuildReuses += 1
                } else {
                  outputJob = (async () => {
                    try {
                      const cachedOutput = await fs.readFile(cacheFile)
                      cacheHits += 1
                      return cachedOutput
                    } catch (error) {
                      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
                        this.warn(
                          `Kunde inte läsa bildcache ${cacheFile}: ${String(error)}`,
                        )
                      }
                    }

                    const generatedOutput = await sharp(input)
                      .rotate()
                      .resize({ width, withoutEnlargement: true })
                      .toFormat(format.extension, { quality: profile.quality })
                      .toBuffer()

                    generatedVariants += 1

                    try {
                      await fs.mkdir(cacheDir, { recursive: true })
                      await fs.writeFile(cacheFile, generatedOutput)
                    } catch (error) {
                      this.warn(
                        `Kunde inte skriva bildcache ${cacheFile}: ${String(error)}`,
                      )
                    }

                    return generatedOutput
                  })()
                  variantJobs.set(cacheKey, outputJob)
                }

                const output = await outputJob

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
    closeBundle() {
      if (!isClientBuild) {
        return
      }

      this.info(
        `Bildcache: ${cacheHits} träffar, ${generatedVariants} genererade, ${inBuildReuses} återanvända i samma bygge för ${processedImages} bilder.`,
      )
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
