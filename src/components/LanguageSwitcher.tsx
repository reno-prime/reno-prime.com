"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/content";
import { localizePath } from "@/lib/content";

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
};

export function LanguageSwitcher({ locale, compact = false }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      aria-label={locale === "fr" ? "Changer de langue" : "Change language"}
      className={`inline-flex border border-white/20 bg-white/10 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur ${compact ? "w-full" : ""}`}
    >
      <Link
        href={localizePath(pathname, "fr")}
        className={`px-3 py-2 transition hover:bg-white hover:text-black ${locale === "fr" ? "bg-[#f4c430] text-black" : ""} ${compact ? "flex-1 text-center" : ""}`}
      >
        FR
      </Link>
      <Link
        href={localizePath(pathname, "en")}
        className={`px-3 py-2 transition hover:bg-white hover:text-black ${locale === "en" ? "bg-[#f4c430] text-black" : ""} ${compact ? "flex-1 text-center" : ""}`}
      >
        EN
      </Link>
    </div>
  );
}
