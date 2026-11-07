import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/site/VideoHero";
import SectionHead from "@/components/site/SectionHead";
import LinkButton from "@/components/site/LinkButton";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "T3 Play is a web3 media studio growing an ecosystem of games, creators, communities and web3 IP.",
};

export default function AboutPage() {
  return (
    <>
      <VideoHero src={VIDEOS.home} className="md:min-h-[60vh]">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">The Vision</p>
        <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-[0.08em] md:text-5xl">
          The alpha is in the <span className="text-accent">vision!</span>
        </h1>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="About T3 Play"
            title="A web3 media studio"
            lede="T3 Play is a web3 media studio rapidly growing an ecosystem of games, creators, communities, and web3 IP."
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our mission at T3 Play is to make <span className="text-accent">$TBAG</span> the global gaming
                culture coin: the universal ticker powered by billions of players, creators, and fans across
                the globe.
              </p>
              <p>
                From our party shooter Poly Gunnerz to the Visionaries NFT collection, everything we build is
                driven by game culture and designed to become the most iconic experiences in gaming history.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <LinkButton href={SITE.docs.vision} external variant="solid">Our vision</LinkButton>
                <LinkButton href={SITE.docs.t3playDeck} external>T3 Play deck</LinkButton>
                <LinkButton href={SITE.docs.tokenExplainer} external>Token explainer</LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-line">
              <Image src="/media/images/ba7e114762b839e0.png" alt="Poly Gunnerz character art" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Roadmap" title="Where we're headed" center />
          <div className="relative mx-auto max-w-4xl overflow-hidden border border-line">
            <Image src="/media/images/f70c6399ddb83508.png" alt="T3 Play roadmap" width={1400} height={900} className="h-auto w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
