"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled
    ? "text-foreground/70 hover:text-foreground hover:bg-accent"
    : "text-white/70 hover:text-white hover:bg-white/10";
  const logoColor = scrolled ? "text-foreground" : "text-white";
  const navItemClass = `inline-flex items-center rounded-md px-3 py-2 text-base font-medium tracking-wide transition-colors ${textColor}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className={`font-display text-2xl font-bold tracking-tight transition-colors ${logoColor}`}>
          {site.brand.wordmark}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            {site.nav.map((item, i) => (
              <li key={i}>
                <a href={item.href} onClick={() => setOpen(false)} className={navItemClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          className={`lg:hidden transition-colors ${logoColor}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background/95 backdrop-blur-md px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {site.nav.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-md px-3 py-3 text-left text-base font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
