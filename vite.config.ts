import { lingui } from "@lingui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ plugins: [["@lingui/swc-plugin", {}]] }), tsconfigPaths(), lingui()],
  server: { host: true },
});
