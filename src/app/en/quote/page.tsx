import type { Metadata } from "next";
import { QuotePage } from "@/components/QuotePage";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free RenoPrime renovation quote for residential renovation work in Montreal and Quebec.",
};

export default function Page() {
  return <QuotePage locale="en" />;
}
