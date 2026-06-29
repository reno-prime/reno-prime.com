import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RenoPrime to discuss a residential renovation project in Montreal or Quebec.",
};

export default function Page() {
  return <ContactPage locale="en" />;
}
