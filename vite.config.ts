import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    root: "src", // Muda a raiz do Vite: procura o index.html de dev aqui dentro
    base: "/ra2581392413008/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "../", // O Vite atira o site compilado diretamente para a raiz do seu RA
      emptyOutDir: false, // Impede que o Vite apague o seu ficheiro .nojekyll e o README.md
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
