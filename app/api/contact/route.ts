import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  const firstName = String(data?.firstName ?? "").trim();
  const lastName = String(data?.lastName ?? "").trim();
  const email = String(data?.email ?? "").trim();
  const phone = String(data?.phone ?? "").trim();
  const message = String(data?.message ?? "").trim();

  if (!firstName || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set; would have emailed:", { firstName, lastName, email, phone, message: message.slice(0, 100) });
    return NextResponse.json({ ok: true, demo: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "T3 Play Website <onboarding@resend.dev>",
      to: [SITE.email],
      reply_to: email,
      subject: `t3play.com contact: ${firstName}${lastName ? ` ${lastName}` : ""}`.trim(),
      text: [
        `Name: ${firstName} ${lastName}`.trim(),
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[contact] resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
