import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './', // Relativ bas för att fungera på GitHub Pages
  build: {
    outDir: 'docs', // Bygg till /docs-mappen
    emptyOutDir: true, // Rensa tidigare innehåll
  },
})
