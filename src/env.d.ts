// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import "@total-typescript/ts-reset";

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare global {
  declare namespace App {
    interface Locals extends Runtime {}
  }

  declare module "*.wasm?module" {
    const mod: WebAssembly.Module;
    export default mod;
  }
}
