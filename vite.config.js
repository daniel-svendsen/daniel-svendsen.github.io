import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import sitemap from 'vite-plugin-sitemap';
import path from 'path';

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
            outDir: 'docs',
            readable: true,
        }),
    ],
    base: '/',
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        chunkSizeWarningLimit: 1000, // Ökar gränsen till 1000 KB för att slippa varning
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react')) return 'vendor-react';
                        if (id.includes('react-router')) return 'vendor-router';
                        return 'vendor';
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
});
