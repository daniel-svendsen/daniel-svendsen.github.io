import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import sitemap from 'vite-plugin-sitemap'
import * as fs from 'fs'
import path from 'path'

function ensureRobotsTxt() {
  return {
    name: 'ensure-robots-txt',
    generateBundle() {
      const robotsPath = path.resolve(__dirname, 'dist', 'robots.txt')
      if (!fs.existsSync(robotsPath)) {
        fs.writeFileSync(robotsPath, 'User-agent: *\nDisallow:')
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ensureRobotsTxt(),
    sitemap({
      hostname: 'https://www.svendsenphotography.com',
      dynamicRoutes: [
        '/services',
        '/weddings',
        '/portraits',
        '/faq',
        '/contact',
        '/work',
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
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  server: {
    proxy: {
      '/api': {
        target:
          'https://daniel-svendsengithubio-production-c975.up.railway.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})