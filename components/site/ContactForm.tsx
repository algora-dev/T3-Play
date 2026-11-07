"use client";

import { useState } from "react";
import { linkButtonClass } from "@/components/site/LinkButton";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border border-line bg-black/40 px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-accent";
const labelClass = "mb-1.5 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-line bg-panel p-8 text-center">
        <p className="font-display text-lg font-bold uppercase tracking-[0.15em] text-accent">Message sent ✓</p>
        <p className="mt-2 text-sm text-muted">We&apos;ll respond as soon as possible.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-accent">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>First name *</label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last name *</label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea id="message" name="message" required rows={6} placeholder="Write your message here" className={inputClass} />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong sending your message. Please try again.</p>
      )}
      <button type="submit" disabled={status === "sending"} className={linkButtonClass("solid", "w-full disabled:opacity-60 sm:w-auto")}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
