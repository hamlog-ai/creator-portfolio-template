"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/content/site";

const WorksSection = () => {
  const w = site.works;
  const ref = useReveal();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const gallery = w.gallery;
  const featured = gallery[featuredIndex];

  return (
    <section ref={ref} id="works" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1600px] lg:px-10">
        <h2 className="reveal mb-20 text-3xl font-bold md:text-4xl">{w.title}</h2>
        <p className="reveal mb-10 -mt-12 text-muted-foreground">{w.intro}</p>
        <div className="reveal-stagger grid gap-x-6 gap-y-12 lg:grid-cols-2">
          {w.videos.map((p, i) => (
            <article key={i} className="reveal">
              <div className="group relative aspect-video overflow-hidden bg-black">
                {playingId === p.title ? (
                  <video key={p.src} className="absolute inset-0 h-full w-full object-contain" src={p.src} poster={p.poster} controls playsInline autoPlay preload="none" aria-label={`${p.title} ${p.episode}`} />
                ) : (
                  <button type="button" className="absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white" onClick={() => setPlayingId(p.title)} aria-label={`${p.title} ${p.episode} 재생`}>
                    <img src={p.poster} alt={`${p.title} ${p.episode} 영상 장면`} loading="lazy" className="absolute inset-0 h-full w-full object-contain" />
                    <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-foreground">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7"><path d="M8 5v14l11-7z" /></svg>
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <h3 className="mt-4 break-keep text-xl font-semibold md:text-2xl">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.episode}</p>
            </article>
          ))}
        </div>
      </div>

      {gallery.length > 0 && (
        <div className="mx-auto max-w-6xl">
          <h3 id="imageworks" className="reveal mt-32 mb-12 text-2xl font-bold md:text-3xl scroll-mt-20">{w.galleryTitle}</h3>
          <div className="reveal">
            <div className="group relative overflow-hidden aspect-video" style={{ background: "hsl(var(--foreground) / 0.05)" }}>
              <img key={featured.src} src={featured.src} alt={featured.alt} className="absolute inset-0 h-full w-full object-contain animate-in fade-in-0 duration-500" />
              <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/10" />
              <button type="button" onClick={(e) => { e.stopPropagation(); setFeaturedIndex((featuredIndex - 1 + gallery.length) % gallery.length); }} aria-label="이전 이미지" className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-xs opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-background/90 md:left-5 md:h-12 md:w-12"><ChevronLeft className="h-5 w-5" /></button>
              <button type="button" onClick={(e) => { e.stopPropagation(); setFeaturedIndex((featuredIndex + 1) % gallery.length); }} aria-label="다음 이미지" className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-xs opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-background/90 md:right-5 md:h-12 md:w-12"><ChevronRight className="h-5 w-5" /></button>
              <p className="absolute bottom-4 left-4 z-20 text-sm text-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:bottom-6 md:left-6 md:text-base">{featured.alt}</p>
              <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {gallery.map((img, i) => (
                  <button type="button" key={i} onClick={(e) => { e.stopPropagation(); setFeaturedIndex(i); }} aria-label={`이미지 ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === featuredIndex ? "w-6 bg-background" : "w-1.5 bg-background/50"}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="reveal mt-4 grid grid-cols-5 gap-2 md:gap-3">
            {gallery.map((img, i) => (
              <button type="button" key={i} className={`group cursor-pointer overflow-hidden aspect-square transition-opacity duration-300 ${i === featuredIndex ? "ring-2 ring-foreground opacity-100" : "opacity-60 hover:opacity-100"}`} onClick={() => setFeaturedIndex(i)} aria-label={`${img.alt} 선택`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default WorksSection;
