import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.svendsenphotography.com', // Din faktiska URL
      dynamicRoutes: [
        '/services',
        '/weddings',
        '/portraits',
        '/faq',
        '/contact',
        '/work',
      ],
      outDir: 'docs', // Explicit specifikation av utmappning
      readable: true, // Gör det enklare att läsa filen
    }),
  ],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png'], // Inkludera bildfiler
  resolve: {
    alias: {
      '/@': '/src',
    },
  },
});
