import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import checker from "vite-plugin-checker";

export default defineConfig({
  output: "server",
  integrations: [unocss({ injectReset: true }), solidJs()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [checker({ typescript: true })],
  },
  adapter: cloudflare(),
});
