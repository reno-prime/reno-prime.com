import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services de renovation residentielle RenoPrime a Montreal et au Quebec, incluant cuisines, salles de bain, sous-sols, gypse, joints, peinture, planchers, ceramique, moulures, reparations de plafond, demolition et gestion de projet.",
};

export default function Page() {
  return <ServicesPage />;
}
