import postcss from "./postcss.config.js"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
const development = process.env.NODE_ENV === "development"

export default defineConfig({
  define: {
    "global": {}
  },
  build: {
    minify: !development,
    sourcemap: development
  },
  plugins: [svelte({
    configFile: "./svelte.config.js"
  })],
  css: {
    postcss
  }
})
