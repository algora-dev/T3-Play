import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/site/VideoHero";
import SectionHead from "@/components/site/SectionHead";
import LinkButton from "@/components/site/LinkButton";
import { SITE, VIDEOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Poly Gunnerz",
  description:
    "Poly Gunnerz is a free to play community centered party first person shooter with ownable assets, high stakes modes and weekly events. Coming to Steam, Epic, Google Play and the App Store.",
};

const SPECS = [
  { label: "Game Title", value: "Poly Gunnerz" },
  { label: "Genre", value: "First Person Party Shooter, Action" },
  { label: "Game Modes", value: "Deathmatch, Team deathmatch" },
  { label: "Platforms", value: "PC, Mobile, browser" },
];

export default function PolyGunnerzPage() {
  return (
    <>
      <VideoHero src={VIDEOS.polygunnerz} className="md:min-h-[60vh]">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-accent">Feature Game</p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-[0.1em] md:text-5xl">Poly Gunnerz</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          The fun game web3 has been waiting for!
        </p>
      </VideoHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <SectionHead eyebrow="The Game" title="What is Poly Gunnerz?" />
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Poly Gunnerz is a fun and addictive community centered party first person shooter game.
                </p>
                <p>
                  The game opens the door not only to web3 communities, but web2 users too. Soon to be available
                  on Steam, Epic Games, Google Play, and the Apple App Store!
                </p>
                <p>
                  There is something for everyone in Poly Gunnerz: the players, the speculators, and the
                  hundreds of integrated communities.
                </p>
                <p>
                  Poly Gunnerz is a free to play party shooter, with ownable assets, high stakes modes, and
                  weekly events where players can even play for crypto. With all our partners there will be no
                  shortage of community vs community battles. Get ready for trouble!
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton href={SITE.docs.pgLitePaper} external variant="solid">Lite paper</LinkButton>
                <LinkButton href={SITE.ambassador} external>Ambassador program</LinkButton>
              </div>
            </div>
            <div>
              <div className="relative aspect-[3/4] overflow-hidden border border-line">
                <Image src="/media/images/88119f5ba6889ca6.png" alt="Poly Gunnerz game cover" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
              <dl className="mt-6 divide-y divide-line border border-line bg-panel">
                {SPECS.map((s) => (
                  <div key={s.label} className="grid grid-cols-[130px_1fr] gap-4 px-5 py-3.5">
                    <dt className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">{s.label}</dt>
                    <dd className="text-sm">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
