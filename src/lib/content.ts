export const company = {
  name: "RenoPrime",
  owner: "Dominik Lebel",
  phone: "514-638-0867",
  phoneHref: "tel:+15146380867",
  email: "general@renoprime.com",
  emailHref: "mailto:general@renoprime.com",
  rbq: "5875-9804-01",
  serviceArea: "Montreal & Quebec",
};

export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export const navigation: Record<Locale, { label: string; href: string }[]> = {
  fr: [
    { label: "Accueil", href: "/" },
    { label: "Projets", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Avis", href: "/reviews" },
    { label: "Soumission", href: "/quote" },
    { label: "Contact", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Free Quote", href: "/quote" },
    { label: "Contact", href: "/contact" },
  ],
};

export function localizePath(path: string, locale: Locale) {
  const normalizedPath = path === "/en" ? "/" : path.replace(/^\/en(?=\/|$)/, "") || "/";

  if (locale === "fr") {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return "/en";
  }

  return `/en${normalizedPath}`;
}

export const trustItems: Record<Locale, string[]> = {
  fr: ["Licence RBQ", "5+ ans d'experience", "Francais & English"],
  en: ["RBQ Licensed", "5+ Years Experience", "English & Francais"],
};

export const services: Record<Locale, string[]> = {
  fr: [
    "Renovations interieures",
    "Renovations de cuisine",
    "Renovations de salle de bain",
    "Finition de sous-sol",
    "Installation de gypse",
    "Tirage de joints",
    "Peinture",
    "Installation de plancher",
    "Installation de ceramique",
    "Moulures et finition",
    "Reparations de plafond",
    "Demolition et preparation",
    "Gestion de projet",
  ],
  en: [
    "Interior Renovations",
    "Kitchen Renovations",
    "Bathroom Renovations",
    "Basement Finishing",
    "Drywall Installation",
    "Taping & Mudding",
    "Painting",
    "Flooring Installation",
    "Tile Installation",
    "Trim & Finish Carpentry",
    "Ceiling Repairs",
    "Demolition and Preparation",
    "Project Management",
  ],
};
