import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/marketing/legal-policy-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Think & Write Media & Publishing.",
};

export default function Page() {
  return <LegalPolicyPage slug="terms-and-conditions" />;
}
