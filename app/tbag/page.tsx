import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/site/VideoHero";
import SectionHead from "@/components/site/SectionHead";
import LinkButton from "@/components/site/LinkButton";
import ContractStrip from "@/components/site/ContractStrip";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "TBAG",
  description: "$TBAG is the T3 Play culture coin. Driven by game culture, destined to become the most iconic token in gaming history.",
};

export default function TbagPage() {
  return (
    <>
      <VideoHero src={VIDEOS.tbag} className="md:min-h-[60vh]">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">Culture Coin</p>
        <h1 className="font-display text-4xl font-bold uppercase tracking-[0.1em] md:text-6xl">$TBAG</h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href={SITE.buy} external variant="solid">Buy $TBAG here</LinkButton>
          <LinkButton href={SITE.docs.tbagDeck} external>$TBAG deck</LinkButton>
        </div>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionHead eyebrow="$TBAG" title="The global gaming culture coin" />
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Our mission at T3 Play is to make <span className="text-accent">$TBAG</span> the global gaming
                  culture coin.
                </p>
                <p>
                  The universal ticker powered by billions of players, creators, and fans across the globe.
                  Driven by game culture. Destined to become the most iconic token in gaming history.
                </p>
              </div>
              <div className="mt-8">
                <ContractStrip />
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden border border-line">
              <Image src="/media/images/3ecd2cd93132dfd4.png" alt="$TBAG coin art" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
