import { onMount } from "solid-js";

interface Props {
  after: string;
}

export default function PostListPartLoader(props: Props) {
  const el = (<div />) as HTMLDivElement;

  let lastFetch = 0;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && lastFetch < Date.now() - 1000) {
          lastFetch = Date.now();
          void window.htmx
            .ajax("GET", `/partials/posts?after=${props.after}`, {
              source: el,
              swap: "outerHTML",
            })
            .finally(() => observer.disconnect());
        }
      },
      {
        rootMargin: "80%",
        threshold: 0.01,
      },
    );
    observer.observe(el);
  });

  return el;
}
