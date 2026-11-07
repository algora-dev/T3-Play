import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/images/44104f27a5e4a947.png" alt="Skill issue" className="mb-8 h-40 object-contain md:h-56" />
      <h1 className="font-display text-3xl font-bold uppercase tracking-[0.15em] md:text-4xl">
        Skill <span className="text-accent">issue.</span>
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted md:text-base">
        The page you&apos;re after doesn&apos;t exist. It was probably never in the meta.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex border border-line px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.25em] transition-colors hover:border-accent hover:text-accent"
      >
        Back to home
      </Link>
    </section>
  );
}
