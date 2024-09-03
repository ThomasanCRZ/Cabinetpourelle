import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drainage: resolve(__dirname, 'assets/pages/drainage-lymphatique.html'),
        kobido: resolve(__dirname, 'assets/pages/kobido.html'),
        soinventre: resolve(__dirname, 'assets/pages/soin-du-ventre.html'),
      }
    }
  }
})