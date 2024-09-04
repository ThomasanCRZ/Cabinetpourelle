import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drainage: resolve(__dirname, 'assets/pages/drainage-lymphatique.html'),
        kobido: resolve(__dirname, 'assets/pages/kobido.html'),
        hydraface: resolve(__dirname, 'assets/pages/hydraface.html'),
        soinventre: resolve(__dirname, 'assets/pages/soin-du-ventre.html'),
        reflexologie: resolve(__dirname, 'assets/pages/reflexologie-plantaire.html'),
        tarifs: resolve(__dirname, 'assets/pages/tarifs.html'),
      }
    }
  }
})