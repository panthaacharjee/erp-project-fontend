import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const url = "http://localhost:8000";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: `${url}`,
        changeOrigin: true,
      },
    },
  },
});
