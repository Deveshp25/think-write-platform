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
import { coreServices } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium writing, ghostwriting, editing, proofreading, book cover design, Amazon publishing, author branding, Instagram growth, PR, and book launch services.",
};

const icons = [PenLine, Feather, FileText, BookOpen, BadgeCheck, Megaphone];
const process = ["Discover", "Position", "Create", "Refine", "Publish", "Promote"];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Every service an author needs from idea to influence."
        description="Think & Write brings writing, publishing, design, brand strategy, and launch support into one premium author experience."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Author Services</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Choose support by stage, goal, or ambition.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => {
              const Icon = icons[index] ?? BookOpen;
              return <FeatureCard key={service.title} icon={Icon} title={service.title} description={service.description} />;
            })}
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionLabel>Process</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                A calm system for complex publishing work.
              </h2>
              <p className="mt-6 text-lg leading-8 text-cream/64">
                Each engagement begins with clarity, then moves through production
                with defined checkpoints, thoughtful feedback, and launch thinking.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <div key={step} className="rounded-lg border border-gold/18 bg-black/50 p-6 shadow-luxury">
                  <span className="font-editorial text-4xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-lg font-semibold text-cream">{step}</h3>
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
