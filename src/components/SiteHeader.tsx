import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localizePath, navigation, type Locale } from "@/lib/content";

type SiteHeaderProps = {
  locale?: Locale;
};

const quoteLabel = {
  fr: "Soumission",
  en: "Free Quote",
};

export function SiteHeader({ locale = "fr" }: SiteHeaderProps) {
  const navItems = navigation[locale];

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href={localizePath("/", locale)} className="flex items-center gap-3" aria-label="RenoPrime home">
          <span className="relative flex h-12 w-12 overflow-hidden rounded bg-white shadow-sm">
            <Image
              src="/images/renoprime-logo.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </span>
          <span className="text-lg font-black uppercase tracking-[0.22em] text-white">
            Reno<span className="text-[#f4c430]">Prime</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={localizePath(item.href, locale)}
              className="text-sm font-medium text-white/78 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href={localizePath("/quote", locale)}
            className="inline-flex h-11 items-center gap-2 border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition hover:border-[#f4c430] hover:bg-[#f4c430] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
          >
            <ArrowRight size={16} aria-hidden="true" />
            {quoteLabel[locale]}
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary
            className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur marker:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} aria-hidden="true" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-14 grid w-56 gap-1 border border-white/15 bg-black/92 p-2 shadow-2xl backdrop-blur"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={localizePath(item.href, locale)}
                className="px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-2 py-2">
              <LanguageSwitcher locale={locale} compact />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
