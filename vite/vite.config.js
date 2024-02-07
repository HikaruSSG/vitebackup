import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Inspect()],
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        service: resolve(__dirname, 'src/service.html'),
        
        
      },
    },
  },
  server: {
    port: 8080
  }
})
