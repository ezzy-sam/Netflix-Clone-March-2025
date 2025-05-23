import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/Netflix-Clone-March-2025",
  plugins: [react()],
server: {
host: true,
  port: 5173,
},
})
