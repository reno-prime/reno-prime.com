import Image from "next/image";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, type Locale } from "@/lib/content";

const quoteCopy = {
  fr: {
    eyebrow: "Demande de soumission gratuite",
    title: "Parlez-nous de votre renovation.",
    text: "Partagez quelques details et RenoPrime fera un suivi pour discuter de la portee, de l'echeancier et des prochaines etapes.",
    details: [
      "Piece ou secteur a renover",
      "Condition actuelle et objectifs de finition",
      "Echeancier souhaite",
      "Photos ou notes peuvent etre envoyees par courriel apres la demande",
    ],
    asideEyebrow: "Details de la demande",
    asideTitle: "Une premiere etape simple vers une estimation claire.",
    asideText:
      "Pour les demandes urgentes, appelez directement. Pour les photos du projet, envoyez-les par courriel apres la demande.",
  },
  en: {
    eyebrow: "Free Quote Request",
    title: "Tell us about your renovation.",
    text: "Share a few details and RenoPrime will follow up to discuss your scope, timing, and next steps.",
    details: [
      "Room or area being renovated",
      "Current condition and finish goals",
      "Preferred timeline",
      "Photos or notes can be sent by email after the request",
    ],
    asideEyebrow: "Request Details",
    asideTitle: "A simple first step toward a clear estimate.",
    asideText:
      "For urgent requests, call directly. For project photos, send them by email after submitting the request.",
  },
};

type PageProps = {
  locale?: Locale;
};

export function QuotePage({ locale = "fr" }: PageProps) {
  const copy = quoteCopy[locale];

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <SiteHeader locale={locale} />
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/hero-renoprime-kitchen.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.38)),linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.18)_55%)]" />

        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-10">
          <div className="pb-2">
            <div className="reveal mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#f4c430]" />
              <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#f4c430]">
                {copy.eyebrow}
              </span>
            </div>
            <h1 className="reveal-delay font-display max-w-3xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-[5.1rem]">
              {copy.title}
            </h1>
            <p className="reveal-delay-long mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              {copy.text}
            </p>
          </div>

          <div className="reveal-delay-long grid gap-3 border border-white/12 bg-white/[0.07] p-5 backdrop-blur sm:grid-cols-2">
            {copy.details.map((detail) => (
              <div key={detail} className="flex gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-[#f4c430]" size={18} aria-hidden="true" />
                <span className="text-sm font-semibold leading-6 text-white/82">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a12]">
              {copy.asideEyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
              {copy.asideTitle}
            </h2>
            <p className="mt-5 leading-8 text-[#5f5a52]">
              {copy.asideText}
            </p>

            <div className="mt-8 grid gap-3">
              <a href={company.phoneHref} className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4 text-black transition hover:border-[#f4c430]">
                <Phone size={20} className="text-[#b98a12]" aria-hidden="true" />
                <span className="font-black">{company.phone}</span>
              </a>
              <a href={company.emailHref} className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4 text-black transition hover:border-[#f4c430]">
                <Mail size={20} className="text-[#b98a12]" aria-hidden="true" />
                <span className="font-black">{company.email}</span>
              </a>
              <div className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4 text-black">
                <MapPin size={20} className="text-[#b98a12]" aria-hidden="true" />
                <span className="font-black">{company.serviceArea}</span>
              </div>
            </div>
          </aside>

          <QuoteRequestForm locale={locale} />
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
