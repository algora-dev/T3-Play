import { SITE } from "@/lib/site";

export default function Ticker({ label = "BUY $TBAG HERE" }: { label?: string }) {
  const items = Array.from({ length: 10 }, () => label);
  return (
    <div className="overflow-hidden border-y border-line bg-black/60 py-3" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex">
            {items.map((text, i) => (
              <a
                key={`${half}-${i}`}
                href={SITE.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-sm font-semibold uppercase tracking-[0.3em] text-muted transition-colors hover:text-accent"
                tabIndex={-1}
              >
                {text}
                <span className="text-accent">✦</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
