import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'

export default defineConfig({
  plugins: [
    vuePlugin(),
    vueJsx(),
  ],
  build: {
    minify: false
  }
})
