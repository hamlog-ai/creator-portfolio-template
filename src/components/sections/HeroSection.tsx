"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";
import { site } from "@/content/site";

const HeroSection = () => {
  const h = site.hero;
  const [videoSrc, setVideoSrc] = useState<string>(h.video);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 모바일(768px 이하)에서는 세로형 영상을 씁니다. 없으면 같은 파일을 적어 두세요.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const pick = (matches: boolean) => setVideoSrc(matches ? h.videoMobile || h.video : h.video);
    pick(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => pick(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [h.video, h.videoMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = () => {
      video.muted = true;
      const p = video.play();
      if (p !== undefined) p.catch(() => undefined);
    };
    if (video.readyState >= 3) tryPlay();
    else {
      video.addEventListener("canplay", tryPlay, { once: true });
      return () => video.removeEventListener("canplay", tryPlay);
    }
  }, [videoSrc]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      const p = video.play();
      if (p !== undefined) p.then(() => { video.muted = false; setIsMuted(false); }).catch(() => undefined);
      return;
    }
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 bg-black">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          src={videoSrc}
          preload="auto"
          poster={h.poster}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl py-32 text-center text-white break-keep">
        <p className="mb-8 font-display text-sm font-medium tracking-[0.3em]">{h.eyebrow}</p>
        <h1 className="text-4xl font-bold leading-[1.4] tracking-tight sm:text-5xl md:text-6xl md:leading-[85px]">
          {h.headline.map((line, i) => <span key={i}>{line}{i < h.headline.length - 1 && <br />}</span>)}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-[2] text-white/90 md:text-lg">
          {h.sub.map((line, i) => <span key={i}>{line}{i < h.sub.length - 1 && <br />}</span>)}
        </p>
        <a href={h.cta.href} className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          {h.cta.label} <ArrowDown aria-hidden="true" size={18} />
        </a>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "소리 켜기" : "소리 끄기"}
        className="absolute bottom-10 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xs text-white/70 transition-all duration-300 hover:bg-black/50 hover:text-white hover:border-white/40 opacity-0 animate-fade-up"
        style={{ animationDelay: "1.2s" }}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
        <div className="mx-auto h-10 w-px bg-white/20" />
        <p className="mt-2 text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
