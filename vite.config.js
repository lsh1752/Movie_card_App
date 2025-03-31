import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Movie_card_App',
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    historyApiFallback: true,
  },
})
