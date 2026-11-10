"use client";

import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

export default function ResourcesSection() {
  const r = site.resources;
  const ref = useReveal();

  return (
    <section ref={ref} id="resources" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto grid max-w-5xl gap-12 break-keep md:grid-cols-2 md:gap-16">
        <div className="reveal space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{r.eyebrow}</p>
          <h2 className="text-3xl font-bold md:text-4xl">{r.title}</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{r.intro}</p>
        </div>
        <ul className="reveal divide-y divide-border border-y border-border">
          {r.items.map((item) => (
            <li key={item.href + item.title}>
              <div className="py-6">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block text-xl font-bold transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:text-2xl">{item.title}</a>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
