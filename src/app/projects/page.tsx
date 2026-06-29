import type { Metadata } from "next";
import { ProjectsPage } from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Voyez les projets de rénovation RenoPrime, incluant cuisines, salles de bain et rénovations intérieures à Montréal et au Québec.",
};

export default function Page() {
  return <ProjectsPage />;
}
