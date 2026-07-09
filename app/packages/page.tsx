import type { Metadata } from "next";
import { Check, Crown, Rocket, Sparkles, Star } from "lucide-react";
import {
  ButtonLink,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { packages } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Compare Launchpad, Author Pro, Legacy Author, and Young Author Programme packages for premium book publishing support.",
};

const icons = [Rocket, Star, Crown, Sparkles];

export default function PackagesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Packages"
        title="Choose the publishing path that matches your ambition."
        description="Transparent publishing packages for debut authors, serious authors, legacy builders, and young writers."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Publishing Plans</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Premium black and gold publishing support with clear benefits.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {packages.map((item, index) => {
              const Icon = icons[index] ?? Rocket;
              return (
                <article
                  key={item.name}
                  className={cn(
                    "rounded-lg border p-7 shadow-luxury transition-all hover:-translate-y-1",
                    item.featured
                      ? "border-gold bg-gold text-black shadow-gold"
                      : "border-gold/18 bg-charcoal text-cream hover:border-gold/45",
                  )}
                >
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                    <div>
                      <div
                        className={cn(
                          "mb-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                          item.featured ? "bg-black/12 text-black" : "bg-gold/10 text-gold",
                        )}
                      >
                        {item.featured ? "Flagship Package" : item.idealFor}
                      </div>
                      <h3 className="text-3xl font-semibold">{item.name}</h3>
                      <p className="mt-4 font-editorial text-5xl">{item.price}</p>
                    </div>
                    <Icon className={cn("h-9 w-9", item.featured ? "text-black" : "text-gold")} />
                  </div>

                  <p className={cn("mt-6 font-semibold", item.featured ? "text-black" : "text-cream")}>
                    {item.includesLabel}:
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {item.includes.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm leading-6">
                        <Check className={cn("mt-1 h-4 w-4 shrink-0", item.featured ? "text-black" : "text-gold")} />
                        <span className={item.featured ? "text-black/74" : "text-cream/72"}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={cn("mt-7 rounded-lg border p-4", item.featured ? "border-black/15 bg-black/8" : "border-gold/16 bg-black/30")}>
                    <p className={cn("text-sm font-semibold", item.featured ? "text-black" : "text-gold")}>Ideal For</p>
                    <p className={cn("mt-2 leading-7", item.featured ? "text-black/72" : "text-cream/68")}>{item.idealFor}</p>
                  </div>

                  <ButtonLink href="/contact" variant={item.featured ? "outline" : "gold"} className="mt-8 w-full">
                    Book Consultation
                  </ButtonLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-gold/18 bg-black/50 p-6 shadow-luxury sm:p-8">
          <SectionLabel>Recommendation</SectionLabel>
          <h2 className="font-editorial text-3xl leading-tight text-cream sm:text-4xl">
            Start with a consultation if you are between packages.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-cream/64">
            The right plan depends on manuscript readiness, publishing timeline,
            visibility needs, author copies, and how much strategic support you want before launch.
          </p>
        </div>
      </section>

      <FinalCta title="Choose with clarity before you invest." />
    </PageShell>
  );
}
