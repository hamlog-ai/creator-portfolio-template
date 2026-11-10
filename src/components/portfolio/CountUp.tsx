"use client";

import { useEffect, useRef, useState } from "react";

const duration = 1200;

export function CountUp({ value, suffix = "" }: { readonly value: number; readonly suffix?: string }) {
  const format = (n: number) => `${n.toLocaleString("ko-KR")}${suffix}`;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      if (reducedMotion.matches) return;
      const start = performance.now();
      setDisplay(0);
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    const finish = () => {
      if (!reducedMotion.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      setDisplay(value);
    };
    observer.observe(element);
    reducedMotion.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", finish);
    };
  }, [value]);

  return (
    <span ref={ref} className="relative inline-grid tabular-nums">
      <span className="invisible" aria-hidden="true">{format(value)}</span>
      <span className="absolute inset-0" aria-hidden="true">{format(display)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}
