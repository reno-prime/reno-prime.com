import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company, localizePath, navigation, type Locale } from "@/lib/content";

type SiteFooterProps = {
  locale?: Locale;
};

const footerCopy = {
  fr: {
    description:
      "Rénovations résidentielles haut de gamme pour les propriétaires de Montréal et du Québec, avec une planification claire et une finition soigneuse.",
    navigation: "Navigation",
    contact: "Contact",
    copyright: "Copyright 2026 RenoPrime",
    language: "Expérience bilingue Français / English",
  },
  en: {
    description:
      "Premium residential renovations for Montreal and Quebec homeowners, built with clean planning and careful finishing.",
    navigation: "Navigation",
    contact: "Contact",
    copyright: "Copyright 2026 RenoPrime",
    language: "English / Français bilingual experience",
  },
};

export function SiteFooter({ locale = "fr" }: SiteFooterProps) {
  const copy = footerCopy[locale];
  const navItems = navigation[locale];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-10 lg:py-18">
        <div>
          <Link href={localizePath("/", locale)} className="inline-flex items-center gap-3" aria-label="RenoPrime home">
            <span className="relative flex h-12 w-12 overflow-hidden rounded bg-white">
              <Image
                src="/images/renoprime-logo.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </span>
            <span className="text-lg font-black uppercase tracking-[0.22em] text-white">
              Reno<span className="text-[#f4c430]">Prime</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md leading-7 text-white/62">
            {copy.description}
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-white/78">
            <ShieldCheck size={18} className="text-[#f4c430]" aria-hidden="true" />
            RBQ License {company.rbq}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c430]">
              {copy.navigation}
            </h2>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={localizePath(item.href, locale)}
                  className="text-sm font-semibold text-white/68 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c430]">
              {copy.contact}
            </h2>
            <div className="mt-5 grid gap-4 text-sm font-semibold text-white/72">
              <a href={company.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                <Phone size={18} className="text-[#f4c430]" aria-hidden="true" />
                {company.phone}
              </a>
              <a href={company.emailHref} className="flex items-center gap-3 transition hover:text-white">
                <Mail size={18} className="text-[#f4c430]" aria-hidden="true" />
                {company.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#f4c430]" aria-hidden="true" />
                {company.serviceArea}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/42 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>{copy.copyright}</span>
          <span>{copy.language}</span>
        </div>
      </div>
    </footer>
  );
}
