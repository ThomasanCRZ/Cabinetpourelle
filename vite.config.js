import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drainage: resolve(__dirname, 'assets/pages/drainage-lymphatique.html'),
        hydraface: resolve(__dirname, 'assets/pages/hydraface.html'),
        kobido: resolve(__dirname, 'assets/pages/kobido.html'),
        reflexologie: resolve(__dirname, 'assets/pages/reflexologie-plantaire.html'),
        soinventre: resolve(__dirname, 'assets/pages/soin-du-ventre.html'),
        spacapilaire: resolve(__dirname, 'assets/pages/spa-capilaire.html'),
        tarifs: resolve(__dirname, 'assets/pages/tarifs.html'),
      }
    }
  }
})