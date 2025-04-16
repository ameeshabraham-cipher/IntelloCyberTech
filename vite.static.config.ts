import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages - use your repo name here
  base: '/IntelloCyberTech/', 
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // Faster than terser
    assetsDir: 'assets',
    rollupOptions: {
      input: path.resolve(__dirname, 'client/index.html')
    }
  },
});