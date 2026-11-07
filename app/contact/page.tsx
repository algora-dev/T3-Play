import type { Metadata } from "next";
import SectionHead from "@/components/site/SectionHead";
import ContactForm from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with T3 Play. Fill out the form and we'll respond as soon as possible.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <SectionHead
          eyebrow="Contact"
          title="Get in touch"
          lede="Fill out the form and we'll respond as soon as possible."
        />
        <div className="grid gap-12 md:grid-cols-[1fr_240px]">
          <ContactForm />
          <aside className="space-y-6">
            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-muted">Email</h2>
              <a href={`mailto:${SITE.email}`} className="mt-2 block text-sm text-ink/80 hover:text-accent">{SITE.email}</a>
            </div>
            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-muted">Community</h2>
              <ul className="mt-2 space-y-2">
                {SITE.socials.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-ink/80 hover:text-accent">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
