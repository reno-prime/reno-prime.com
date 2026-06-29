import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez RenoPrime pour discuter d'un projet de rénovation résidentielle à Montréal ou au Québec.",
};

export default function Page() {
  return <ContactPage />;
}
