import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
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