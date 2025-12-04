import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Don't inline any assets
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep images in their original structure
          if (assetInfo.name && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  publicDir: 'public', // Explicitly set public directory
});
