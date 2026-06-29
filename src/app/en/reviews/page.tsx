import type { Metadata } from "next";
import { ReviewsPage } from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Share a RenoPrime renovation review or read about the review process for residential renovation clients in Montreal and Quebec.",
};

export default function Page() {
  return <ReviewsPage locale="en" />;
}
