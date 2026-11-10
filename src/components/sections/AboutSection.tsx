"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Photo } from "@/components/portfolio/Photo";
import { site } from "@/content/site";

export default function AboutSection() {
  const a = site.about;
  const ref = useReveal();
  return (
    <section ref={ref} id="about" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <p className="reveal mb-8 font-display text-sm tracking-widest text-muted-foreground">{a.eyebrow}</p>
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="space-y-8">
            <Photo src={a.photo.src} alt={a.photo.alt} caption={a.photo.caption} className="reveal" width={720} height={960} />
          </div>
          <div className="reveal break-keep">
            <h2 className="text-3xl font-bold leading-snug md:text-4xl">
              {a.headline.map((line, i) => <span key={i}>{line}{i < a.headline.length - 1 && <br />}</span>)}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {a.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <ol className="mt-10 space-y-4 border-t border-border pt-6">
              {a.timeline.map((item) => (
                <li key={item.date} className="flex flex-col gap-1 text-sm sm:flex-row sm:gap-6">
                  <span className="w-28 shrink-0 font-display font-semibold">{item.date}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ol>
            {a.badge && (
              <Dialog>
                <figure className="mt-8 max-w-40">
                  <DialogTrigger asChild>
                    <button type="button" aria-label={`${a.badge.alt} 크게 보기`} className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
                      <Image src={a.badge.src} alt={a.badge.alt} width={a.badge.width} height={a.badge.height} sizes="160px" className="h-auto w-full" />
                    </button>
                  </DialogTrigger>
                  <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.badge.caption}</figcaption>
                </figure>
                <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto p-4 sm:p-6">
                  <DialogTitle className="pr-8 text-base">{a.badge.caption}</DialogTitle>
                  <DialogDescription className="sr-only">확대한 이미지입니다.</DialogDescription>
                  <Image src={a.badge.src} alt={`${a.badge.alt} 확대`} width={a.badge.width} height={a.badge.height} sizes="(min-width: 672px) 624px, 90vw" className="max-h-[72dvh] w-full object-contain" />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
