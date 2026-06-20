import type { Metadata } from "next";
import { BadgeCheck, BookMarked, Compass, Gem } from "lucide-react";
import {
  FeatureCard,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Think & Write Media & Publishing Pvt. Ltd. and its premium approach to author-led publishing, brand building, and book launches.",
};

const values = [
  {
    title: "Author-first guidance",
    description: "Every decision begins with the author's goals, credibility, and long-term positioning.",
    icon: Compass,
  },
  {
    title: "Editorial excellence",
    description: "Books are shaped for clarity, authority, rhythm, reader value, and professional finish.",
    icon: BookMarked,
  },
  {
    title: "Premium positioning",
    description: "The process treats books as identity assets, not just publishing outputs.",
    icon: Gem,
  },
  {
    title: "Launch credibility",
    description: "Publishing, PR, brand, and visibility systems are considered together.",
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="We help ideas become books, brands, and legacies."
        description="Think & Write exists for authors who want strategic publishing support, editorial care, and a premium process from first idea to launch."
      />

      <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Publishing should feel clear, crafted, and deeply personal.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-navy/66">
            <p>
              A book carries a person's ideas, reputation, story, and ambition.
              That is why the process needs more than production. It needs positioning,
              editorial judgement, brand thinking, and careful launch direction.
            </p>
            <p>
              Think & Write combines the taste of a premium publishing house with
              the operating clarity of a modern SaaS-style author platform.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Values</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              The standards behind every author journey.
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
