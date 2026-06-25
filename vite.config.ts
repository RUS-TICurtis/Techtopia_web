import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// NOTE: Tailwind v4 config lives entirely in src/index.css via @theme {}.
// tailwind.config.js has been removed — it was dead code in a v4 project.

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3280,
    host: '0.0.0.0',
  },
  build: {
    // Warn threshold raised — code-splitting is a Phase 3 task
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting: separate vendor libs from app code
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['motion'],
          'vendor-supabase': ['@supabase/supabase-js'],
          'vendor-ui': ['lucide-react', 'react-helmet-async'],
        },
      },
    },
  },
});
