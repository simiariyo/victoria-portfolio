import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// const isProduction = process.env.NODE_ENV === 'production';

// // Set the base path conditionally
// const base = isProduction ? '/victoria-portfolio/' : '/';
export default defineConfig({
  plugins: [react()],
  base: '/victoria-portfolio/',
  build: {
    outDir: 'dist',
  },
});
