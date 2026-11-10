"use client";

import { EditorialLink } from "@/components/portfolio/EditorialLink";
import { Photo } from "@/components/portfolio/Photo";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

export default function MediaSection() {
  const m = site.media;
  const ref = useReveal();

  return (
    <section ref={ref} id="media" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl space-y-16 break-keep">
        <div className="reveal space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{m.eyebrow}</p>
          <h2 className="text-3xl font-bold md:text-4xl">{m.title}</h2>
        </div>
        <article className="space-y-8">
          <Photo src={m.featured.photo.src} alt={m.featured.photo.alt} caption={m.featured.photo.caption} className="reveal" imageClassName="aspect-video object-cover object-top" width={1440} height={943} />
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <div className="reveal space-y-6">
              <h3 className="text-2xl font-bold">{m.featured.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{m.featured.body}</p>
              {m.featured.links.length > 0 && (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {m.featured.links.map((l, i) => <EditorialLink key={i} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</EditorialLink>)}
                </div>
              )}
            </div>
            {m.featured.secondPhoto && <Photo src={m.featured.secondPhoto.src} alt={m.featured.secondPhoto.alt} className="reveal" width={1440} height={811} />}
          </div>
        </article>
        {m.events.length > 0 && (
          <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-2">
            {m.events.map((ev, i) => (
              <article key={i} className="reveal space-y-6">
                <Photo src={ev.photo.src} alt={ev.photo.alt} imageClassName="aspect-[4/3] object-cover" width={1440} height={1080} />
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{ev.date}</p>
                  <h3 className="text-xl font-bold">{ev.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{ev.body}</p>
                  {ev.link && <EditorialLink href={ev.link.href} target="_blank" rel="noopener noreferrer">{ev.link.label}</EditorialLink>}
                </div>
              </article>
            ))}
          </div>
        )}
        {m.highlight && (
          <div className="reveal border-l border-foreground pl-5">
            <p className="text-sm text-muted-foreground">{m.highlight.kicker}</p>
            <h3 className="mt-2 text-xl font-semibold">{m.highlight.title}</h3>
            {m.highlight.link && <EditorialLink href={m.highlight.link.href} target="_blank" rel="noopener noreferrer" className="mt-2">{m.highlight.link.label}</EditorialLink>}
          </div>
        )}
      </div>
    </section>
  );
}
