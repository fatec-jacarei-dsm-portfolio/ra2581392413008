import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: "/ra2581392413008/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      outDir: "../", // O Vite vai gerar os ficheiros finais diretamente na raiz do seu RA
      emptyOutDir: false, // Regra essencial: Impede que o Vite elimine o README.md ou a própria pasta 'projeto'
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
