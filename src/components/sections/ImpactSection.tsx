"use client";

import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { EditorialLink, editorialActionClassName } from "@/components/portfolio/EditorialLink";
import { CountUp } from "@/components/portfolio/CountUp";
import { ReviewArchive } from "@/components/portfolio/ReviewArchive";
import { site } from "@/content/site";

export default function ImpactSection() {
  const im = site.impact;
  const ref = useReveal();
  return (
    <section ref={ref} id="impact" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl break-keep">
        <p className="reveal mb-4 font-display text-sm tracking-widest text-muted-foreground">{im.eyebrow}</p>
        <h2 className="reveal mb-6 text-3xl font-bold md:text-4xl">{im.title}</h2>
        <p className="reveal mb-16 text-base leading-relaxed text-muted-foreground md:text-lg">{im.intro}</p>

        {im.stats.length > 0 && (
          <div className="reveal-stagger mb-24 grid md:grid-cols-3">
            {im.stats.map((s, i) => {
              const content = (
                <>
                  <p className="font-display whitespace-nowrap text-4xl font-bold md:text-3xl lg:text-5xl"><CountUp value={s.value} suffix={im.statSuffix} /></p>
                  <p className="mt-3 text-sm">{s.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
                  {s.link && <span className={`${editorialActionClassName} mt-4`}>바로가기 <ArrowUpRight aria-hidden="true" size={18} /></span>}
                </>
              );
              const cell = "reveal border-b border-border p-8 md:border-b-0 md:border-r md:last:border-r-0";
              return s.link
                ? <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className={`${cell} transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-foreground`}>{content}</a>
                : <div key={i} className={cell}>{content}</div>;
            })}
          </div>
        )}

        <div className="reveal mb-10 max-w-2xl">
          <p className="mb-4 text-sm text-muted-foreground">{im.story.kicker}</p>
          <h3 className="text-2xl font-semibold leading-snug md:text-3xl">
            {im.story.title.map((line, i) => <span key={i}>{line}{i < im.story.title.length - 1 && <br />}</span>)}
          </h3>
          {im.story.body.map((p, i) => <p key={i} className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{p}</p>)}
        </div>
        {im.story.video && (
          <figure className="reveal min-w-0">
            <video src={im.story.video.src} poster={im.story.video.poster} autoPlay muted loop playsInline width={1280} height={720} className="h-auto w-full" aria-label={im.story.video.caption} />
            <figcaption className="mt-3 break-keep text-sm leading-relaxed text-muted-foreground">{im.story.video.caption}</figcaption>
          </figure>
        )}
        {im.story.link && <EditorialLink href={im.story.link.href} target="_blank" rel="noopener noreferrer" className="reveal mt-12">{im.story.link.label}</EditorialLink>}
      </div>
      {im.reviews.enabled && im.reviews.items.length > 0 && <div className="-mx-6"><ReviewArchive /></div>}
    </section>
  );
}
