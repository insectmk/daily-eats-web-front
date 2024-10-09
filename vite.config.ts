import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'sass-embedded'

// https://vitejs.dev/config/
export default defineConfig({
  css: { // 配置sass
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
