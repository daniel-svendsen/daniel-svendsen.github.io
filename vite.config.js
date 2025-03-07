import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'
import visualizer from 'rollup-plugin-visualizer'

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
      outDir: 'dist',
      readable: true,
    }),
    visualizer.default({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('react-router')) return 'vendor-router'
            if (id.includes('jspdf')) return 'vendor-jspdf'
            return 'vendor'
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  optimizeDeps: {
    include: ['framer-motion'],
    exclude: ['@react-pdf/renderer'],
  },
})