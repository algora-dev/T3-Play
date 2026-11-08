"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "STAKING", href: "/visionaries" },
  { label: "POLY GUNNERZ", href: "/polygunnerz" },
  { label: "TBAG", href: "/tbag" },
  { label: "ABOUT", href: "/about" },
  { label: "DOCUMENTS", href: "/documents" },
  { label: "CONTACT", href: "/contact" },
];

const NAV_MOBILE = [...NAV.slice(0, 4), { label: "T-BAGGIEZ MINT", href: "/tbaggiezmint" }, ...NAV.slice(4)];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/images/6b79c486d46fe59f.png" alt="T3 Play logo" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold uppercase tracking-[0.25em]">T3 Play</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {SITE.socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt={`${s.name} icon`} className="h-4 w-4 object-contain" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-black/95 px-6 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4">
            {NAV_MOBILE.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-2">
              {SITE.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="opacity-70"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt={`${s.name} icon`} className="h-4 w-4 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
