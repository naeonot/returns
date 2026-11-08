import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        about: fileURLToPath(new URL("./src/pages/about.html", import.meta.url)),
        contact: fileURLToPath(new URL("./src/pages/contact.html", import.meta.url)),
        faq: fileURLToPath(new URL("./src/pages/faq.html", import.meta.url))
      }
    }
  }
});
