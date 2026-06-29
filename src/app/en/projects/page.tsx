import type { Metadata } from "next";
import { ProjectsPage } from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View RenoPrime renovation projects, including kitchen, bathroom, and interior renovation work in Montreal and Quebec.",
};

export default function Page() {
  return <ProjectsPage locale="en" />;
}
