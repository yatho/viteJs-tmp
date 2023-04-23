import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactInspector from 'vite-plugin-react-inspector';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactInspector()],
  server: {
    port: 4200
  }
})
