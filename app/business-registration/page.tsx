import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { ButtonLink, PageHero, PageShell, SectionLabel } from "@/components/marketing/site-frame";
import { businessRegistration } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Business Registration",
  description: "Business registration details for Think and Write Media and Publishing from the Gumasta certificate.",
};

const fields = [
  ["Business Name", businessRegistration.businessName],
  ["Registration Number", businessRegistration.registrationNumber],
  ["Business Type", businessRegistration.businessType],
  ["Owner", businessRegistration.owner],
  ["Business Commencement Date", businessRegistration.businessCommencementDate],
  ["Registration Date", businessRegistration.registrationDate],
  ["Validity", businessRegistration.validity],
  ["Registered Address", businessRegistration.registeredAddress],
];

export default function BusinessRegistrationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Business Registration"
        title="Official business registration details."
        description="Registration information displayed from the uploaded Gumasta certificate."
      />

      <section className="bg-black px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Gumasta Certificate</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Think and Write Media and Publishing
            </h2>
            <div className="mt-8 grid gap-4">
              {fields.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-gold/18 bg-charcoal p-5 shadow-luxury">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
                  <p className="mt-2 leading-7 text-cream/72">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-gold/18 bg-charcoal p-5 shadow-luxury">
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-gold" />
                <p className="font-semibold text-cream">Certificate PDF</p>
              </div>
              <a
                href={businessRegistration.certificatePath}
                download
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gold/28 bg-black/40 px-4 py-2 text-sm font-semibold text-cream shadow-luxury transition hover:border-gold/55"
              >
                <Download className="h-4 w-4" />
                View / Download Certificate
              </a>
            </div>
            <iframe
              title="Gumasta certificate"
              src={businessRegistration.certificatePath}
              className="h-[640px] w-full rounded-lg border border-gold/18 bg-black"
            />
            <div className="mt-6">
              <ButtonLink href="/legal-information" variant="outline">
                View Legal Information
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
