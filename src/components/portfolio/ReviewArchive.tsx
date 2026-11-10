"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Download, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { editorialActionClassName } from "@/components/portfolio/EditorialLink";
import { site } from "@/content/site";

type Review = (typeof site.impact.reviews.items)[number];

/** 후기 캡처가 두 줄로 반대 방향으로 흐르는 마퀴. 클릭하면 크게 봅니다. */
export function ReviewArchive() {
  const r = site.impact.reviews;
  const reviewImages = r.items;
  const viewports = useRef<(HTMLDivElement | null)[]>([]);
  const [paused, setPaused] = useState(false);
  const rows = [0, 1].map((row) => reviewImages.map((review, index) => ({ review, index })).filter(({ index }) => index % 2 === row));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : reviewImages[selectedIndex];

  const moveRow = (rowIndex: number, direction: number) => {
    const viewport = viewports.current[rowIndex];
    const track = viewport?.querySelector<HTMLElement>(".review-marquee-track");
    if (!viewport || !track) return;
    const animation = track.getAnimations()[0];
    if (animation && typeof animation.currentTime === "number") {
      const duration = Number(animation.effect?.getComputedTiming().duration);
      const step = direction * (rowIndex === 0 ? 1 : -1) * 28000;
      animation.currentTime = ((animation.currentTime + step) % duration + duration) % duration;
    } else {
      const card = track.querySelector<HTMLElement>(".review-marquee-card");
      viewport.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 20) * 2, behavior: "instant" });
    }
  };

  const thumbnail = (review: Review, index: number, duplicate = false) => (
    <button key={review.id} tabIndex={duplicate ? -1 : 0} type="button" onClick={() => setSelectedIndex(index)} aria-label={`후기 ${review.id} 크게 보기`} className="review-marquee-card group shrink-0 min-w-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
      <div className="relative aspect-[3/4] overflow-hidden border border-border bg-muted">
        <Image src={review.src} alt={`후기 캡처 ${review.id}`} width={review.width} height={review.height} sizes="(min-width: 768px) 320px, 50vw" className="h-full w-full object-cover object-top transition-opacity group-hover:opacity-80" />
        <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full bg-black/70 p-2 text-white"><Expand size={16} /></span>
      </div>
      <span className="mt-3 block text-sm text-muted-foreground">{review.title}</span>
    </button>
  );

  return (
    <div id="reviews" className="mt-24 border-t border-border pt-16">
      <div className="mx-auto mb-10 max-w-[1072px] px-6">
        <h3 className="text-2xl font-semibold leading-snug md:text-3xl">{r.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{r.intro}</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.note}</p>
        {r.pdf && (
          <a href={r.pdf.href} download={r.pdf.filename} className={`${editorialActionClassName} mt-6`}>전체 후기 PDF 다운로드 · {reviewImages.length}장<Download aria-hidden="true" size={18} className="shrink-0" /></a>
        )}
      </div>
      <div className="mx-auto mb-6 max-w-[1072px] px-6">
        <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="text-sm text-muted-foreground underline underline-offset-4 motion-reduce:hidden">{paused ? "후기 흐름 재생" : "후기 흐름 일시정지"}</button>
      </div>
      <div className="review-marquee space-y-10 md:space-y-12" data-paused={paused || selected !== null}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <div ref={(element) => { viewports.current[rowIndex] = element; }} className="review-marquee-viewport" onBlur={(event) => {
              if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !event.currentTarget.contains(event.relatedTarget)) event.currentTarget.scrollLeft = 0;
            }}>
              <div className="review-marquee-track" style={{ animationDuration: `${Math.max(row.length, 3) * 14}s`, animationDirection: rowIndex === 0 ? "normal" : "reverse" }}>
                {[false, true].map((duplicate) => (
                  <div key={String(duplicate)} className="review-marquee-group" aria-hidden={duplicate || undefined}>
                    {row.map(({ review, index }) => thumbnail(review, index, duplicate))}
                  </div>
                ))}
              </div>
            </div>
            <button type="button" onClick={() => moveRow(rowIndex, -1)} aria-label={`${rowIndex + 1}번째 후기 줄 이전으로`} className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-black shadow-lg hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:left-4"><ArrowLeft size={22} /></button>
            <button type="button" onClick={() => moveRow(rowIndex, 1)} aria-label={`${rowIndex + 1}번째 후기 줄 다음으로`} className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-black shadow-lg hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:right-4"><ArrowRight size={22} /></button>
          </div>
        ))}
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
        <DialogContent
          className="max-h-[82dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto p-4 sm:p-6"
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            const direction = event.key === "ArrowLeft" ? -1 : 1;
            setSelectedIndex((index) => index === null ? null : Math.max(0, Math.min(reviewImages.length - 1, index + direction)));
          }}
        >
          <DialogTitle className="pr-8 text-base">{selected?.title} · {selectedIndex === null ? 0 : selectedIndex + 1} / {reviewImages.length}</DialogTitle>
          <DialogDescription>{r.note}</DialogDescription>
          <div className="flex items-center justify-between gap-3">
            <button type="button" disabled={selectedIndex === null || selectedIndex === 0} onClick={() => setSelectedIndex((index) => index === null ? null : Math.max(0, index - 1))} className="inline-flex min-h-11 items-center gap-2 text-sm disabled:opacity-30"><ArrowLeft size={16} />이전 후기</button>
            <button type="button" disabled={selectedIndex === null || selectedIndex === reviewImages.length - 1} onClick={() => setSelectedIndex((index) => index === null ? null : Math.min(reviewImages.length - 1, index + 1))} className="inline-flex min-h-11 items-center gap-2 text-sm disabled:opacity-30">다음 후기<ArrowRight size={16} /></button>
          </div>
          {selected && <Image key={selected.id} src={selected.src} alt={`후기 원본 ${selected.id}`} width={selected.width} height={selected.height} sizes="100vw" className="h-auto w-full" />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
