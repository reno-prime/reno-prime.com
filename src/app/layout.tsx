import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reno-prime.com"),
  title: {
    default: "RenoPrime | Renovations residentielles a Montreal & Quebec",
    template: "%s | RenoPrime",
  },
  description:
    "Renovations residentielles haut de gamme, cuisines, salles de bain, sous-sols, gypse, peinture, planchers, ceramique, moulures et services de renovation interieure a Montreal et au Quebec.",
  keywords: [
    "RenoPrime",
    "Montreal renovations",
    "Quebec renovations",
    "renovation Montreal",
    "renovation Quebec",
    "kitchen renovation",
    "bathroom renovation",
    "RBQ licensed contractor",
  ],
  openGraph: {
    title: "RenoPrime | Renovations residentielles",
    description:
      "Services de renovation avec licence RBQ pour les maisons de Montreal et du Quebec.",
    url: "https://reno-prime.com",
    siteName: "RenoPrime",
    images: [
      {
        url: "/images/kitchen-renovation-hero.jpg",
        width: 1284,
        height: 1095,
        alt: "Residential kitchen renovation by RenoPrime",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr-CA">
      <body>{children}</body>
    </html>
  );
}
