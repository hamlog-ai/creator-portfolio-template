import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observeRevealTargets = (root: Element) => {
      if (root.classList.contains("reveal")) {
        observer.observe(root);
      }

      root.querySelectorAll(".reveal").forEach((target) => {
        observer.observe(target);
      });
    };

    const el = ref.current;
    if (el) {
      observeRevealTargets(el);

      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              observeRevealTargets(node as Element);
            }
          });
        });
      });

      mutationObserver.observe(el, { childList: true, subtree: true });

      return () => {
        mutationObserver.disconnect();
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
