import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // A raiz do projeto deve estar configurada corretamente
  build: {
    outDir: 'dist', // Pasta de saída para o build
  },
  publicDir: 'public', // Garantindo que o diretório 'public' seja tratado corretamente
})
