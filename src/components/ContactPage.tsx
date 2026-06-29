import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, localizePath, type Locale } from "@/lib/content";

const contactCopy = {
  fr: {
    heroEyebrow: "Contact RenoPrime",
    heroTitle: "Parlons de votre projet de rénovation.",
    heroText:
      "Appelez, envoyez un courriel ou utilisez le formulaire pour partager les grandes lignes de votre projet. RenoPrime vous répondra avec les prochaines étapes.",
    formEyebrow: "Nous joindre",
    formTitle: "Une conversation claire avant de commencer.",
    formText:
      "Indiquez la pièce, le secteur, l'échéancier souhaité et les détails importants. Pour une estimation plus complète, vous pouvez aussi utiliser la page de soumission.",
    cards: [
      ["Téléphone", company.phone],
      ["Courriel", company.email],
      ["Territoire", company.serviceArea],
      ["Licence RBQ", company.rbq],
    ],
    availability: "Réponse rapide pour les projets résidentiels à Montréal et au Québec.",
    quote: "Obtenir une soumission",
  },
  en: {
    heroEyebrow: "Contact RenoPrime",
    heroTitle: "Let’s talk about your renovation project.",
    heroText:
      "Call, email, or use the form to share the broad details of your project. RenoPrime will follow up with the next steps.",
    formEyebrow: "Get In Touch",
    formTitle: "A clear conversation before the work begins.",
    formText:
      "Share the room, area, preferred timeline, and important details. For a fuller estimate request, you can also use the quote page.",
    cards: [
      ["Phone", company.phone],
      ["Email", company.email],
      ["Service Area", company.serviceArea],
      ["RBQ License", company.rbq],
    ],
    availability: "Responsive follow-up for residential projects in Montreal and Quebec.",
    quote: "Get a Free Quote",
  },
};

type PageProps = {
  locale?: Locale;
};

export function ContactPage({ locale = "fr" }: PageProps) {
  const copy = contactCopy[locale];

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <SiteHeader locale={locale} />
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white">
        <Image
          src="/images/project-interior-living-2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.38)),linear-gradient(0deg,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_55%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="reveal mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#f4c430]" />
              <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#f4c430]">
                {copy.heroEyebrow}
              </span>
            </div>
            <h1 className="reveal-delay font-display max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-[5.2rem]">
              {copy.heroTitle}
            </h1>
            <p className="reveal-delay-long mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              {copy.heroText}
            </p>
            <div className="reveal-delay-long mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-3 bg-[#f4c430] px-7 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone size={18} aria-hidden="true" />
                {company.phone}
              </a>
              <Link
                href={localizePath("/quote", locale)}
                className="inline-flex h-14 items-center justify-center gap-3 border border-white/25 bg-white/10 px-7 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
              >
                {copy.quote}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a12]">
              {copy.formEyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
              {copy.formTitle}
            </h2>
            <p className="mt-5 leading-8 text-[#5f5a52]">{copy.formText}</p>

            <div className="mt-8 grid gap-3">
              {copy.cards.map(([label, value], index) => {
                const Icon = index === 0 ? Phone : index === 1 ? Mail : index === 2 ? MapPin : ShieldCheck;
                const href = index === 0 ? company.phoneHref : index === 1 ? company.emailHref : undefined;
                const content = (
                  <>
                    <Icon size={20} className="text-[#b98a12]" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-black uppercase tracking-[0.16em] text-black/52">
                        {label}
                      </span>
                      <span className="text-base font-black text-black">{value}</span>
                    </span>
                  </>
                );

                return href ? (
                  <a key={label} href={href} className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4 transition hover:border-[#f4c430]">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 border border-black/10 bg-white px-5 py-4">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 border border-black/10 bg-white p-5 text-sm font-semibold leading-6 text-[#5f5a52]">
              <Clock className="mt-1 shrink-0 text-[#b98a12]" size={18} aria-hidden="true" />
              {copy.availability}
            </div>
          </aside>

          <ContactForm locale={locale} />
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
