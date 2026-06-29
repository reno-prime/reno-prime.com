import { NextResponse } from "next/server";
import { company } from "@/lib/content";

export const runtime = "nodejs";

type QuoteRequest = {
  locale?: "fr" | "en";
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  projectType?: string;
  timeline?: string;
  message?: string;
};

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 3000) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e8e1d2;color:#6b6255;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e8e1d2;color:#111111;font-size:15px;font-weight:600;">${escapeHtml(value || "-")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f8f5ef;padding:28px;color:#111111;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #eadfca;">
        <div style="padding:24px 28px;background:#111111;color:#ffffff;">
          <p style="margin:0 0 8px;color:#f4c430;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;">RenoPrime</p>
          <h1 style="margin:0;font-size:26px;line-height:1.2;">New quote request</h1>
        </div>
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          ${rows}
        </table>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message: "Email delivery is not configured yet. Please call or email RenoPrime directly for now.",
      },
      { status: 503 },
    );
  }

  const payload = (await request.json()) as QuoteRequest;
  const locale = payload.locale === "en" ? "en" : "fr";
  const labels =
    locale === "fr"
      ? {
          name: "Nom",
          phone: "Téléphone",
          email: "Courriel",
          location: "Ville / secteur",
          projectType: "Type de projet",
          timeline: "Échéancier",
          message: "Détails du projet",
        }
      : {
          name: "Name",
          phone: "Phone",
          email: "Email",
          location: "Location",
          projectType: "Project type",
          timeline: "Timeline",
          message: "Project details",
        };

  const fields = {
    [labels.name]: cleanText(payload.name),
    [labels.phone]: cleanText(payload.phone),
    [labels.email]: cleanText(payload.email),
    [labels.location]: cleanText(payload.location),
    [labels.projectType]: cleanText(payload.projectType),
    [labels.timeline]: cleanText(payload.timeline),
    [labels.message]: cleanText(payload.message),
  };

  if (!fields[labels.name] || !fields[labels.phone] || !fields[labels.email] || !fields[labels.location] || !fields[labels.message]) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  const subject = locale === "fr" ? "Nouvelle demande de soumission RenoPrime" : "New RenoPrime quote request";
  const from = process.env.QUOTE_EMAIL_FROM || "RenoPrime <onboarding@resend.dev>";
  const to = process.env.QUOTE_EMAIL_TO || company.email;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      reply_to: fields[labels.email],
      html: buildEmailHtml(fields),
      text: Object.entries(fields)
        .map(([label, value]) => `${label}: ${value || "-"}`)
        .join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message: "The request could not be sent right now. Please try again or contact RenoPrime directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "quote" });
}
