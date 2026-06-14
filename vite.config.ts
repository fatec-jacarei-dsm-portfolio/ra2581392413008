import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: "/ra2581392413008/", // Mantém o caminho correto para o GitHub Pages
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      outDir: "docs", // O Vite vai criar a pasta docs/ e colocar o build aqui
      emptyOutDir: true,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
