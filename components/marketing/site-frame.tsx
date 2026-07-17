import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Send, Sparkles, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/marketing/brand-logo";
import { brand, navigation } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-black/90 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <BrandLogo imageClassName="w-24 sm:w-28" priority />

        <div className="hidden items-center gap-4 text-xs font-medium text-cream/70 xl:flex xl:text-sm">
          {navigation.map((item) => (
            <Link key={item.href} className="transition-colors hover:text-gold" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold px-4 py-2 text-xs font-semibold text-black shadow-gold transition hover:bg-gold-light sm:text-sm"
        >
          Book Consultation
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const policies = [
    "Privacy Policy",
    "Refund Policy",
    "Terms & Conditions",
    "Shipping Policy",
  ];
  const socialLinks = [
    { label: "Instagram", icon: Instagram },
    { label: "LinkedIn", icon: Linkedin },
    { label: "YouTube", icon: Youtube },
  ];

  return (
    <footer className="bg-black px-4 py-14 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-gold/15 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <BrandLogo imageClassName="w-56" />
          <p className="mt-4 max-w-md text-sm leading-6 text-cream/58">{brand.tagline}</p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
          >
            <Mail className="h-4 w-4" />
            {brand.email}
          </a>
          <div className="mt-6 grid gap-2 text-sm leading-6 text-cream/50">
            <p>Company Registration: To be updated</p>
            <p>GST: To be updated</p>
            <p>CIN: To be updated</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
            <div className="mt-4 grid gap-3 text-sm text-cream/64 sm:grid-cols-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Legal</h3>
            <div className="mt-4 grid gap-3 text-sm text-cream/64">
              {policies.map((policy) => (
                <Link key={policy} href="#" className="hover:text-gold">
                  {policy}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-gold/18 bg-charcoal p-5 shadow-luxury">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Newsletter</h3>
            <p className="mt-3 text-sm leading-6 text-cream/58">
              Publishing insights, launch notes, and author growth ideas.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                aria-label="Newsletter email"
                type="email"
                placeholder="Email address"
                className="min-h-11 min-w-0 flex-1 rounded-lg border border-gold/20 bg-black/50 px-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-gold"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-black shadow-gold transition hover:bg-gold-light"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="rounded-lg border border-gold/18 bg-charcoal p-5 shadow-luxury">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Visit</h3>
            <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-cream/58">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <p>Google Maps location placeholder</p>
            </div>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/24 bg-black/40 text-gold transition hover:border-gold/55 hover:bg-gold/10"
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-cream">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-luxury-radial px-4 py-20 text-cream sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="gold-glow absolute right-[-180px] top-10 hidden h-[28rem] w-[28rem] rounded-full blur-2xl lg:block" />
      <div className="relative mx-auto max-w-5xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="max-w-4xl font-editorial text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/70 sm:text-xl sm:leading-9">
          {description}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="gold">
            Book Consultation
          </ButtonLink>
          <ButtonLink href="/packages" variant="glass">
            View Packages
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "gold",
  className,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "gold" | "glass" | "outline";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold",
        variant === "gold" && "bg-gold text-black shadow-gold hover:bg-gold-light",
        variant === "glass" &&
          "border border-gold/25 bg-white/8 text-cream backdrop-blur hover:border-gold/45 hover:bg-white/12",
        variant === "outline" &&
          "border border-gold/28 bg-black/40 text-cream shadow-luxury hover:border-gold/55",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone = "dark",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-7 transition-all hover:-translate-y-1",
        tone === "light" &&
          "border-gold/18 bg-charcoal text-cream shadow-luxury hover:border-gold/45",
        tone === "dark" && "border-gold/18 bg-black/48 text-cream shadow-luxury hover:border-gold/45",
      )}
    >
      <Icon className="mb-6 h-7 w-7 text-gold" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-cream/64">{description}</p>
    </div>
  );
}

export function FinalCta({
  title = "Ready to shape your book into a legacy?",
  description = "Start with a consultation and leave with a clearer publishing path.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-luxury-radial px-4 py-20 text-center text-cream sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-editorial text-4xl leading-tight sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/70">{description}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="gold">
            Book Consultation
          </ButtonLink>
          <ButtonLink href={`mailto:${brand.email}`} variant="outline">
            Email Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
