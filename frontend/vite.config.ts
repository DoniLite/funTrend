import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../www/js',
    // Important : output dans le dossier statique de Rust
    emptyOutDir: true, // Nettoyer le dossier de sortie avant le build
    rollupOptions: {
      input: {
        // Spécifiez vos points d'entrée ici
        main: './src/index.tsx'
      },
      output: {
        entryFileNames: '[name].js', // Nom des fichiers JS générés
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  publicDir: 'public', // Dossier pour les assets statiques (images, etc.)
  resolve: {
    alias: {
      '@': path.resolve(__dirname), // Alias pour les imports
    },
  },
});
