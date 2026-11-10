"use client";

import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

const PhilosophySection = () => {
  const p = site.philosophy;
  const ref = useReveal();
  const lines = p.quote;

  return (
    <section
      id="philosophy"
      ref={ref}
      className="philosophy-background relative isolate bg-foreground px-6 py-32 text-background md:py-40"
      style={{ backgroundImage: `url('${p.background}')`, backgroundPosition: `${p.focusX}% center` }}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      <div className="mx-auto max-w-3xl text-center">
        <div className="reveal">
          <p className="mb-6 text-xs tracking-[0.3em] uppercase text-background">{p.eyebrow}</p>
          <blockquote className="font-display break-keep text-2xl font-semibold leading-relaxed md:text-3xl lg:text-4xl">
            {lines.map((line, i) => (
              i === lines.length - 1
                ? <span key={i} className="inline-block">{line}</span>
                : <span key={i}>{line}<br /></span>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
