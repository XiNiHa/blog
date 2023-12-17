declare global {
  import HtmxModule from "htmx.org";

  interface Window {
    htmx: typeof HtmxModule;
  }
}

export {};
