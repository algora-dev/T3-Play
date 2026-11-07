import Link from "next/link";
import { SITE } from "@/lib/site";
import Ticker from "@/components/site/Ticker";

export default function Footer() {
  return (
    <>
      <Ticker />
      <footer className="border-t border-line bg-black">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted">Site</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-ink/80 transition-colors hover:text-accent">Home</Link></li>
              <li><Link href="/polygunnerz" className="text-sm text-ink/80 transition-colors hover:text-accent">Poly Gunnerz</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted">Links</h3>
            <ul className="mt-4 space-y-2">
              {SITE.socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-ink/80 transition-colors hover:text-accent">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li><a href={`mailto:${SITE.email}`} className="text-sm text-ink/80 transition-colors hover:text-accent">{SITE.email}</a></li>
              <li><Link href="/contact" className="text-sm text-ink/80 transition-colors hover:text-accent">Get in touch</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <p className="text-xs text-muted">© 2024 by T3Play.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
