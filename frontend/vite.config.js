import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' to access from other devices
    port: 4000,        // change this to your desired port
  }
})
