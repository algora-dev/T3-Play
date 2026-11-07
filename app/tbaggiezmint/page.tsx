import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/site/VideoHero";
import SectionHead from "@/components/site/SectionHead";
import { VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exponent Apps",
  description: "T3 Play Exponent apps: mint your T-Baggiez ticket and use the swap hub.",
};

const APPS = [
  {
    title: "Mint T-Baggiez Ticket",
    blurb: "The mint app is being upgraded and will plug straight in here.",
  },
  {
    title: "Swap Hub",
    blurb: "The swap hub is being upgraded and will plug straight in here.",
  },
];

const TUTORIALS = [
  {
    title: "Mint Tutorial",
    image: "/media/images/552a073a67daedf4.jpg",
  },
  {
    title: "Swap Tutorial",
    image: "/media/images/2752cd2b38344ed3.jpg",
  },
];

export default function TbaggiezMintPage() {
  return (
    <>
      <VideoHero src={VIDEOS.tbaggiezmint} className="md:min-h-[55vh]">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">T3 Play</p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-[0.1em] md:text-5xl">Exponent Apps</h1>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="Apps"
            title="Mint and swap"
            lede="The Exponent apps are being upgraded. The new versions will plug in here when they ship."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {APPS.map((app) => (
              <div
                key={app.title}
                className="flex min-h-[220px] flex-col items-center justify-center border border-dashed border-line bg-panel p-10 text-center"
              >
                <p className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Coming soon</p>
                <h2 className="font-display text-xl font-bold uppercase tracking-[0.15em]">{app.title}</h2>
                <p className="mt-2 max-w-xs text-sm text-muted">{app.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Learn" title="Tutorials" center />
          <div className="grid gap-6 md:grid-cols-2">
            {TUTORIALS.map((t) => (
              <figure key={t.title} className="border border-line bg-panel">
                <div className="relative aspect-video">
                  <Image src={t.image} alt={t.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <figcaption className="px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.2em]">{t.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
