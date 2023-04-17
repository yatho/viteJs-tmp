import { defineConfig } from 'vite'
import VitePluginTest from './vite-plugin-test/index.ts';

export default defineConfig({
  plugins: [
    VitePluginTest()
  ],
})