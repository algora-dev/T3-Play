import type { Metadata } from "next";
import VideoHero from "@/components/site/VideoHero";
import SectionHead from "@/components/site/SectionHead";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documents",
  description: "T3 Play decks, lite papers and documents: our vision, T3 Play deck, active to own, token explainer, Poly Gunnerz lite paper and $TBAG deck.",
};

type DocLink = { label: string; href: string };

const GROUPS: { name: string; docs: DocLink[] }[] = [
  {
    name: "T3 Play",
    docs: [
      { label: "Our Vision", href: SITE.docs.vision },
      { label: "T3 Play Deck", href: SITE.docs.t3playDeck },
      { label: "Active to Own", href: SITE.docs.activeToOwn },
      { label: "Token Explainer", href: SITE.docs.tokenExplainer },
    ],
  },
  {
    name: "Poly Gunnerz",
    docs: [
      { label: "Lite Paper", href: SITE.docs.pgLitePaper },
      { label: "Characters", href: SITE.store.polygunnerz },
    ],
  },
  {
    name: "Flight Force 4",
    docs: [
      { label: "Lite Paper", href: SITE.docs.ff4LitePaper },
      { label: "Characters", href: SITE.store.flightforce4 },
    ],
  },
  {
    name: "$TBAG",
    docs: [
      { label: "$TBAG Deck", href: SITE.docs.tbagDeck },
      { label: "Buy $TBAG Here", href: SITE.buy },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <>
      <VideoHero src={VIDEOS.documents} className="md:min-h-[55vh]">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">Read Up</p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-[0.1em] md:text-5xl">Our Documents</h1>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-24">
          {GROUPS.map((group) => (
            <div key={group.name} className="mb-10 last:mb-0">
              <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.3em] text-accent">{group.name}</h2>
              <ul className="divide-y divide-line border border-line bg-panel">
                {group.docs.map((doc) => (
                  <li key={doc.label}>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-white/5"
                    >
                      <span className="font-display text-base font-semibold uppercase tracking-[0.15em]">{doc.label}</span>
                      <span className="text-muted transition-colors group-hover:text-accent" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHead eyebrow="Legal" title="T3 Play Privacy Policy" />
          <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-ink">Last updated: 5 November 2025</p>
            <p>Welcome to T3 Play.</p>
            <p>Your privacy matters to us. We only collect what&apos;s needed to make your gaming experience smooth, secure, and rewarding.</p>
            <div>
              <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink">What we collect</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Basic account info (like username, email, or wallet address if connected or provided)</li>
                <li>Gameplay and performance data</li>
                <li>Device and analytics data to improve game performance</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink">How we use it</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>To run and improve our games and services</li>
                <li>To keep accounts secure and prevent fraud</li>
                <li>To communicate updates, in-game events, or rewards</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink">On-chain data</h3>
              <p>T3 Play integrates blockchain technology. Any data or transactions recorded on-chain (such as wallet addresses, in-game items, NFT assets, or rewards) are public and permanently accessible on the blockchain.</p>
              <p>We may also use publicly available on-chain data connected to our own contracts or other relevant smart contracts to verify ownership, enable rewards, or enhance gameplay experiences. Once on-chain, this data cannot be modified or deleted.</p>
            </div>
            <p>We do not sell or share your personal data with third parties for marketing. We may use trusted service providers (like analytics, hosting, or authentication tools) that follow strict privacy and security standards.</p>
            <div>
              <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink">Your rights</h3>
              <p>You can request to access, update, or delete your off-chain data anytime by contacting us at <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>.</p>
            </div>
            <p>By using T3 Play, you agree to this Privacy Policy and our Terms of Service.</p>
          </div>
        </div>
      </section>
    </>
  );
}
