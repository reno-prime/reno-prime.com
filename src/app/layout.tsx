import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reno-prime.com"),
  title: {
    default: "RenoPrime | Rénovations résidentielles à Montréal & Québec",
    template: "%s | RenoPrime",
  },
  description:
    "Rénovations résidentielles haut de gamme, cuisines, salles de bain, sous-sols, gypse, peinture, planchers, céramique, moulures et services de rénovation intérieure à Montréal et au Québec.",
  keywords: [
    "RenoPrime",
    "Montreal renovations",
    "Quebec renovations",
    "rénovation Montréal",
    "rénovation Québec",
    "kitchen renovation",
    "bathroom renovation",
    "RBQ licensed contractor",
  ],
  openGraph: {
    title: "RenoPrime | Rénovations résidentielles",
    description:
      "Services de rénovation avec licence RBQ pour les maisons de Montréal et du Québec.",
    url: "https://reno-prime.com",
    siteName: "RenoPrime",
    images: [
      {
        url: "/images/renoprime-share-card.jpg",
        width: 1200,
        height: 630,
        alt: "RenoPrime renovation company logo",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenoPrime | Rénovations résidentielles",
    description:
      "Services de rénovation avec licence RBQ pour les maisons de Montréal et du Québec.",
    images: ["/images/renoprime-share-card.jpg"],
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
