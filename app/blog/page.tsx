import type { Metadata } from "next";
import { BookOpen, CalendarDays } from "lucide-react";
import {
  ButtonLink,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { blogPosts } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Publishing guides from Think & Write covering first books, ISBN, self publishing, Amazon KDP, book marketing, publishing costs, and first-time author mistakes.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Publishing Blog | Think & Write Media & Publishing",
    description:
      "SEO-friendly publishing resources for authors preparing to write, publish, market, and launch their books.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Publishing insights for first-time authors and growing author brands."
        description="Prepared article cards for practical publishing education, Amazon readiness, ISBN clarity, marketing, and author decision-making."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Publishing Resources</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                SEO-ready topics prepared for future articles.
              </h2>
            </div>
            <ButtonLink href="/contact" variant="outline">
              Ask a Publishing Question
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-lg border border-gold/18 bg-charcoal p-7 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {post.category}
                  </span>
                  <BookOpen className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-6 font-editorial text-3xl leading-tight text-cream">{post.title}</h3>
                <p className="mt-4 leading-7 text-cream/64">{post.description}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-cream/48">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  <span>Article coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
