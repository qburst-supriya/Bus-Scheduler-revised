import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/features': `${path.resolve(__dirname, './src/features/')}`,
      '@/components': `${path.resolve(__dirname, './src/components/')}`,
      '@/configs': `${path.resolve(__dirname, './src/configs/')}`,
      '@/assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@/services': `${path.resolve(__dirname, './src/services/')}`,
      '@/store': `${path.resolve(__dirname, './src/store/')}`,
      '@/utils': `${path.resolve(__dirname, './src/utils/')}`,
      '@/shared': `${path.resolve(__dirname, './src/shared/')}`,
    },
  },
})
