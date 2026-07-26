import type { Metadata } from "next";
import { CalendarCheck, Mail, MessageCircle, Phone } from "lucide-react";
import {
  ButtonLink,
  PageHero,
  PageShell,
  PublicEmailLinks,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { ContactForm } from "@/components/forms/contact-form";
import { ConsultationBookingForm } from "@/components/forms/consultation-booking-form";
import { PublishingApplicationForm } from "@/components/forms/publishing-application-form";
import { brand } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Think & Write Media & Publishing for book writing, publishing, author branding, PR, and Young Author Programme guidance.",
};

const contactOptions = [
  {
    title: "Publishing Consultation",
    description: "For authors exploring writing, editing, publishing, and launch support.",
    icon: CalendarCheck,
  },
  {
    title: "Young Author Enquiry",
    description: "For parents who want to understand fit, eligibility, and programme structure.",
    icon: MessageCircle,
  },
  {
    title: "Email",
    description: "Official publishing emails",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "Request a call-back for package guidance and next steps.",
    icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your book, brand, or publishing journey."
        description="Tell us where you are in the author journey and we will help you choose the right next step."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Start Here</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Book a consultation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-cream/64">
              Use this page to begin a publishing inquiry, Young Author enquiry,
              or consultation request. The team will use your context to guide
              the right package and next step.
            </p>
            <div className="mt-8">
              <ButtonLink href={`mailto:${brand.publicEmail}`} variant="outline">
                Email Your Enquiry
              </ButtonLink>
            </div>
          </div>

          <ConsultationBookingForm />
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <ContactForm />
          <PublishingApplicationForm />
        </div>
      </section>

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option) => (
              <div key={option.title} className="rounded-lg border border-gold/18 bg-charcoal p-7 shadow-luxury">
                <option.icon className="mb-6 h-7 w-7 text-gold" />
                <h3 className="text-xl font-semibold text-cream">{option.title}</h3>
                {option.title === "Email" ? (
                  <PublicEmailLinks className="mt-3" linkClassName="leading-7" />
                ) : (
                  <p className="mt-3 leading-7 text-cream/64">{option.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
