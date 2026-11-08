import Image from "next/image";
import VideoHero from "@/components/site/VideoHero";
import LinkButton from "@/components/site/LinkButton";
import SectionHead from "@/components/site/SectionHead";
import ContractStrip from "@/components/site/ContractStrip";
import { SITE, VIDEOS } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <VideoHero src={VIDEOS.home}>
        <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">The Mission</p>
        <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-[0.06em] md:text-5xl">
          Our mission at T3 Play is to make{" "}
          <span className="text-accent">$TBAG</span> the global gaming culture coin!
        </h1>
        <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.35em] text-muted">You in?</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href={SITE.buy} external variant="solid">Yes</LinkButton>
          <LinkButton href={SITE.socials[1].href} external>No</LinkButton>
        </div>
        <div className="mt-10">
          <ContractStrip />
        </div>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            eyebrow="What's T3 Play?"
            title={
              <>
                We&apos;re going to disrupt <span className="text-accent">web3 gaming</span>
              </>
            }
            lede="T3 Play is a web3 media studio rapidly growing an ecosystem of games, creators, communities, and web3 IP."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden border border-line bg-panel">
              <div className="relative aspect-[16/10]">
                <Image src="/media/images/2820d9b2d074a66e.png" alt="Poly Gunnerz key art" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.15em]">Poly Gunnerz</h3>
                  <p className="mt-1 text-sm text-muted">Check out our party shooter Poly Gunnerz.</p>
                </div>
                <LinkButton href="/polygunnerz">Learn more</LinkButton>
              </div>
            </article>
            <article className="group relative overflow-hidden border border-line bg-panel">
              <div className="relative aspect-[16/10]">
                <Image src="/media/images/80a443a7f03a9c36.png" alt="$TBAG culture coin art" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.15em]">$TBAG</h3>
                  <p className="mt-1 text-sm text-muted">Our culture coin.</p>
                </div>
                <LinkButton href="/tbag">Learn more</LinkButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line">
        <video className="absolute inset-0 h-full w-full object-cover opacity-30" src={VIDEOS.tbag} autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/60 to-bg/80" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">The Mission</p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-[0.08em] md:text-4xl">
            The universal ticker powered by billions of players, creators, and fans across the globe.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Driven by game culture. Destined to become the most iconic token in gaming history.
          </p>
          <div className="mt-8">
            <LinkButton href="/tbag" variant="solid">Learn more</LinkButton>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Feature Game"
              title="Poly Gunnerz"
              lede="A community centered first person shooter integrating IP from all corners of web3, ready to cause trouble."
            />
            <div className="flex flex-wrap items-center gap-4">
              <LinkButton href="/polygunnerz" variant="solid">Learn more</LinkButton>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden border border-line">
            <Image src="/media/images/8c8057846e9c418f.png" alt="Poly Gunnerz logo art" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="font-display text-2xl font-bold uppercase tracking-[0.2em] md:text-4xl">
            The alpha is in the <span className="text-accent">vision!</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href={SITE.buy} external variant="solid">Buy $TBAG here</LinkButton>
            <LinkButton href="/visionaries">Visionaries</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
