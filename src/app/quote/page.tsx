import type { Metadata } from "next";
import { QuotePage } from "@/components/QuotePage";

export const metadata: Metadata = {
  title: "Obtenir une soumission",
  description:
    "Demandez une soumission gratuite RenoPrime pour vos travaux de renovation residentielle a Montreal et au Quebec.",
};

export default function Page() {
  return <QuotePage />;
}
