import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths(), checker({ typescript: true })],
});
