import type { Metadata } from "next";
import { BadgeCheck, BookMarked, Compass, Gem } from "lucide-react";
import {
  ButtonLink,
  FeatureCard,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { brand, founders } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Think & Write Media & Publishing Pvt. Ltd., its founders, mission, vision, and premium approach to publishing, branding, and legacy creation.",
};

const values = [
  {
    title: "Publishing excellence",
    description: "Books are shaped with editorial care, design quality, and publication readiness.",
    icon: BookMarked,
  },
  {
    title: "Brand visibility",
    description: "Publishing is connected with author identity, launch assets, and media presence.",
    icon: Gem,
  },
  {
    title: "Founder-led guidance",
    description: "Each founder contributes distinct expertise across leadership, editorial, quality, and branding.",
    icon: Compass,
  },
  {
    title: "Legacy creation",
    description: "The company positions books as long-term assets for authors, students, and professionals.",
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A publishing, branding, and legacy creation house."
        description="Think & Write Media & Publishing Pvt. Ltd. exists to help ideas become professionally published books, author brands, and long-term creative legacies."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Mission & Vision</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Building a storytelling ecosystem for authors, students, and emerging voices.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-cream/66">
            <p>
              The company mission is to publish exceptional books, build author
              brands, create educational content, develop media properties,
              support young and emerging writers, and establish a national
              publishing network.
            </p>
            <p>
              Its vision is to build an influential storytelling ecosystem by
              combining publishing, media, digital content, creative education,
              and modern brand communication.
            </p>
            <div>
              <ButtonLink href={`mailto:${brand.email}`} variant="outline">
                Email Think & Write
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Founders</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Founder and Co-Founder profiles.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="rounded-lg border border-gold/18 bg-black/50 p-7 shadow-luxury">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{founder.designation}</p>
                <h3 className="mt-3 font-editorial text-3xl leading-tight text-cream">{founder.name}</h3>
                <p className="mt-4 leading-7 text-cream/64">{founder.summary}</p>
                <div className="mt-6">
                  <h4 className="font-semibold text-cream">Responsibilities</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {founder.responsibilities.map((item) => (
                      <span key={item} className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {founder.services.length > 0 ? (
                  <div className="mt-6">
                    <h4 className="font-semibold text-cream">Add-On Services</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {founder.services.map((item) => (
                        <span key={item} className="rounded-full border border-cream/12 bg-white/6 px-3 py-1 text-xs font-medium text-cream/72">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Positioning</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Publishing plus branding plus legacy creation.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Let's shape your book together." />
    </PageShell>
  );
}
