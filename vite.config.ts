import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@heroui/react", "@geist-ui/icons", "framer-motion"],
          i18n: [
            "i18next",
            "i18next-browser-languagedetector",
            "i18next-http-backend",
            "react-i18next",
          ],
        },
      },
    },
  },
});
