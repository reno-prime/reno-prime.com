import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez RenoPrime pour discuter d'un projet de renovation residentielle a Montreal ou au Quebec.",
};

export default function Page() {
  return <ContactPage />;
}
