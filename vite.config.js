import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ändra till ditt repo om det behövs
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  assetsInclude: ['**/*.jpg', '**/*.png'], // Inkludera bildfiler
});
