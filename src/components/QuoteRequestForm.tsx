"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { company, type Locale } from "@/lib/content";

const quoteFormCopy = {
  fr: {
    projectTypes: [
      "Renovation interieure",
      "Renovation de cuisine",
      "Renovation de salle de bain",
      "Finition de sous-sol",
      "Gypse / Joints",
      "Peinture",
      "Plancher / Ceramique",
      "Autre",
    ],
    intro: "Bonjour RenoPrime,",
    request: "J'aimerais demander une soumission gratuite pour une renovation.",
    subject: "Demande de soumission renovation",
    fields: {
      name: "Nom",
      phone: "Telephone",
      email: "Courriel",
      location: "Ville / secteur",
      projectType: "Type de projet",
      timeline: "Echeancier",
      details: "Details du projet",
      send: "Envoyer la demande",
    },
    placeholders: {
      location: "Montreal, Laval, etc.",
      timeline: "Des que possible, ce printemps...",
      details: "Dites-nous quelle piece vous voulez renover, ce que vous voulez changer et les details importants.",
    },
    emailLabels: {
      name: "Nom",
      phone: "Telephone",
      email: "Courriel",
      location: "Ville / secteur",
      projectType: "Type de projet",
      timeline: "Echeancier",
      details: "Details du projet:",
    },
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
    intro: "Hello RenoPrime,",
    request: "I would like to request a free renovation quote.",
    subject: "Free renovation quote request",
    fields: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      location: "Location",
      projectType: "Project Type",
      timeline: "Timeline",
      details: "Project Details",
      send: "Send Quote Request",
    },
    placeholders: {
      location: "Montreal, Laval, etc.",
      timeline: "As soon as possible, this spring...",
      details: "Tell us what room you want renovated, what you want changed, and any important details.",
    },
    emailLabels: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      location: "Location",
      projectType: "Project type",
      timeline: "Timeline",
      details: "Project details:",
    },
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

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      copy.intro,
      "",
      copy.request,
      "",
      `${copy.emailLabels.name}: ${form.name}`,
      `${copy.emailLabels.phone}: ${form.phone}`,
      `${copy.emailLabels.email}: ${form.email}`,
      `${copy.emailLabels.location}: ${form.location}`,
      `${copy.emailLabels.projectType}: ${form.projectType}`,
      `${copy.emailLabels.timeline}: ${form.timeline}`,
      "",
      copy.emailLabels.details,
      form.message,
    ].join("\n");

    const subject = encodeURIComponent(copy.subject);
    window.location.href = `${company.emailHref}?subject=${subject}&body=${encodeURIComponent(body)}`;
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

      <button
        type="submit"
        className="inline-flex h-14 items-center justify-center gap-3 bg-black px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#f4c430] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
      >
        {copy.fields.send}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
