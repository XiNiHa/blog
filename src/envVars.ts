import type { AstroGlobal } from "astro";

export const getEnvVars = (Astro: AstroGlobal) => {
  return {
    ...import.meta.env,
    // eslint-disable-next-line
    ...(Astro.locals as any)?.runtime?.env,
  } as Record<string, string>;
};
