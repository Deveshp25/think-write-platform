import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/marketing/legal-policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Think & Write Media & Publishing.",
};

export default function Page() {
  return <LegalPolicyPage slug="privacy-policy" />;
}
