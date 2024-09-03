import { defineConfig } from 'vite';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    copy([
      { src: 'assets/pages/**/*', dest: 'dist/pages' } // Copie tout le contenu du dossier pages vers dist/pages
    ])
  ]
});
