import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? '';

          // לקבצי תמונה – בלי hash בשם
          if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(name)) {
            return 'assets/[name][extname]';
          }

          // לשאר הקבצים תשאיר hash
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
