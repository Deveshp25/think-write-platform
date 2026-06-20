import type { Metadata } from "next";
import { Check, Crown, Rocket, Sparkles, Star } from "lucide-react";
import {
  ButtonLink,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Compare Launchpad, Author Pro, Legacy Author, and Young Author Programme packages for premium book publishing support.",
};

const packages = [
  {
    name: "Launchpad",
    price: "Rs. 14,999",
    bestFor: "First-time authors who need publishing direction.",
    icon: Rocket,
    features: ["Publishing roadmap", "Manuscript review", "Amazon publishing guidance", "Launch checklist"],
  },
  {
    name: "Author Pro",
    price: "Rs. 34,999",
    bestFor: "Serious authors who need writing, editing, and launch support.",
    icon: Star,
    featured: true,
    features: ["Writing support", "Editing direction", "Cover strategy", "Brand launch plan"],
  },
  {
    name: "Legacy Author",
    price: "Rs. 74,999",
    bestFor: "Founders, professionals, and thought leaders building authority.",
    icon: Crown,
    features: ["Ghostwriting strategy", "Premium positioning", "PR and media direction", "Legacy launch roadmap"],
  },
  {
    name: "Young Author Programme",
    price: "Rs. 19,999",
    bestFor: "Students and young writers ready to become published authors.",
    icon: Sparkles,
    features: ["Writing mentorship", "Parent-guided process", "Book idea development", "Publishing confidence"],
  },
];

export default function PackagesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Packages"
        title="Choose the publishing path that matches your ambition."
        description="Transparent packages for authors at different stages, from first manuscript guidance to premium legacy-building support."
      />

      <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Publishing Plans</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Clear options. Premium execution. No confusion.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <div
                key={item.name}
                className={cn(
                  "rounded-lg border p-7 transition-all hover:-translate-y-1",
                  item.featured
                    ? "border-gold bg-navy text-white shadow-gold"
                    : "border-navy/8 bg-white text-navy shadow-soft-card hover:border-gold/35",
                )}
              >
                <item.icon className="mb-6 h-7 w-7 text-gold" />
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-4 font-editorial text-4xl">{item.price}</p>
                <p className={cn("mt-4 leading-7", item.featured ? "text-white/68" : "text-navy/64")}>
                  {item.bestFor}
                </p>
                <div className="mt-7 space-y-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm leading-6">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span className={item.featured ? "text-white/76" : "text-navy/70"}>{feature}</span>
                    </div>
                  ))}
                </div>
                <ButtonLink href="/contact" variant={item.featured ? "gold" : "outline"} className="mt-8 w-full">
                  Book Consultation
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-navy/8 bg-white p-6 shadow-soft-card sm:p-8">
          <SectionLabel>Recommendation</SectionLabel>
          <h2 className="font-editorial text-3xl leading-tight sm:text-4xl">
            Start with a consultation if you are between packages.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-navy/64">
            The right plan depends on your manuscript readiness, publishing timeline,
            authority goals, and how much strategic support you want before launch.
          </p>
        </div>
      </section>

      <FinalCta title="Choose with clarity before you invest." />
    </PageShell>
  );
}
