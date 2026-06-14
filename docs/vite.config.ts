import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: "/ra2581392413008/", // Define o caminho da subpasta no GitHub Pages
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      outDir: "../", // Joga o build compilado direto na pasta do seu RA
      emptyOutDir: false, // Muito importante: impede o Vite de apagar seus outros arquivos na pasta raiz
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
