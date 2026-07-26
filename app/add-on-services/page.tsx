import type { Metadata } from "next";
import { Crown, Gem, Network, Sparkles } from "lucide-react";
import {
  ButtonLink,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { addOnPricing, brand, founders } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Add-On Services",
  description:
    "Explore founder-led add-on services from Think & Write Media & Publishing, including ghostwriting, editing, branding, cover design, Instagram growth, and author visibility campaigns.",
};

export default function AddOnServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Add-On Services"
        title="Founder-led services for publishing, branding, visibility, and launch support."
        description="Think & Write showcases specialty services from its founder ecosystem so authors can extend their publishing journey with focused creative, editorial, and brand support."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Founder Ecosystem</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              A connected publishing house built around complementary founder strengths.
            </h2>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-5xl gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
            <div className="rounded-lg border border-gold/22 bg-charcoal p-6 text-center shadow-luxury lg:col-start-2">
              <Crown className="mx-auto mb-4 h-7 w-7 text-gold" />
              <p className="font-semibold text-cream">{founders[0].name}</p>
              <p className="mt-1 text-sm text-cream/58">{founders[0].designation}</p>
            </div>
            <div className="rounded-lg border border-gold/22 bg-charcoal p-6 text-center shadow-luxury lg:col-start-1 lg:row-start-2">
              <Gem className="mx-auto mb-4 h-7 w-7 text-gold" />
              <p className="font-semibold text-cream">{founders[1].name}</p>
              <p className="mt-1 text-sm text-cream/58">{founders[1].designation}</p>
            </div>
            <div className="relative rounded-lg border border-gold bg-gold p-7 text-center text-black shadow-gold lg:col-start-2 lg:row-start-2">
              <Network className="mx-auto mb-4 h-8 w-8" />
              <p className="font-editorial text-2xl leading-tight">{brand.name}</p>
              <p className="mt-3 text-sm font-semibold">{brand.tagline}</p>
            </div>
            <div className="rounded-lg border border-gold/22 bg-charcoal p-6 text-center shadow-luxury lg:col-start-3 lg:row-start-2">
              <Gem className="mx-auto mb-4 h-7 w-7 text-gold" />
              <p className="font-semibold text-cream">{founders[2].name}</p>
              <p className="mt-1 text-sm text-cream/58">{founders[2].designation}</p>
            </div>
            <div className="rounded-lg border border-gold/22 bg-charcoal p-6 text-center shadow-luxury lg:col-start-2 lg:row-start-3">
              <Sparkles className="mx-auto mb-4 h-7 w-7 text-gold" />
              <p className="font-semibold text-cream">{founders[3].name}</p>
              <p className="mt-1 text-sm text-cream/58">{founders[3].designation}</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                Add-On Service Pricing
              </h2>
            </div>
            <ButtonLink href="/contact" variant="gold">
              Enquire Now
            </ButtonLink>
            <ButtonLink href={`mailto:${brand.publicEmail}`} variant="outline">
              Email Us
            </ButtonLink>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-gold/20 shadow-luxury">
            {addOnPricing.map((item, index) => (
              <div
                key={item.service}
                className="grid gap-3 border-b border-gold/12 bg-charcoal px-5 py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <p className="font-semibold text-cream">{item.service}</p>
                <p className="font-editorial text-2xl text-gold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Founder Profiles</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Expertise, responsibilities, and available services.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="rounded-lg border border-gold/18 bg-black/50 p-7 shadow-luxury">
                <h3 className="font-editorial text-3xl leading-tight text-cream">{founder.name}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{founder.designation}</p>
                <p className="mt-4 leading-7 text-cream/64">{founder.summary}</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-cream">Experience</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-cream/66">
                      {founder.expertise.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream">Responsibilities</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-cream/66">
                      {founder.responsibilities.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {founder.services.length > 0 ? (
                  <div className="mt-6">
                    <h4 className="font-semibold text-cream">Services</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {founder.services.map((service) => (
                        <span key={service} className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                          {service}
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

      <FinalCta
        title="Extend your publishing journey with focused founder services."
        description="Share your requirement and the team will guide you to the right add-on service."
      />
    </PageShell>
  );
}
