import { readFileSync } from "node:fs";

import fastGlob from "fast-glob";
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        my: Object.fromEntries(
          fastGlob.sync("./src/assets/icons/*.svg").map((path) => {
            const file = readFileSync(path, "utf-8");
            return [path.replace(/^.*\/([^/]+)\.svg$/, "$1"), file] as const;
          }),
        ),
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
