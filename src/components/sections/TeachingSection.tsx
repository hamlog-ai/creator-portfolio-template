"use client";

import { EditorialLink } from "@/components/portfolio/EditorialLink";
import { Photo } from "@/components/portfolio/Photo";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

export default function TeachingSection() {
  const t = site.teaching;
  const ref = useReveal();

  return (
    <section ref={ref} id="teaching" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl space-y-16 break-keep">
        <div className="reveal space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{t.eyebrow}</p>
          <h2 className="text-3xl font-bold md:text-4xl">{t.title}</h2>
        </div>
        <article className="space-y-8">
          <Photo src={t.featured.photo.src} alt={t.featured.photo.alt} caption={t.featured.photo.caption} className="reveal" width={1440} height={810} />
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <div className="reveal space-y-6">
              <h3 className="text-2xl font-bold">{t.featured.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t.featured.body}</p>
              {t.featured.links.length > 0 && (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {t.featured.links.map((l, i) => <EditorialLink key={i} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</EditorialLink>)}
                </div>
              )}
            </div>
            {t.featured.secondPhoto && <Photo src={t.featured.secondPhoto.src} alt={t.featured.secondPhoto.alt} className="reveal" width={1440} height={810} />}
          </div>
        </article>
        {t.upcoming.length > 0 && (
          <div className="reveal border-t border-border pt-8">
            <p className="mb-8 text-sm uppercase tracking-widest text-muted-foreground">{t.upcomingLabel}</p>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {t.upcoming.map((u, i) => (
                <article key={i} className="space-y-4">
                  <p className="text-sm text-muted-foreground">{u.date}</p>
                  <h3 className="text-xl font-bold">{u.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{u.body}</p>
                  {u.link && <EditorialLink href={u.link.href} target="_blank" rel="noopener noreferrer">{u.link.label}</EditorialLink>}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
