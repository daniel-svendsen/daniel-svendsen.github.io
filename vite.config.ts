import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import sitemap from 'vite-plugin-sitemap'
import fs from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'

const responsiveWidths = [480, 768, 1024, 1440, 1920]

function responsiveImagesPlugin(): Plugin {
  let isBuild = false

  return {
    name: 'responsive-images',
    enforce: 'pre',
    configResolved(config) {
      isBuild = config.command === 'build'
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
      const input = await fs.readFile(filePath)
      const metadata = await sharp(input).metadata()
      const originalWidth = metadata.width ?? responsiveWidths[0]
      const originalHeight = metadata.height
      const outputWidths = responsiveWidths.filter((width) => width < originalWidth)
      outputWidths.push(originalWidth)

      const imageName = path.basename(filePath, path.extname(filePath))
      const formats = [
        { extension: 'avif', type: 'image/avif', quality: 58 },
        { extension: 'webp', type: 'image/webp', quality: 78 },
      ] as const

      const declarations: string[] = []
      const sources = await Promise.all(
        formats.map(async (format) => {
          const srcSetParts = await Promise.all(
            Array.from(new Set(outputWidths)).map(async (width, index) => {
              const output = await sharp(input)
                .rotate()
                .resize({ width, withoutEnlargement: true })
                .toFormat(format.extension, { quality: format.quality })
                .toBuffer()
              const referenceId = this.emitFile({
                type: 'asset',
                name: `${imageName}-${width}.${format.extension}`,
                source: output,
              })
              const variableName = `${format.extension}${index}`
              declarations.push(
                `const ${variableName} = import.meta.ROLLUP_FILE_URL_${referenceId};`,
              )
              return `\${${variableName}} ${width}w`
            }),
          )

          return `{ type: ${JSON.stringify(format.type)}, srcSet: \`${srcSetParts.join(', ')}\` }`
        }),
      )

      return `
        import src from ${JSON.stringify(`${filePath}?url`)};
        ${declarations.join('\n')}
        export default {
          src,
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
    sitemap({
      hostname: 'https://www.svendsenphotography.com',
      dynamicRoutes: [
        '/services/',
        '/weddings/',
        '/portraits/',
        '/faq/',
        '/contact/',
        '/webservices/',
        '/privacy/',
      ],
      generateRobotsTxt: true,
    }),
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
