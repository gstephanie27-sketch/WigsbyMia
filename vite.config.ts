import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "next/link": fileURLToPath(
        new URL("./app/components/GithubLink.tsx", import.meta.url),
      ),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./github-index.html", import.meta.url)),
        contact: fileURLToPath(new URL("./github-contact.html", import.meta.url)),
      },
    },
  },
});
