"use client";

import { Photo } from "@/components/portfolio/Photo";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

export default function ClientsSection() {
  const c = site.clients;
  const ref = useReveal();

  return (
    <section ref={ref} id="clients" className="border-t border-border px-6 py-32 md:py-40">
      <div className="reveal mx-auto mb-16 max-w-5xl break-keep">
        <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">{c.eyebrow}</p>
        <h2 className="text-3xl font-bold md:text-4xl">{c.title}</h2>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-12 break-keep md:grid-cols-2 md:gap-16">
        <div className="reveal space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{c.featured.eyebrow}</p>
            <h3 className="text-2xl font-bold leading-tight md:text-3xl">
              {c.featured.title.map((line, i) => <span key={i}>{line}{i < c.featured.title.length - 1 && <br />}</span>)}
            </h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{c.featured.body}</p>
        </div>
        <Photo src={c.featured.photo.src} alt={c.featured.photo.alt} caption={c.featured.photo.caption} className="reveal" width={768} height={1024} />
      </div>
      {c.list.length > 0 && (
        <div className="mx-auto mt-16 max-w-5xl border-t border-border pt-10 break-keep">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            {c.list.map((item) => (
              <article key={item.title} className="reveal space-y-4">
                <p className="text-sm text-muted-foreground">{item.kicker}</p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
