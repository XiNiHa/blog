import HtmxModule from "htmx.org";

declare global {
  interface Window {
    htmx: typeof HtmxModule;
  }
}

export {};
