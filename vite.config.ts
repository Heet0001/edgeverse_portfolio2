import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Prevent invalid-hook-call from duplicate React copies in nested node_modules
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
})
