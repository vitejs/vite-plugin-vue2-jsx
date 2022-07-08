import { defineConfig } from 'vite'

import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '../src/index'

export default defineConfig({
  resolve: {
    alias: {
      '@': __dirname
    }
  },
  build: {
    sourcemap: true,
    minify: false
  },
  plugins: [
    vue2(),
    vue2Jsx()
  ]
})
