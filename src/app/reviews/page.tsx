import type { Metadata } from "next";
import { ReviewsPage } from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Avis",
  description:
    "Partagez un avis RenoPrime ou consultez le processus d'avis pour les clients en renovation residentielle a Montreal et au Quebec.",
};

export default function Page() {
  return <ReviewsPage />;
}
