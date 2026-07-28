import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Send, Sparkles, Youtube } from "lucide-react";
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
  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund & Cancellation Policy", href: "/refund-policy" },
    { label: "Shipping & Delivery Policy", href: "/shipping-policy" },
    { label: "Legal Information", href: "/legal-information" },
    { label: "Business Registration", href: "/business-registration" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Young Authors", href: "/young-authors" },
    { label: "Published Books", href: "/published-books" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <footer className="bg-black px-4 py-14 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-gold/15 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <BrandLogo imageClassName="w-56" />
          <p className="mt-4 max-w-md text-sm leading-6 text-cream/58">{brand.tagline}</p>
          <PublicEmailLinks className="mt-4" />
          <div className="mt-6 grid gap-2 text-sm leading-6 text-cream/50">
            <p>Company Registration: INDO260702SE000362</p>
            <p>GST: To be updated</p>
            <p>CIN: Not applicable / To be updated</p>
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
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gold">
                  {item.label}
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
        </div>
        <div className="lg:col-span-2 border-t border-gold/12 pt-6 text-sm text-cream/46">
          <p>Copyright 2026 {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function PublicEmailLinks({
  className,
  linkClassName,
}: {
  className?: string;
  linkClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {brand.publicEmails.map((email) => (
        <a
          key={email}
          href={`mailto:${email}`}
          className={cn("inline-flex items-center gap-2 break-words text-sm font-medium text-gold hover:text-gold-light", linkClassName)}
        >
          <Mail className="h-4 w-4 shrink-0" />
          {email}
        </a>
      ))}
    </div>
  );
}


export function SocialFollowSection() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/thinkwritemediapublishing?igsh=NzBuZmF3c2Y5dWo3&utm_source=qr",
      icon: Instagram,
      active: true,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/thinkandwrite.in/",
      icon: Facebook,
      active: true,
    },
    { label: "LinkedIn", href: "#", icon: Linkedin, active: false },
    { label: "YouTube", href: "#", icon: Youtube, active: false },
  ];

  return (
    <section className="bg-obsidian px-4 py-16 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-lg border border-gold/18 bg-black/50 p-6 shadow-luxury sm:p-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <SectionLabel>Follow Think & Write</SectionLabel>
          <p className="text-lg leading-8 text-cream/68">
            Stay connected for publishing updates, author stories, book launches, and writing insights.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            if (!item.active) {
              return (
                <span
                  key={item.label}
                  title={`${item.label} coming soon`}
                  aria-label={`${item.label} coming soon`}
                  className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-gold/18 bg-black/35 px-5 py-3 text-sm font-semibold text-cream/42 shadow-luxury"
                >
                  <Icon className="h-4 w-4 text-gold/55" />
                  {item.label}
                  <span className="text-xs font-medium text-cream/36">Coming Soon</span>
                </span>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Think & Write on ${item.label}`}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gold/28 bg-gold px-5 py-3 text-sm font-semibold text-black shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Icon className="h-4 w-4" />
                {item.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-cream">
      <SiteHeader />
      {children}
      <SocialFollowSection />
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
          <ButtonLink href={`mailto:${brand.publicEmail}`} variant="outline">
            Email Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
