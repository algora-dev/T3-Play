export default function VideoHero({
  src,
  children,
  className = "",
  contentClassName = "",
}: {
  src: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section className={`relative flex min-h-[560px] items-center justify-center overflow-hidden md:min-h-[85vh] ${className}`}>
      <video className="absolute inset-0 h-full w-full object-cover opacity-60" src={src} autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/30 to-bg" />
      <div className={`relative z-10 mx-auto w-full max-w-4xl px-6 py-24 text-center ${contentClassName}`}>{children}</div>
    </section>
  );
}
