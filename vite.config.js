import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/E-portfolio-2025/',  // <-- string + slash final
})

//npm run build
//npm run deploy
//npm run dev