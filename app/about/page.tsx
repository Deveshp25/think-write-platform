import Image from "next/image";
import type { Metadata } from "next";
import { BadgeCheck, BookMarked, Compass, Gem, Quote } from "lucide-react";
import {
  ButtonLink,
  FeatureCard,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { brand, founderCollage, founders } from "@/lib/content/site";

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

const founderStory = [
  {
    title: "Why Think & Write was started",
    description:
      "Think & Write was created for authors who need more than a printed book: they need clarity, structure, trust, and a publishing partner who understands the weight of an idea.",
  },
  {
    title: "Publishing philosophy",
    description:
      "Every manuscript is treated as a legacy asset. The work begins with the author's intent, then moves through editorial depth, design quality, publishing readiness, and visibility.",
  },
  {
    title: "Vision",
    description:
      "The vision is to build a refined publishing ecosystem where students, debut authors, experts, and leaders can turn their stories into credible, lasting public work.",
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
              <ButtonLink href={`mailto:${brand.publicEmail}`} variant="outline">
                Email Think & Write
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="rounded-lg border border-gold/22 bg-black/50 p-6 shadow-luxury">
            <Image
              src={founderCollage.imagePath}
              alt={founderCollage.alt}
              width={1024}
              height={1536}
              className="aspect-[2/3] w-full rounded-lg border border-gold/24 object-contain"
            />
          </div>

          <div>
            <SectionLabel>Founder Message</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              A publishing house built for authors who see their book as a legacy.
            </h2>
            <div className="mt-7 rounded-lg border border-gold/18 bg-black/50 p-7 shadow-luxury">
              <Quote className="mb-5 h-8 w-8 text-gold" />
              <p className="font-editorial text-2xl leading-9 text-cream">
                We started Think & Write to give authors a premium, guided space
                where ideas are not rushed into print, but shaped into work that
                can carry their name, voice, and purpose with pride.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {founderStory.map((item) => (
                <article key={item.title} className="rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury">
                  <h3 className="text-lg font-semibold text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cream/62">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Founders</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Founder and team information.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="rounded-lg border border-gold/22 bg-black/50 p-5 shadow-luxury">
              <Image
                src={founderCollage.imagePath}
                alt={founderCollage.alt}
                width={1024}
                height={1536}
                className="aspect-[2/3] w-full rounded-lg border border-gold/18 object-contain"
              />
            </div>
            <div className="rounded-lg border border-gold/18 bg-black/50 p-7 shadow-luxury">
              <div className="space-y-7">
                {founders.map((founder) => (
                  <div key={founder.name} className="border-b border-gold/12 pb-7 last:border-b-0 last:pb-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{founder.designation}</p>
                    <h3 className="mt-3 font-editorial text-3xl leading-tight text-cream">{founder.name}</h3>
                    <p className="mt-4 leading-7 text-cream/64">{founder.summary}</p>
                  </div>
                ))}
              </div>
            </div>
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
