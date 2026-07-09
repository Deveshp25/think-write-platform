import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { addOnServices } from "@/lib/content/site";

export function AddOnServicesSection() {
  return (
    <section className="bg-obsidian px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
              <Sparkles className="h-4 w-4" />
              Additional Founder Services
            </div>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Founder-led add-on services for authors, brands, and launch visibility.
            </h2>
          </div>
          <Link
            href="/add-on-services"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black shadow-gold transition hover:bg-gold-light"
          >
            Explore Add-On Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {addOnServices.map((service) => (
            <div
              key={service}
              className="rounded-lg border border-gold/18 bg-black/50 p-5 shadow-luxury transition hover:-translate-y-1 hover:border-gold/50"
            >
              <p className="font-semibold text-cream">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
