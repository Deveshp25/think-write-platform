import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpen,
  Feather,
  FileText,
  Megaphone,
  PenLine,
} from "lucide-react";
import {
  FeatureCard,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium writing, ghostwriting, editing, proofreading, book cover design, Amazon publishing, author branding, Instagram growth, PR, and book launch services.",
};

const services = [
  {
    title: "Book Writing",
    description: "A structured process for turning ideas, expertise, and life stories into a clear manuscript.",
    icon: PenLine,
  },
  {
    title: "Ghostwriting",
    description: "High-touch writing support that captures your voice, point of view, and authority.",
    icon: Feather,
  },
  {
    title: "Editing & Proofreading",
    description: "Editorial refinement for structure, flow, accuracy, polish, and reader confidence.",
    icon: FileText,
  },
  {
    title: "Book Cover Design",
    description: "Premium cover direction built for category fit, credibility, and visual distinction.",
    icon: BookOpen,
  },
  {
    title: "Amazon Publishing",
    description: "Publishing guidance for formatting, listing preparation, metadata, and launch readiness.",
    icon: BadgeCheck,
  },
  {
    title: "Author Brand Growth",
    description: "Instagram, PR, media positioning, and launch systems for long-term author visibility.",
    icon: Megaphone,
  },
];

const process = ["Discover", "Position", "Create", "Refine", "Publish", "Promote"];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Every service an author needs from idea to influence."
        description="Think & Write brings writing, publishing, design, brand strategy, and launch support into one refined author experience."
      />

      <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Author Services</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Choose support by stage, goal, or ambition.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionLabel>Process</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
                A calm system for complex publishing work.
              </h2>
              <p className="mt-6 text-lg leading-8 text-navy/64">
                Each engagement begins with clarity, then moves through production
                with defined checkpoints, thoughtful feedback, and launch thinking.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <div key={step} className="rounded-lg border border-navy/8 bg-white p-6 shadow-soft-card">
                  <span className="font-editorial text-4xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="Not sure what your book needs first?" />
    </PageShell>
  );
}
