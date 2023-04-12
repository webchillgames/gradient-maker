import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: import.meta.env.MODE === 'production' ? '/gradient-maker/' : '/',
  base: '/gradient-maker/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   port: 8080,
  //   hot: true,
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/_variables.scss";
        `
      }
    }
  }
})
