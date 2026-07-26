"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronDown,
  Feather,
  FileText,
  Megaphone,
  PenLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { AddOnServicesSection } from "@/components/marketing/add-on-services-section";
import { BrandLogo } from "@/components/marketing/brand-logo";
import { PublishedWorksSection } from "@/components/marketing/published-works-section";
import { PublicEmailLinks, SiteFooter } from "@/components/marketing/site-frame";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { brand, coreServices, navigation, packages, successStory } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const serviceIcons = [PenLine, Feather, FileText, BookOpen, BadgeCheck, Megaphone];

const whyReasons = [
  {
    title: "Editorial clarity",
    description: "Books are shaped for structure, voice, reader trust, and professional polish.",
    icon: ShieldCheck,
  },
  {
    title: "Publishing readiness",
    description: "Authors receive practical support for formatting, ISBN assistance, Amazon setup, and launch assets.",
    icon: BookOpen,
  },
  {
    title: "Brand visibility",
    description: "Design, author positioning, social media creatives, and visibility campaigns work together.",
    icon: Megaphone,
  },
  {
    title: "Human guidance",
    description: "The process is built around direct consultation, author mentorship, and thoughtful review.",
    icon: Users,
  },
];

const journey = ["Idea Discovery", "Book Strategy", "Writing", "Editing", "Design", "Publishing", "Launch"];

const heroHighlights = [
  "Publishing",
  "Branding",
  "Author Growth",
  "Legacy Creation",
];

const faqs = [
  {
    question: "Do I need a completed manuscript?",
    answer:
      "No. Think & Write supports authors from idea stage, outline stage, partial draft, and completed manuscript stage.",
  },
  {
    question: "Can you help with publishing on Amazon?",
    answer:
      "Yes. The platform supports Amazon Kindle and paperback publishing preparation, listing guidance, and launch readiness.",
  },
  {
    question: "Is the Young Author Programme parent-guided?",
    answer:
      "Yes. Parent communication and review checkpoints are part of the Young Author Programme experience.",
  },
  {
    question: "Which package should I choose?",
    answer:
      "Launchpad fits debut authors, Author Pro fits authors seeking visibility, Legacy Author fits authority-building authors, and Young Author Programme fits writers aged 8-18.",
  },
  {
    question: "Who owns copyright?",
    answer:
      "The author retains copyright ownership unless a separate written agreement states otherwise.",
  },
  {
    question: "How do royalties work?",
    answer:
      "Royalties depend on the publishing platform, format, print cost, distribution settings, and the final sales channel.",
  },
  {
    question: "What is the publishing timeline?",
    answer:
      "Timeline depends on manuscript readiness, editing depth, design rounds, formatting, approvals, and launch preparation.",
  },
  {
    question: "Can you support international publishing?",
    answer:
      "Yes. The team can guide authors toward Amazon and global distribution readiness based on the chosen package.",
  },
  {
    question: "Will my book be available on Amazon?",
    answer:
      "Amazon Kindle and paperback availability can be supported through publishing preparation, listing guidance, and setup assistance.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  className,
  href = "/contact",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black shadow-gold transition-colors hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

function SecondaryButton({
  children,
  href = "/packages",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gold/30 bg-white/8 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:border-gold/55 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-gold/60"
    >
      {children}
    </motion.a>
  );
}

function PublishingHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="group relative mx-auto h-[480px] w-full max-w-xl sm:h-[560px] lg:h-[620px] lg:max-w-none"
      aria-label="Premium publishing visual"
    >
      <div className="absolute inset-x-4 top-12 h-[24rem] rounded-full bg-gold/20 blur-3xl sm:inset-x-8 sm:top-16 sm:h-[30rem]" />
      <div className="absolute bottom-8 left-4 right-4 h-24 rounded-full bg-black/70 blur-2xl" />
      <div className="absolute bottom-14 left-1/2 h-12 w-[82%] -translate-x-1/2 rounded-full bg-gold/22 blur-xl" />

      <div className="relative mx-auto mt-5 h-[390px] w-[280px] sm:mt-8 sm:h-[470px] sm:w-[336px] lg:mt-10 lg:h-[520px] lg:w-[372px]">
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="relative h-full w-full"
        >
        <div
          className="absolute inset-0 rounded-r-xl rounded-l-md border border-gold/45 bg-gradient-to-br from-gold-light via-gold to-bronze p-3 shadow-gold transition-shadow duration-500 group-hover:shadow-[0_28px_90px_rgba(212,175,55,0.32)]"
          style={{
            transform: "perspective(1100px) rotateY(-18deg) rotateX(5deg)",
            transformOrigin: "center",
          }}
        >
          <div className="relative h-full overflow-hidden rounded-r-lg rounded-l-sm border border-gold/34 bg-[radial-gradient(circle_at_30%_18%,rgba(240,216,121,0.24),transparent_34%),linear-gradient(145deg,#070604_0%,#15110c_48%,#050505_100%)] p-7 shadow-luxury sm:p-9">
            <div className="absolute inset-y-0 left-0 w-7 border-r border-gold/28 bg-gradient-to-r from-black via-bronze/36 to-transparent" />
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-gold via-gold-light to-transparent" />
            <div className="absolute -right-14 top-12 h-40 w-40 rounded-full bg-gold/16 blur-2xl" />
            <div className="relative z-10 flex h-full flex-col justify-between pl-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Premium Publishing
                </p>
                <h3 className="mt-8 font-editorial text-5xl leading-[0.95] text-cream sm:text-6xl">
                  Think
                  <span className="block gold-gradient-text">& Write</span>
                </h3>
              </div>

              <div>
                <div className="mb-7 h-px w-24 bg-gold/80" />
                <p className="max-w-[13rem] font-editorial text-2xl leading-tight text-cream sm:text-3xl">
                  Turning Ideas into Published Legacies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute left-[calc(100%-42px)] top-8 h-[calc(100%-42px)] w-20 rounded-r-xl border border-l-0 border-gold/38 bg-gradient-to-r from-bronze via-charcoal to-black shadow-luxury"
          style={{
            transform: "perspective(1100px) rotateY(-18deg) rotateX(5deg)",
            transformOrigin: "left",
          }}
        />
        <div
          className="absolute -bottom-5 left-10 h-12 w-[82%] rounded-full bg-black/70 blur-xl"
          style={{
            transform: "perspective(900px) rotateX(66deg)",
          }}
        />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {heroHighlights.map((item, index) => {
          const positions = [
            "left-3 top-20 sm:left-5 sm:top-28",
            "right-2 top-32 sm:right-4 sm:top-40",
            "left-4 bottom-28 sm:left-8 sm:bottom-36",
            "right-4 bottom-20 sm:right-8 sm:bottom-28",
          ];

          return (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 + index * 0.08, duration: 0.45 }}
              className={`absolute ${positions[index]} rounded-full border border-gold/28 bg-black/72 px-4 py-2 text-xs font-semibold text-gold shadow-luxury backdrop-blur-md sm:px-5 sm:text-sm`}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-black text-cream">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gold/15 bg-black/86 backdrop-blur-2xl">
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
            className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold px-4 py-2 text-xs font-semibold text-black shadow-gold transition-colors hover:bg-gold-light sm:text-sm"
          >
            Book Consultation
          </Link>
        </nav>
      </header>

      <section className="relative min-h-screen bg-luxury-radial pt-28 text-cream sm:pt-32">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="gold-glow absolute right-[-220px] top-24 hidden h-[34rem] w-[34rem] rounded-full blur-2xl lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Premium publishing for ambitious authors</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl font-editorial text-5xl leading-[0.98] text-cream sm:text-6xl lg:text-[86px]"
            >
              Turning Ideas into <span className="gold-gradient-text">Published Legacies</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-cream/72 sm:text-xl sm:leading-9"
            >
              Think & Write Media & Publishing helps authors shape manuscripts,
              publishing assets, author branding, and launch visibility with a
              premium black and gold publishing experience.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact">Book Consultation</PrimaryButton>
              <SecondaryButton href="/packages">View Packages</SecondaryButton>
            </motion.div>
          </motion.div>

          <PublishingHeroVisual />
        </div>
      </section>

      <section className="bg-premium-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
            className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why Think & Write</SectionLabel>
              <h2 className="max-w-xl font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                Publishing, branding, and legacy creation under one refined house.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-cream/64">
                The company combines editorial guidance, publishing execution,
                founder-led creative services, and launch assets for authors at
                different stages.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
              {whyReasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-gold/18 bg-black/45 p-6 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
                >
                  <item.icon className="mb-5 h-6 w-6 text-gold" />
                  <h3 className="text-lg font-semibold text-cream">{item.title}</h3>
                  <p className="mt-3 leading-7 text-cream/64">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Services Overview</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Everything an author needs to move from manuscript to market.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => {
              const Icon = serviceIcons[index] ?? BookOpen;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-lg border border-gold/18 bg-charcoal p-7 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
                >
                  <Icon className="mb-6 h-7 w-7 text-gold" />
                  <h3 className="text-xl font-semibold text-cream">{service.title}</h3>
                  <p className="mt-3 leading-7 text-cream/64">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AddOnServicesSection />

      <section id="packages" className="relative bg-obsidian py-24 text-cream sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Publishing Packages</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                Choose the publishing path that matches your ambition.
              </h2>
            </div>
            <Link className="text-sm font-semibold text-gold hover:text-gold-light" href="/packages">
              Compare full package benefits
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -8 }}
                className={cn(
                  "rounded-lg border p-7 shadow-luxury",
                  item.featured
                    ? "border-gold bg-gold text-black"
                    : "border-gold/18 bg-black/48 text-cream",
                )}
              >
                <div
                  className={cn(
                    "mb-6 inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                    item.featured ? "bg-black/12 text-black" : "bg-gold/10 text-gold",
                  )}
                >
                  {item.featured ? "Flagship Package" : item.idealFor}
                </div>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-4 font-editorial text-4xl">{item.price}</p>
                <div className="mt-7 space-y-4">
                  {item.includes.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm leading-6">
                      <Check className={cn("mt-1 h-4 w-4 shrink-0", item.featured ? "text-black" : "text-gold")} />
                      <span className={item.featured ? "text-black/72" : "text-cream/72"}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="young-author" className="relative bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <SectionLabel>Young Author Programme</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Helping young writers turn imagination into published confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-cream/68">
              A parent-guided programme for writers aged 8-18, built around
              publishing, school launch assets, author posters, and media coverage drafts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/young-authors">Apply Now</PrimaryButton>
              <SecondaryButton href="/contact">Book Parent Consultation</SecondaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {["Publishing", "Author Certificate", "School Launch Toolkit", "Media Coverage Draft"].map((item) => (
              <div key={item} className="rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45">
                <BookOpen className="mb-4 h-6 w-6 text-gold" />
                <p className="font-semibold text-cream">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-obsidian py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <SectionLabel>{successStory.title}</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                {successStory.author}
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  Age: {successStory.age}
                </span>
                <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  {successStory.startedWriting}
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-cream/68">{successStory.description}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-gold/24 bg-black/50 shadow-luxury sm:col-span-2">
                <Image
                  src={successStory.imagePath}
                  alt={successStory.author}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
              {successStory.books.map((book) => (
                <div key={book} className="rounded-lg border border-gold/24 bg-black/50 p-7 shadow-luxury">
                  <BookOpen className="mb-6 h-7 w-7 text-gold" />
                  <p className="font-editorial text-2xl leading-tight text-cream">{book}</p>
                </div>
              ))}
            </div>
          </div>

          <PublishedWorksSection compact />
        </div>
      </section>

      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Publishing Journey</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              A clear path from first idea to public launch.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="relative rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury"
              >
                <span className="font-editorial text-4xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-5 font-semibold text-cream">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section id="faq" className="bg-obsidian py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Questions authors ask before beginning.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-gold/18 bg-black/50 p-6 shadow-luxury">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-cream">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-gold transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-7 text-cream/66">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-luxury-radial px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <CalendarCheck className="mx-auto mb-6 h-10 w-10 text-gold" />
          <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-6xl">
            Your book is not just a project. It is your legacy.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/72">
            Begin with a consultation and leave with a clearer publishing path,
            stronger positioning, and the next step toward becoming an author.
          </p>
          <div className="mt-9">
            <PrimaryButton href="/contact" className="px-8">Book Consultation</PrimaryButton>
          </div>
          <PublicEmailLinks className="mt-5 items-center" linkClassName="font-semibold" />
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}
