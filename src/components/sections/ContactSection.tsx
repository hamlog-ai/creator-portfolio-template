"use client";

import { useReveal } from "@/hooks/useReveal";
import { ChannelIcon } from "@/components/portfolio/ChannelIcon";
import { site } from "@/content/site";

const ContactSection = () => {
  const c = site.contact;
  const ref = useReveal();
  const cols = c.channels.length >= 6 ? "lg:grid-cols-6" : c.channels.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section ref={ref} id="contact" className="border-t border-border px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-20">
          <p className="mb-4 font-display text-xs tracking-widest uppercase text-muted-foreground">{c.eyebrow}</p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">{c.title}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">{c.intro}</p>
        </div>

        <div className={`reveal grid gap-3 sm:grid-cols-3 ${cols}`}>
          {c.channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              target={ch.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 border border-border bg-card p-3 transition-all duration-300 hover:border-foreground hover:bg-secondary"
            >
              <ChannelIcon name={ch.icon} className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              <p className="font-display text-xs font-semibold">{ch.label}</p>
              <p className="text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
                {ch.value}
                <span className="ml-1 inline-block translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
              </p>
            </a>
          ))}
        </div>
      </div>

      {c.video && (
        <div className="relative mx-auto mt-20 max-w-5xl">
          <video className="w-full" src={c.video.src} autoPlay loop muted playsInline preload="metadata" poster={c.video.poster} />
        </div>
      )}
    </section>
  );
};

export default ContactSection;
