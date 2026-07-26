import type { Metadata } from "next";
import { brand, packages } from "@/lib/content/site";
import HomePage from "./home-page";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  slogan: brand.tagline,
  url: "https://thinkandwrite.in",
  email: brand.publicEmail,
  brand: {
    "@type": "Brand",
    name: "Think & Write Media & Publishing",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: brand.publicEmail,
    contactType: "customer support",
  },
  offers: packages.map((item) => ({
    "@type": "Offer",
    name: item.name,
    price: item.price.replace(/\D/g, ""),
    priceCurrency: "INR",
  })),
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
