"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { type Locale } from "@/lib/content";

const quoteFormCopy = {
  fr: {
    projectTypes: [
      "Rénovation intérieure",
      "Rénovation de cuisine",
      "Rénovation de salle de bain",
      "Finition de sous-sol",
      "Gypse / Joints",
      "Peinture",
      "Plancher / Céramique",
      "Autre",
    ],
    fields: {
      name: "Nom",
      phone: "Téléphone",
      email: "Courriel",
      location: "Ville / secteur",
      projectType: "Type de projet",
      timeline: "Échéancier",
      details: "Détails du projet",
      send: "Envoyer la demande",
      sending: "Envoi en cours...",
    },
    placeholders: {
      location: "Montréal, Laval, etc.",
      timeline: "Dès que possible, ce printemps...",
      details: "Dites-nous quelle pièce vous voulez rénover, ce que vous voulez changer et les détails importants.",
    },
    success: "Merci. Votre demande a été envoyée directement à RenoPrime. Nous vous répondrons bientôt.",
    error: "La demande n'a pas pu être envoyée pour le moment. Vous pouvez aussi appeler ou écrire à RenoPrime directement.",
  },
  en: {
    projectTypes: [
      "Interior Renovation",
      "Kitchen Renovation",
      "Bathroom Renovation",
      "Basement Finishing",
      "Drywall / Taping",
      "Painting",
      "Flooring / Tile",
      "Other",
    ],
    fields: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      location: "Location",
      projectType: "Project Type",
      timeline: "Timeline",
      details: "Project Details",
      send: "Send Quote Request",
      sending: "Sending...",
    },
    placeholders: {
      location: "Montreal, Laval, etc.",
      timeline: "As soon as possible, this spring...",
      details: "Tell us what room you want renovated, what you want changed, and any important details.",
    },
    success: "Thank you. Your request was sent directly to RenoPrime. We will follow up soon.",
    error: "The request could not be sent right now. You can also call or email RenoPrime directly.",
  },
};

export function QuoteRequestForm({ locale = "fr" }: { locale?: Locale }) {
  const copy = quoteFormCopy[locale];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: copy.projectTypes[0],
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(data?.message || copy.error);
      }

      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
        projectType: copy.projectTypes[0],
        timeline: "",
        message: "",
      });
      setStatus("success");
      setStatusMessage(copy.success);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : copy.error);
    }
  }

  return (
    <form onSubmit={submitRequest} className="grid gap-5 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.fields.name}
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.fields.phone}
          <input
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            autoComplete="tel"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.fields.email}
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.fields.location}
          <input
            required
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            autoComplete="address-level2"
            placeholder={copy.placeholders.location}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.fields.projectType}
          <select
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
          >
            {copy.projectTypes.map((projectType) => (
              <option key={projectType}>{projectType}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.fields.timeline}
          <input
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            placeholder={copy.placeholders.timeline}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
        {copy.fields.details}
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 resize-y border border-black/12 bg-[#fbfaf7] px-4 py-3 text-base font-semibold normal-case leading-7 tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
          placeholder={copy.placeholders.details}
        />
      </label>

      {statusMessage ? (
        <p
          className={`border px-4 py-3 text-sm font-bold leading-6 ${
            status === "success" ? "border-[#f4c430]/50 bg-[#fff8df] text-black" : "border-red-200 bg-red-50 text-red-900"
          }`}
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-14 items-center justify-center gap-3 bg-black px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#f4c430] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430] disabled:cursor-wait disabled:bg-black/70 disabled:text-white"
      >
        {status === "sending" ? copy.fields.sending : copy.fields.send}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
