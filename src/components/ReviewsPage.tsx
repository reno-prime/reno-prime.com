import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, Star } from "lucide-react";
import { ReviewForm } from "@/components/ReviewForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, localizePath, type Locale } from "@/lib/content";

const reviewsCopy = {
  fr: {
    eyebrow: "Avis clients",
    title: "Partagez votre experience avec RenoPrime.",
    text:
      "Votre avis aide les futurs proprietaires a comprendre la qualite, la communication et le soin derriere les travaux de RenoPrime.",
    principles: [
      "Avis de vrais clients seulement",
      "Permission confirmee avant publication",
      "Affichage avec prenom ou anonyme",
      "Details utiles pour les futurs proprietaires",
    ],
    asideEyebrow: "Laisser un avis",
    asideTitle: "Une facon simple pour les premiers clients de partager leur experience.",
    asideText:
      "Comme RenoPrime developpe sa presence en ligne, cette page collecte d'abord les avis clients directement. Les avis publics pourront etre ajoutes plus tard apres confirmation de la permission.",
    verified: "Avis client verifie",
    ctaEyebrow: "Vous planifiez une renovation?",
    ctaTitle: "Pret a commencer votre propre projet?",
    ctaButton: "Obtenir une soumission",
  },
  en: {
    eyebrow: "Client Reviews",
    title: "Share your RenoPrime experience.",
    text:
      "Your feedback helps future homeowners understand the quality, communication, and care behind RenoPrime renovation work.",
    principles: [
      "Real client feedback only",
      "Permission confirmed before publishing",
      "First name or anonymous display options",
      "Helpful details for future homeowners",
    ],
    asideEyebrow: "Leave a Review",
    asideTitle: "A simple way for early clients to share feedback.",
    asideText:
      "Since RenoPrime is building its online review presence, this page collects client feedback directly first. Public reviews can be added later once permission is confirmed.",
    verified: "Verified client feedback",
    ctaEyebrow: "Planning Renovation Work?",
    ctaTitle: "Ready to start your own project?",
    ctaButton: "Get a Free Quote",
  },
};

type PageProps = {
  locale?: Locale;
};

export function ReviewsPage({ locale = "fr" }: PageProps) {
  const copy = reviewsCopy[locale];

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <SiteHeader locale={locale} />
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/project-interior-living-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.38)),linear-gradient(0deg,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_55%)]" />

        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-10">
          <div>
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
            {copy.principles.map((detail) => (
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
          <aside className="min-w-0 lg:sticky lg:top-8 lg:self-start">
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
              <div className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4 text-black">
                <Star size={20} className="text-[#b98a12]" aria-hidden="true" />
                <span className="font-black">{copy.verified}</span>
              </div>
              <a href={company.emailHref} className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4 text-black transition hover:border-[#f4c430]">
                <Mail size={20} className="text-[#b98a12]" aria-hidden="true" />
                <span className="font-black">{company.email}</span>
              </a>
            </div>
          </aside>

          <ReviewForm locale={locale} />
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4c430]">
              {copy.ctaEyebrow}
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              {copy.ctaTitle}
            </h2>
          </div>
          <Link
            href={localizePath("/quote", locale)}
            className="inline-flex h-14 items-center justify-center gap-3 bg-[#f4c430] px-7 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {copy.ctaButton}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
