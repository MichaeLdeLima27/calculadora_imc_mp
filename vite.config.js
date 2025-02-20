import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório de saída para o build
  },
  resolve: {
    alias: {
      '@': '/src', // Configuração de alias, se necessário
    },
  },
});
