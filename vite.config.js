import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/landing-page/',
  plugins: [vue()],
  build: {
    outDir: 'docs',
    sourcemap: false
  }
})
