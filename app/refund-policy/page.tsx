import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/marketing/legal-policy-page";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund & Cancellation Policy for Think & Write Media & Publishing.",
};

export default function Page() {
  return <LegalPolicyPage slug="refund-policy" />;
}
