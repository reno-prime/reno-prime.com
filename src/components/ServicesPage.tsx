import Image from "next/image";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Hammer,
  Mail,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { company, localizePath, type Locale } from "@/lib/content";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const servicesCopy = {
  fr: {
    heroEyebrow: "Services RenoPrime",
    heroTitle: "Services de renovation interieure adaptes a votre maison.",
    heroText:
      "De la demolition et la preparation jusqu'au gypse, a la ceramique, au plancher, a la peinture et aux moulures, RenoPrime garde le travail clair, propre et bien coordonne.",
    estimate: "Obtenir une soumission",
    call: "Appeler",
    gridEyebrow: "Ce que nous faisons",
    gridTitle: "Des travaux detailles, organises du debut a la fin.",
    gridText:
      "RenoPrime se concentre sur les interieurs residentiels ou la planification, la preparation des surfaces et la qualite de finition font toute la difference.",
    tradeEyebrow: "Coordination des metiers",
    tradeTitle: "Partenaires de confiance lorsque requis",
    tradeText:
      "Les travaux electriques et de plomberie sont geres par des entrepreneurs partenaires de confiance lorsque requis, afin que la renovation reste bien coordonnee pendant que RenoPrime garde le projet en mouvement.",
    processEyebrow: "Processus",
    processTitle: "Un processus de renovation calme, avec moins de surprises.",
    processText:
      "RenoPrime garde la portee, les etapes et les attentes de finition claires, de la premiere visite jusqu'a la visite finale.",
    steps: [
      "Visite sur place et definition de la portee",
      "Soumission claire et plan de renovation",
      "Preparation, protection et demolition",
      "Travaux avec coordination propre",
      "Details de finition et visite finale",
    ],
    ctaEyebrow: "Soumission gratuite",
    ctaTitle: "Pret a discuter de votre projet de renovation?",
    ctaText:
      "Partagez ce que vous voulez changer, la piece a renover et l'echeancier que vous avez en tete.",
    start: "Demarrer",
    getQuote: "Obtenir une soumission",
    email: "Courriel",
    groups: [
      ["Renovations interieures", "Ameliorations interieures completes planifiees selon la disposition de votre maison, son utilisation quotidienne et vos objectifs de finition."],
      ["Renovations de cuisine", "Ameliorations fonctionnelles de cuisine, armoires, surfaces, planchers, moulures et details de finition."],
      ["Renovations de salle de bain", "Mises a jour propres et pratiques avec preparation soignee et coordination de partenaires lorsque requis."],
      ["Finition de sous-sol", "Espaces confortables construits avec charpente, gypse, plancher, moulures et finition propre."],
      ["Installation de gypse", "Installation precise pour renovations, reparations, nouvelles divisions, plafonds et pieces finies."],
      ["Tirage de joints", "Preparation lisse des murs et plafonds avec joints, sablage et surfaces pretes a peindre."],
      ["Peinture", "Peinture interieure avec bonne preparation, lignes nettes et finis adaptes a l'utilisation de la piece."],
      ["Installation de plancher", "Installation durable et coordination de finition pour cuisines, sous-sols et espaces de vie."],
      ["Installation de ceramique", "Ceramique pour espaces pratiques avec attention a la disposition, aux coupes, a l'alignement et a la finition."],
      ["Moulures et finition", "Plinthes, cadrages, moulures et touches finales qui rendent une renovation complete."],
      ["Reparations de plafond", "Reparation de plafond, gypse, joints, tirage, sablage et preparation de finition."],
      ["Demolition et preparation", "Retrait et preparation soigneux pour creer une base propre avant la phase de renovation."],
      ["Gestion de projet", "Communication claire, sequence des travaux, coordination des materiaux et planification des partenaires au besoin."],
    ],
  },
  en: {
    heroEyebrow: "RenoPrime Services",
    heroTitle: "Interior renovation services built around your home.",
    heroText:
      "From demolition and preparation to drywall, tile, flooring, paint, and finish carpentry, RenoPrime keeps the work clear, clean, and carefully coordinated.",
    estimate: "Get a Free Estimate",
    call: "Call",
    gridEyebrow: "What We Do",
    gridTitle: "Detailed renovation work, organized from start to finish.",
    gridText:
      "RenoPrime focuses on residential interiors where planning, surface preparation, and finish quality make the difference between a simple update and a renovation that feels complete.",
    tradeEyebrow: "Trade Coordination",
    tradeTitle: "Trusted partners when required",
    tradeText:
      "Electrical and plumbing work are handled by trusted partner contractors when required, so the renovation stays properly coordinated while RenoPrime keeps the project moving cleanly.",
    processEyebrow: "Process",
    processTitle: "A calm renovation process with fewer surprises.",
    processText:
      "RenoPrime keeps the scope, sequence, and finish expectations visible from the first visit through the final walkthrough.",
    steps: [
      "On-site review and scope definition",
      "Clear estimate and renovation plan",
      "Preparation, protection, and demolition",
      "Build phase with clean coordination",
      "Finishing details and walkthrough",
    ],
    ctaEyebrow: "Get a Free Estimate",
    ctaTitle: "Ready to talk through your renovation scope?",
    ctaText:
      "Share what you want to change, what room you are renovating, and the timeline you have in mind.",
    start: "Start",
    getQuote: "Get a Free Quote",
    email: "Email",
    groups: [
      ["Interior Renovations", "Complete interior upgrades planned around your home's layout, daily use, and finish goals."],
      ["Kitchen Renovations", "Functional kitchen improvements, cabinetry updates, surfaces, flooring, trim, and finishing details."],
      ["Bathroom Renovations", "Clean, practical bathroom upgrades with careful preparation and trusted trade coordination when required."],
      ["Basement Finishing", "Comfortable lower-level spaces built with framing, drywall, flooring, trim, and clean finish work."],
      ["Drywall Installation", "Precise board installation for renovations, repairs, new partitions, ceilings, and finished rooms."],
      ["Taping & Mudding", "Smooth wall and ceiling preparation with careful seam work, sanding, and paint-ready surfaces."],
      ["Painting", "Interior painting with proper prep, clean lines, and finishes selected for the room's use."],
      ["Flooring Installation", "Durable flooring installation and finish coordination for kitchens, basements, and living spaces."],
      ["Tile Installation", "Tile work for practical, high-use spaces with attention to layout, cuts, alignment, and finish."],
      ["Trim & Finish Carpentry", "Baseboards, casing, trim details, and finishing touches that make a renovation feel complete."],
      ["Ceiling Repairs", "Ceiling patching, drywall repair, taping, mudding, sanding, and finish preparation."],
      ["Demolition and Preparation", "Careful removal and prep work to create a clean starting point for the renovation phase."],
      ["Project Management", "Clear communication, sequencing, material coordination, and trusted partner scheduling when needed."],
    ],
  },
};

const serviceIcons = [
  Sparkles,
  Ruler,
  Wrench,
  Hammer,
  ClipboardCheck,
  Check,
  Paintbrush,
  Ruler,
  Sparkles,
  Hammer,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
];

type PageProps = {
  locale?: Locale;
};

export function ServicesPage({ locale = "fr" }: PageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <SiteHeader locale={locale} />
      <ServicesHero locale={locale} />
      <ServicesGrid locale={locale} />
      <PartnerNote locale={locale} />
      <ProcessSection locale={locale} />
      <ServicesCta locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

function ServicesHero({ locale }: { locale: Locale }) {
  const copy = servicesCopy[locale];

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-black text-white">
      <Image
        src="/images/hero-renoprime-kitchen.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-72"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.66)_46%,rgba(0,0,0,0.35)),linear-gradient(0deg,rgba(0,0,0,0.76),rgba(0,0,0,0.08)_52%)]" />

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10">
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
              href={localizePath("/quote", locale)}
              className="inline-flex h-14 items-center justify-center gap-3 bg-[#f4c430] px-7 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {copy.estimate}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-3 border border-white/25 bg-white/10 px-7 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
            >
              {copy.call} {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ locale }: { locale: Locale }) {
  const copy = servicesCopy[locale];

  return (
    <section className="bg-[#fbfaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a12]">
              {copy.gridEyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
              {copy.gridTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5f5a52]">
            {copy.gridText}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.groups.map(([title, description], index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={title} className="border border-black/10 bg-white p-6 transition hover:border-[#f4c430]">
                <div className="flex h-11 w-11 items-center justify-center bg-black text-[#f4c430]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-black text-black">{title}</h3>
                <p className="mt-4 leading-7 text-[#676259]">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerNote({ locale }: { locale: Locale }) {
  const copy = servicesCopy[locale];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-y border-black/10 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-[#f4c430]">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98a12]">
                {copy.tradeEyebrow}
              </p>
              <h2 className="mt-1 text-xl font-black text-black">{copy.tradeTitle}</h2>
            </div>
          </div>
          <p className="text-lg leading-8 text-[#555149]">
            {copy.tradeText}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ locale }: { locale: Locale }) {
  const copy = servicesCopy[locale];

  return (
    <section className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4c430]">
            {copy.processEyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            {copy.processTitle}
          </h2>
          <p className="mt-6 leading-8 text-white/66">
            {copy.processText}
          </p>
        </div>

        <div className="grid gap-3">
          {copy.steps.map((step, index) => (
            <div key={step} className="grid grid-cols-[4rem_1fr] items-center border border-white/12 bg-white/[0.03]">
              <div className="flex h-full min-h-20 items-center justify-center border-r border-white/12 text-lg font-black text-[#f4c430]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="px-5 py-5 text-lg font-black text-white">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCta({ locale }: { locale: Locale }) {
  const copy = servicesCopy[locale];

  return (
    <section id="estimate" className="bg-[#f4c430] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-black/60">
            {copy.ctaEyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
            {copy.ctaTitle}
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-black/68">
            {copy.ctaText}
          </p>
        </div>

        <div className="grid gap-3">
          <a
            href={localizePath("/quote", locale)}
            className="flex items-center gap-4 bg-black px-6 py-5 text-white transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <ArrowRight size={22} aria-hidden="true" />
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-70">
                {copy.start}
              </span>
              <span className="text-lg font-black">{copy.getQuote}</span>
            </span>
          </a>
          <a
            href={company.phoneHref}
            className="flex items-center gap-4 bg-white px-6 py-5 text-black transition hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Phone size={22} aria-hidden="true" />
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-70">
                {copy.call}
              </span>
              <span className="text-lg font-black">{company.phone}</span>
            </span>
          </a>
          <a
            href={company.emailHref}
            className="flex items-center gap-4 bg-white px-6 py-5 text-black transition hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Mail size={22} aria-hidden="true" />
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-60">
                {copy.email}
              </span>
              <span className="text-lg font-black">{company.email}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
