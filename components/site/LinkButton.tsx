import Link from "next/link";

export function linkButtonClass(variant: "solid" | "outline" = "outline", extra = "") {
  const base =
    "inline-flex items-center justify-center gap-2 border px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.25em] transition-colors";
  if (variant === "solid") {
    return `${base} border-accent bg-accent text-black hover:bg-transparent hover:text-accent ${extra}`;
  }
  return `${base} border-line text-ink hover:border-accent hover:text-accent ${extra}`;
}

export default function LinkButton({
  href,
  children,
  variant = "outline",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkButtonClass(variant, className)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkButtonClass(variant, className)}>
      {children}
    </Link>
  );
}
