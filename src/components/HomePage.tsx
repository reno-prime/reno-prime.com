import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Hammer,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { company, localizePath, services, trustItems, type Locale } from "@/lib/content";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const homeCopy = {
  fr: {
    eyebrow: "Renovations a Montreal & Quebec",
    headline: "Renovations residentielles haut de gamme, realisees avec precision.",
    subheadline:
      "RenoPrime offre des renovations interieures propres et fiables pour les proprietaires qui veulent une planification claire, une finition soignee et un entrepreneur de confiance.",
    estimate: "Obtenir une soumission",
    projects: "Voir les projets",
    introEyebrow: "Partenaire renovation",
    introTitle: "Un processus plus clair pour transformer les pieces que vous utilisez chaque jour.",
    introText:
      `Dirigee par ${company.owner}, RenoPrime se concentre sur des renovations residentielles bien organisees, de la premiere conversation jusqu'a la visite finale. Les travaux electriques et de plomberie sont geres par des partenaires de confiance lorsque requis.`,
    stats: [
      ["5+", "Ans"],
      ["RBQ", "Licence"],
      ["2", "Langues"],
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Des travaux de renovation coordonnes avec soin.",
    servicesText:
      "De la charpente et du gypse jusqu'a la ceramique, aux moulures, a la peinture et aux renovations interieures completes, RenoPrime apporte structure et savoir-faire dans les details qui changent l'ambiance d'un espace.",
    featuredServices: [
      {
        title: "Cuisines et salles de bain",
        text: "Pieces tres utilisees renovees avec une planification claire, une finition nette et des partenaires specialises lorsque requis.",
      },
      {
        title: "Sous-sols et interieurs",
        text: "Espaces confortables et durables, concus pour la vie de tous les jours.",
      },
      {
        title: "Details de finition",
        text: "Gypse, joints, peinture, plancher, ceramique, moulures, charpente et reparations de plafond faits avec soin.",
      },
    ],
    featuredWork: "Projet en vedette",
    kitchenAfter: "Cuisine avant / apres",
    mindset: "Approche projet",
    projectTitle: "De vrais espaces, une planification pratique, une finition premium.",
    projectText:
      "Chaque renovation commence avec la maison existante. RenoPrime evalue la piece, planifie les etapes, protege les lieux et garde les details de finition alignes avec les objectifs du client.",
    qualities: ["Estimations claires", "Chantiers propres", "Materiaux de qualite", "Partenaires de confiance"],
    contactEyebrow: "Soumission gratuite",
    contactTitle: "Dites a RenoPrime ce que vous voulez transformer dans votre maison.",
    start: "Demarrer",
    getQuote: "Obtenir une soumission",
    call: "Appeler",
    email: "Courriel",
    serviceArea: "Territoire",
  },
  en: {
    eyebrow: "Montreal & Quebec Renovations",
    headline: "Premium residential renovations, built with precision.",
    subheadline:
      "RenoPrime delivers clean, reliable interior renovations for homeowners who want thoughtful planning, quality finishes, and a contractor they can trust.",
    estimate: "Get a Free Estimate",
    projects: "View Projects",
    introEyebrow: "Renovation Partner",
    introTitle: "A cleaner process for transforming the rooms you use every day.",
    introText:
      `Led by ${company.owner}, RenoPrime focuses on residential renovations that feel composed from the first conversation to the final walkthrough. Electrical and plumbing work are completed by licensed partner contractors when required.`,
    stats: [
      ["5+", "Years"],
      ["RBQ", "Licensed"],
      ["2", "Languages"],
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Renovation work handled with sharp coordination.",
    servicesText:
      "From framing and drywall to tile, trim, and full interior upgrades, RenoPrime brings structure and craftsmanship to the details that determine how a space feels.",
    featuredServices: [
      {
        title: "Kitchens & Bathrooms",
        text: "High-use rooms rebuilt with clean planning, sharp finishing, and licensed trade partners when required.",
      },
      {
        title: "Basements & Interiors",
        text: "Comfortable, durable lower-level spaces and interior upgrades made for everyday living.",
      },
      {
        title: "Finishing Details",
        text: "Drywall, taping, painting, flooring, tile, trim, framing, and ceiling repairs handled with care.",
      },
    ],
    featuredWork: "Featured Work",
    kitchenAfter: "Kitchen before & after",
    mindset: "Project Mindset",
    projectTitle: "Real spaces, practical planning, premium finishing.",
    projectText:
      "Every renovation starts with the existing home. RenoPrime assesses the room, plans the sequence, protects the property, and keeps the finish details aligned with the homeowner's goals.",
    qualities: ["Clear estimates", "Clean job sites", "Quality materials", "Licensed partners"],
    contactEyebrow: "Free Estimate",
    contactTitle: "Tell RenoPrime what you want to change in your home.",
    start: "Start",
    getQuote: "Get a Free Quote",
    call: "Call",
    email: "Email",
    serviceArea: "Service Area",
  },
};

const heroSlides = [
  {
    src: "/images/hero-renoprime-kitchen.jpg",
    position: "object-center",
  },
  {
    src: "/images/hero-renoprime-taping-room.jpg",
    position: "object-center",
  },
  {
    src: "/images/hero-renoprime-drywall-scaffold.jpg",
    position: "object-center",
  },
  {
    src: "/images/hero-renoprime-drywall-room.jpg",
    position: "object-center",
  },
];

type PageProps = {
  locale?: Locale;
};

export function HomePage({ locale = "fr" }: PageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <SiteHeader locale={locale} />
      <HeroSection locale={locale} />
      <IntroSection locale={locale} />
      <ServicesSection locale={locale} />
      <ProjectSection locale={locale} />
      <ContactSection locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

function HeroSection({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-black text-white sm:min-h-screen">
      <div className="absolute inset-0" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`hero-slide object-cover ${slide.position}`}
            style={{ animationDelay: `${index * 5.5}s` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.66)_42%,rgba(0,0,0,0.46)),linear-gradient(0deg,rgba(0,0,0,0.82),rgba(0,0,0,0.12)_48%)]" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-14 pt-32 sm:min-h-screen sm:px-8 sm:pb-20 lg:px-10">
        <div className="max-w-3xl">
          <div className="reveal mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-[#f4c430]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#f4c430]">
              {copy.eyebrow}
            </span>
          </div>

          <h1 className="reveal-delay font-display max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl lg:text-[4.85rem] xl:text-[5.4rem]">
            {copy.headline}
          </h1>

          <p className="reveal-delay-long mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {copy.subheadline}
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
              href="#projects"
              className="inline-flex h-14 items-center justify-center border border-white/25 bg-white/10 px-7 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
            >
              {copy.projects}
            </a>
          </div>

          <div className="reveal-delay-long mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {trustItems[locale].map((item) => (
              <div
                key={item}
                className="flex min-h-14 items-center gap-3 border border-white/14 bg-white/[0.07] px-4 backdrop-blur"
              >
                <BadgeCheck className="text-[#f4c430]" size={19} aria-hidden="true" />
                <span className="text-sm font-semibold text-white/88">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a12]">
            {copy.introEyebrow}
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
            {copy.introTitle}
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-lg leading-8 text-[#555149]">
            {copy.introText}
          </p>
          <div className="mt-8 grid grid-cols-3 border-y border-black/10">
            {copy.stats.map(([value, label]) => (
              <div key={label} className="border-r border-black/10 py-5 last:border-r-0">
                <div className="text-2xl font-black text-black">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#6d6a63]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <section id="services" className="bg-[#fbfaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a12]">
              {copy.servicesEyebrow}
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
              {copy.servicesTitle}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#5f5a52]">
            {copy.servicesText}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {copy.featuredServices.map((service, index) => (
            <article key={service.title} className="border border-black/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center bg-black text-[#f4c430]">
                {index === 0 ? <Sparkles size={20} /> : index === 1 ? <Hammer size={20} /> : <Check size={20} />}
              </div>
              <h3 className="mt-8 text-xl font-black text-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#676259]">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {services[locale].map((service) => (
            <span
              key={service}
              className="border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#2d2a26]"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSection({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <section id="projects" className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <div className="relative overflow-hidden">
          <BeforeAfterSlider
            beforeSrc="/images/featured-kitchen-before.jpg"
            afterSrc="/images/featured-kitchen-after.jpg"
            beforeAlt="Kitchen before RenoPrime renovation"
            afterAlt="Kitchen after RenoPrime renovation"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c430]">
              {copy.featuredWork}
            </p>
            <h2 className="mt-2 text-2xl font-black">{copy.kitchenAfter}</h2>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:pl-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4c430]">
            {copy.mindset}
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            {copy.projectTitle}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {copy.projectText}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {copy.qualities.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-white/12 p-4">
                <ShieldCheck className="text-[#f4c430]" size={19} aria-hidden="true" />
                <span className="font-semibold text-white/88">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <section id="contact" className="bg-[#f4c430] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-black/60">
            {copy.contactEyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
            {copy.contactTitle}
          </h2>
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
          <div className="flex items-center gap-4 border border-black/15 px-6 py-5 text-black">
            <MapPin size={22} aria-hidden="true" />
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-60">
                {copy.serviceArea}
              </span>
              <span className="text-lg font-black">{company.serviceArea}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
