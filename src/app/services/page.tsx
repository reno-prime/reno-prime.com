import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services de rénovation résidentielle RenoPrime à Montréal et au Québec, incluant cuisines, salles de bain, sous-sols, gypse, joints, peinture, planchers, céramique, moulures, réparations de plafond, démolition et gestion de projet.",
};

export default function Page() {
  return <ServicesPage />;
}
