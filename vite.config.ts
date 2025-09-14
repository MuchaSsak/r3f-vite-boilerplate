import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          leva: ["leva"],
          three: ["three"],
          gsap: ["gsap"],
          "@react-three/fiber": ["@react-three/fiber"],
          "@react-three/drei": ["@react-three/drei"],
        },
      },
    },
  },
  assetsInclude: ["**/*.fbx", "**/*.hdr"],
  plugins: [react(), tailwindcss()],
});
