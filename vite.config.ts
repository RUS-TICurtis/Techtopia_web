import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

function getMimeType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.svg') return 'image/svg+xml';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.css') return 'text/css';
  if (ext === '.js') return 'application/javascript';
  if (ext === '.json') return 'application/json';
  if (ext === '.woff') return 'font/woff';
  if (ext === '.woff2') return 'font/woff2';
  if (ext === '.ttf') return 'font/ttf';
  return 'application/octet-stream';
}

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'assets');
      const destDir = path.resolve(__dirname, 'dist/assets');
      
      if (fs.existsSync(srcDir)) {
        if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
          fs.mkdirSync(path.resolve(__dirname, 'dist'));
        }
        fs.cpSync(srcDir, destDir, { recursive: true });
        console.log('Copied assets directory to dist/assets successfully.');
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'serve-assets-dev',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const decodedUrl = decodeURIComponent(req.url || '');
            if (decodedUrl.startsWith('/assets/')) {
              // Strip query params if any
              const cleanPath = decodedUrl.split('?')[0];
              const filePath = path.join(__dirname, cleanPath);
              if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                res.setHeader('Content-Type', getMimeType(filePath));
                res.end(fs.readFileSync(filePath));
                return;
              }
            }
            next();
          });
        }
      },
      copyAssetsPlugin()
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
  };
});
