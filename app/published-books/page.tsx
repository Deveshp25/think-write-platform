import type { Metadata } from "next";
import { BadgeCheck, BookOpen, CheckCircle2, Library, Sparkles } from "lucide-react";
import {
  ButtonLink,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { publishedBookCategories, publishingFeatureBlocks } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Published Books",
  description:
    "Explore Think & Write published book categories including fiction, poetry, biographies, business books, and children's books with ISBN and Amazon publishing support.",
  alternates: {
    canonical: "/published-books",
  },
  openGraph: {
    title: "Published Books | Think & Write Media & Publishing",
    description:
      "Premium publishing support across fiction, poetry, biographies, business books, and children's books.",
    url: "/published-books",
    type: "website",
  },
};

export default function PublishedBooksPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Published Books"
        title="A growing publishing catalogue for ambitious authors and young voices."
        description="Think & Write supports authors across genres with editorial guidance, ISBN support, Amazon publishing assistance, and personalized consultation."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Book Categories</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Publishing pathways for every kind of author voice.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {publishedBookCategories.map((category) => (
              <article
                key={category}
                className="rounded-lg border border-gold/18 bg-charcoal p-6 text-center shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
              >
                <Library className="mx-auto mb-5 h-7 w-7 text-gold" />
                <h3 className="font-semibold text-cream">{category}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Publishing Support</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                Premium support blocks for authors moving from manuscript to market.
              </h2>
            </div>
            <ButtonLink href="/contact" variant="gold">
              Start Publishing
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {publishingFeatureBlocks.map((feature, index) => {
              const Icon = index === 0 ? BadgeCheck : index === 3 ? Sparkles : index === 2 ? BookOpen : CheckCircle2;

              return (
                <article
                  key={feature}
                  className="rounded-lg border border-gold/18 bg-black/50 p-6 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
                >
                  <Icon className="mb-5 h-7 w-7 text-gold" />
                  <h3 className="text-lg font-semibold leading-7 text-cream">{feature}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready to see your book in the published catalogue?"
        description="Begin with a consultation and choose the publishing path that fits your manuscript, audience, and ambition."
      />
    </PageShell>
  );
}
