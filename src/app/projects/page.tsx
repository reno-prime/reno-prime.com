import type { Metadata } from "next";
import { ProjectsPage } from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Voyez les projets de renovation RenoPrime, incluant cuisines, salles de bain et renovations interieures a Montreal et au Quebec.",
};

export default function Page() {
  return <ProjectsPage />;
}
