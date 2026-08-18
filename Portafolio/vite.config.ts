import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    visualizer({ open: true, gzipSize: true }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});