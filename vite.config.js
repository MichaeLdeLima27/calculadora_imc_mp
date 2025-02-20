import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Certifique-se de que a raiz está configurada corretamente
  build: {
    outDir: 'dist',
  },
});
