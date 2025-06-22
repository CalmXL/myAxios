import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 't-axios',
      fileName: 't-axios'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'lib')
    }
  }
})
