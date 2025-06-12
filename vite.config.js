import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base:/E-portfolio-2025/,
  plugins: [react()],
  
}))
