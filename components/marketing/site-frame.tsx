import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Young Authors", href: "/young-authors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/92 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-gold/12 font-editorial text-xl text-gold">
            T
          </span>
          <span className="text-sm font-semibold sm:text-base">Think & Write</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} className="transition-colors hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition-colors hover:bg-ivory"
        >
          Book Free Consultation
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Think & Write Media & Publishing Pvt. Ltd.</p>
          <p className="mt-2 text-sm text-white/56">Turning Ideas into Published Legacies</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/64">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-navy">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
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
    <section className="relative overflow-hidden bg-navy-radial px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="gold-glow absolute right-[-140px] top-12 hidden h-96 w-96 rounded-full blur-2xl lg:block" />
      <div className="relative mx-auto max-w-5xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="max-w-4xl font-editorial text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
          {description}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="gold">
            Book Free Consultation
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
        variant === "gold" && "bg-gold text-navy shadow-gold hover:bg-[#e2c250]",
        variant === "glass" &&
          "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/16",
        variant === "outline" &&
          "border border-navy/12 bg-white text-navy shadow-soft-card hover:border-gold/35",
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
  tone = "light",
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
          "border-navy/8 bg-white shadow-soft-card hover:border-gold/35 hover:shadow-premium",
        tone === "dark" && "glass-panel text-white",
      )}
    >
      <Icon className="mb-6 h-7 w-7 text-gold" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className={cn("mt-3 leading-7", tone === "light" ? "text-navy/64" : "text-white/68")}>
        {description}
      </p>
    </div>
  );
}

export function FinalCta({
  title = "Ready to shape your book into a legacy?",
  description = "Start with a free consultation and leave with a clearer publishing path.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-radial px-4 py-20 text-center text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-editorial text-4xl leading-tight sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">{description}</p>
        <div className="mt-9">
          <ButtonLink href="/contact" variant="gold">
            Book Free Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
