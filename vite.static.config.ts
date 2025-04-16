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
  root: 'client', // Set the root to the client directory
  publicDir: '../public', // Set the public directory relative to the root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: '../dist',  // Output to the root dist folder
    sourcemap: false,
    minify: 'esbuild', // Faster than terser
    assetsDir: 'assets',
    emptyOutDir: true
  },
});