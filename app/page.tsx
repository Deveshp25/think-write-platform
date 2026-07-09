import type { Metadata } from "next";
import { brand } from "@/lib/content/site";
import HomePage from "./home-page";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  slogan: brand.tagline,
  url: "https://thinkandwrite.in",
  email: brand.email,
  brand: {
    "@type": "Brand",
    name: "Think & Write Media & Publishing",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: brand.email,
    contactType: "customer support",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Launchpad",
      price: "14999",
      priceCurrency: "INR",
    },
    {
      "@type": "Offer",
      name: "Author Pro",
      price: "34999",
      priceCurrency: "INR",
    },
    {
      "@type": "Offer",
      name: "Legacy Author",
      price: "74999",
      priceCurrency: "INR",
    },
    {
      "@type": "Offer",
      name: "Young Author Programme",
      price: "19999",
      priceCurrency: "INR",
    },
  ],
};

export const metadata: Metadata = {
  title: "Think & Write Media & Publishing | Turning Ideas into Published Legacies",
  description:
    "Transform your idea into a professionally written, edited, designed, published, and launched book with Think & Write Media & Publishing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Think & Write Media & Publishing",
    description:
      "Premium writing, ghostwriting, editing, Amazon publishing, author branding, PR, Instagram growth, and book launch support.",
    url: "/",
    siteName: "Think & Write Media & Publishing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think & Write Media & Publishing",
    description: "Turning Ideas into Published Legacies.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <HomePage />
    </>
  );
}
