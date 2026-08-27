import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // relative asset paths so the build works when served from any S3 bucket/prefix
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
