import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/marketing/legal-policy-page";

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Legal Information for Think & Write Media & Publishing.",
};

export default function Page() {
  return <LegalPolicyPage slug="legal-information" />;
}
