import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import sitemap from 'vite-plugin-sitemap'
import path from 'path' // Importera path

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
        '/webservices',
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