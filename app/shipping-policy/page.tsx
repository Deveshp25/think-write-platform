import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/marketing/legal-policy-page";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Shipping & Delivery Policy for Think & Write Media & Publishing.",
};

export default function Page() {
  return <LegalPolicyPage slug="shipping-policy" />;
}
