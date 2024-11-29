import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Basinställning för relativ routing
  build: {
    outDir: 'dist', // Bygg till en separat 'dist' mapp
    emptyOutDir: true, // Rensa innehållet i 'dist' innan bygg
  },
})
