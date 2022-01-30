import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { adorableCSS } from "adorable-css/vite-plugin-adorable-css";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), adorableCSS()],
  resolve: {
    alias: {
      "@": path.resolve("/src"),
    },
  },
  base: "/i4song-blog",
});
