export default function SectionHead({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} mb-12`}>
      {eyebrow && (
        <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-[0.08em] md:text-4xl">{title}</h2>
      {lede && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{lede}</p>}
    </div>
  );
}
