"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { company, type Locale } from "@/lib/content";

const contactFormCopy = {
  fr: {
    fields: {
      name: "Nom",
      phone: "Telephone",
      email: "Courriel",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
    },
    placeholders: {
      subject: "Cuisine, salle de bain, sous-sol...",
      message: "Decrivez rapidement votre projet, votre secteur et le meilleur moment pour vous joindre.",
    },
    emailIntro: "Bonjour RenoPrime,",
    emailMessage: "J'aimerais vous contacter au sujet d'un projet de renovation.",
    emailSubject: "Demande de contact RenoPrime",
  },
  en: {
    fields: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
    placeholders: {
      subject: "Kitchen, bathroom, basement...",
      message: "Briefly describe your project, your area, and the best time to reach you.",
    },
    emailIntro: "Hello RenoPrime,",
    emailMessage: "I would like to contact you about a renovation project.",
    emailSubject: "RenoPrime contact request",
  },
};

export function ContactForm({ locale = "fr" }: { locale?: Locale }) {
  const copy = contactFormCopy[locale];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      copy.emailIntro,
      "",
      copy.emailMessage,
      "",
      `${copy.fields.name}: ${form.name}`,
      `${copy.fields.phone}: ${form.phone}`,
      `${copy.fields.email}: ${form.email}`,
      `${copy.fields.subject}: ${form.subject}`,
      "",
      `${copy.fields.message}:`,
      form.message,
    ].join("\n");

    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(copy.emailSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={submitContact} className="grid gap-5 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:p-7">
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
          {copy.fields.subject}
          <input
            required
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="h-13 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            placeholder={copy.placeholders.subject}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
        {copy.fields.message}
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-40 resize-y border border-black/12 bg-[#fbfaf7] px-4 py-3 text-base font-semibold normal-case leading-7 tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
          placeholder={copy.placeholders.message}
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
