import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // process: "process/browser",
      // stream: "stream-browserify",
      // zlib: "browserify-zlib",
      // util: 'util'
    },
  },
})
