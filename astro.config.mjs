import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import checker from "vite-plugin-checker";

export default defineConfig({
  output: "server",
  integrations: [unocss({ injectReset: true })],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [checker({ typescript: true })],
  },
});
