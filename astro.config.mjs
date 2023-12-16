import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

export default defineConfig({
  output: "server",
  integrations: [unocss()],
  vite: {
    plugins: [checker({ typescript: true }), tsconfigPaths()],
  },
});
