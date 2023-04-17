import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactInspector from 'vite-plugin-react-inspector'
import { reactClickToComponent } from "vite-plugin-react-click-to-component"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ReactInspector(),
    reactClickToComponent(),
    react()
  ],
})
