"use client";

import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

const ServicesSection = () => {
  const s = site.services;
  const ref = useReveal();

  return (
    <section ref={ref} id="whatido" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <h2 className="reveal mb-20 text-3xl font-bold md:text-4xl">{s.title}</h2>
        <div className="reveal-stagger grid md:grid-cols-2">
          {s.items.map((item) => (
            <div key={item.title} className="reveal group border-b border-border [&:nth-child(n+3)]:border-b-0 p-8 md:odd:border-r transition-colors duration-500 hover:bg-foreground hover:text-background md:p-10">
              <h3 className="mb-4 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="break-keep text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-background/70">{item.desc}</p>
              {item.detail && <p className="mt-2 text-xs text-muted-foreground/60 transition-colors duration-500 group-hover:text-background/50">{item.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
