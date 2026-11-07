"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContractStrip({ label = "Contract address" }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 border border-line bg-black/40 px-4 py-2.5">
      <span className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">{label}</span>
      <code className="text-xs text-accent md:text-sm">{SITE.contract}</code>
      <button
        type="button"
        onClick={copy}
        className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}
