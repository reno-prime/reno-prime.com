import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "RenoPrime residential renovation services in Montreal and Quebec, including kitchens, bathrooms, basements, drywall, taping, painting, flooring, tile, trim, ceiling repairs, demolition, and project management.",
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
