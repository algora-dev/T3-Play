import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/site/VideoHero";
import SectionHead from "@/components/site/SectionHead";
import LinkButton from "@/components/site/LinkButton";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visionaries",
  description:
    "Visionaries are an elite collection of NFTs covering the entire T3 ecosystem including Poly Gunnerz. Stake to earn continual rewards and airdrops.",
};

const BENEFITS = [
  "Continual $T3P success based rewards",
  "Partner Vault Staking",
  "Token Airdrops",
];

export default function VisionariesPage() {
  return (
    <>
      <VideoHero src={VIDEOS.visionaries} className="md:min-h-[60vh]">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">NFT Collection</p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-[0.1em] md:text-5xl">Visionaries</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          The Alpha is in the Vision. Stake your Visionaries to be eligible for rewards!
        </p>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="relative mb-12 aspect-[21/9] overflow-hidden border border-line">
            <Image src="/media/images/b8f0b2fd4d556bca.png" alt="Visionaries banner" fill className="object-cover" sizes="100vw" priority />
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHead eyebrow="The Collection" title="What are Visionaries NFTs?" />
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Visionaries are not a &ldquo;PFP&rdquo; collection. This is an elite collection of NFTs covering
                  the entire T3 ecosystem including Poly Gunnerz.
                </p>
                <p>
                  The name Visionaries comes from the T3 Play slogan &ldquo;The Alpha is in the Vision&rdquo;. It
                  represents the name of the collection, but it also describes the holders, our community, the
                  Visionaries! These Visionaries are truly on this journey with us, helping spread our vision
                  across web3!
                </p>
                <p>
                  Visionaries will be rewarded continually based on the success of our T3 Play token $T3P. The
                  more success $T3P has, the more our rewards treasury grows, the more rewards these Visionaries
                  can claim.
                </p>
                <LinkButton href={SITE.visionariesArticle} external>
                  Read more here
                </LinkButton>
              </div>
            </div>
            <div>
              <SectionHead eyebrow="Holder Benefits" title="Rewards for the faithful" />
              <ul className="space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-3 border border-line bg-panel px-5 py-4">
                    <span className="font-display font-bold text-accent">✦</span>
                    <span className="text-sm md:text-base">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                There&apos;s no limit to how many Visionaries you can hold. The more you stake, the more rewards
                and airdrops you will be eligible for.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <LinkButton href={SITE.visionariesMarket} external variant="solid">Element marketplace</LinkButton>
                <LinkButton href={SITE.visionariesMarket} external>Stake here</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="New to Linea?"
            title="Getting started"
            lede="A few links to help you get set up before you stake."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="border border-line bg-panel p-6 transition-colors hover:border-accent">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">1. Get a wallet</h3>
              <p className="mt-2 text-sm text-muted">Set up MetaMask to hold your assets on Linea.</p>
            </a>
            <a href={SITE.metamaskBuy} target="_blank" rel="noopener noreferrer" className="border border-line bg-panel p-6 transition-colors hover:border-accent">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">2. Fund it</h3>
              <p className="mt-2 text-sm text-muted">Buy ETH directly from MetaMask.</p>
            </a>
            <a href={SITE.lineaTutorial} target="_blank" rel="noopener noreferrer" className="border border-line bg-panel p-6 transition-colors hover:border-accent">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">3. Bridge to Linea</h3>
              <p className="mt-2 text-sm text-muted">Watch the video tutorial from Linea here.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
