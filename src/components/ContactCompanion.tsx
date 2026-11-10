"use client";

import { useRef } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Mail, MessageCircle, X } from "lucide-react";
import { site } from "@/content/site";

/** 우측 하단에 떠 있는 "문의하기" 캐릭터. site.contact.companion 에서 켜고 끕니다. */
export default function ContactCompanion() {
  const c = site.contact.companion;
  const character = useRef<HTMLSpanElement>(null);
  const bounce = () => {
    if (!character.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    character.current.getAnimations().forEach((animation) => animation.cancel());
    character.current.animate([
      { transform: "translateY(0) scale(1)" },
      { transform: "translateY(3px) scale(1.06, .92)", offset: .18 },
      { transform: "translateY(-18px) scale(.96, 1.04) rotate(-5deg)", offset: .4 },
      { transform: "translateY(0) scale(1.04, .96)", offset: .62 },
      { transform: "translateY(-8px) rotate(3deg)", offset: .78 },
      { transform: "translateY(0) scale(1)" },
    ], { duration: 650, easing: "ease-out" });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" aria-label={c.title} onMouseEnter={bounce} onClick={bounce} className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:right-6">
          <span className="relative mb-2 block rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">{c.title}<span aria-hidden="true" className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-white" /></span>
          <span ref={character} className="block h-20 w-20 drop-shadow-lg md:h-24 md:w-24">
            <Image src={c.image} alt="" width={320} height={320} sizes="96px" className="h-full w-full object-contain" />
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/10" />
        <Dialog.Content className="fixed bottom-[calc(max(1rem,env(safe-area-inset-bottom))+8rem)] right-4 z-50 w-[calc(100%-2rem)] max-w-sm overflow-y-auto rounded-2xl border border-border bg-white text-black shadow-2xl max-h-[calc(100dvh-11rem)] md:right-6">
          <div className="flex items-center gap-3 bg-[#111] px-5 py-4 text-white">
            <Image src={c.image} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <div>
              <Dialog.Title className="font-semibold">{c.title}</Dialog.Title>
              <p className="mt-1 text-xs text-white/70">{c.subtitle}</p>
            </div>
            <Dialog.Close aria-label="문의창 닫기" className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"><X size={20} /></Dialog.Close>
          </div>
          <div className="space-y-5 p-5">
            <Dialog.Description className="text-sm leading-relaxed text-neutral-600">
              {c.greeting.map((line, i) => <span key={i}>{line}{i < c.greeting.length - 1 && <br />}</span>)}
            </Dialog.Description>
            <div className="grid gap-3">
              <a href={c.kakaoHref} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-3 rounded-xl bg-[#FEE500] px-4 py-3 font-semibold text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><MessageCircle size={20} />카카오톡 1:1 문의<ArrowUpRight size={18} className="ml-auto" /></a>
              <a href={`mailto:${site.contact.email}`} className="flex min-h-14 items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 text-sm hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Mail size={20} className="shrink-0" /><span><strong className="block font-semibold">이메일로 협업 문의</strong><span className="mt-1 block text-xs text-neutral-500">{site.contact.email}</span></span><ArrowUpRight size={18} className="ml-auto shrink-0" /></a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
