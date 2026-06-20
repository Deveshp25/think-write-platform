"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Award,
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
  Star,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Book Writing",
    description: "Structured writing support for authors who need clarity, rhythm, and momentum.",
    icon: PenLine,
  },
  {
    title: "Ghostwriting",
    description: "Your voice, story, and expertise shaped into a compelling manuscript.",
    icon: Feather,
  },
  {
    title: "Editing & Proofreading",
    description: "Editorial refinement that improves flow, credibility, precision, and polish.",
    icon: FileText,
  },
  {
    title: "Cover Design",
    description: "Premium book covers built for genre fit, shelf appeal, and digital discovery.",
    icon: BookOpen,
  },
  {
    title: "Amazon Publishing",
    description: "End-to-end guidance for formatting, listing, publishing, and launch readiness.",
    icon: BadgeCheck,
  },
  {
    title: "Author Brand Growth",
    description: "Instagram, PR, and positioning systems that turn authors into visible brands.",
    icon: Megaphone,
  },
];

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Young Authors", href: "/young-authors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const trustMetrics = [
  { value: "10+", label: "author services" },
  { value: "4", label: "publishing paths" },
  { value: "1:1", label: "strategy calls" },
  { value: "360", label: "launch support" },
];

const whyReasons = [
  {
    title: "Strategic positioning",
    description: "Your book direction, audience, offer, and launch angle are clarified before production begins.",
    icon: ShieldCheck,
  },
  {
    title: "Editorial credibility",
    description: "Every manuscript is shaped for structure, voice, reader trust, and professional authority.",
    icon: Award,
  },
  {
    title: "Launch thinking",
    description: "Publishing support goes beyond upload day with brand, PR, Instagram, and visibility planning.",
    icon: Megaphone,
  },
  {
    title: "Human guidance",
    description: "Authors receive calm, high-touch direction from idea stage through book launch decisions.",
    icon: Users,
  },
];

const packages = [
  {
    name: "Launchpad",
    price: "Rs. 14,999",
    label: "For first-time authors",
    features: ["Publishing guidance", "Manuscript review", "Amazon launch support"],
  },
  {
    name: "Author Pro",
    price: "Rs. 34,999",
    label: "Most chosen",
    featured: true,
    features: ["Writing support", "Editing direction", "Brand launch planning"],
  },
  {
    name: "Legacy Author",
    price: "Rs. 74,999",
    label: "For authority builders",
    features: ["Ghostwriting strategy", "PR positioning", "Premium launch roadmap"],
  },
  {
    name: "Young Author",
    price: "Rs. 19,999",
    label: "For young writers",
    features: ["Mentorship", "Parent-guided process", "Publishing confidence"],
  },
];

const journey = [
  "Idea Discovery",
  "Book Strategy",
  "Writing",
  "Editing",
  "Design",
  "Publishing",
  "Launch",
  "Legacy",
];

const testimonials = [
  {
    quote:
      "They helped me turn years of scattered ideas into a book that finally felt worthy of my name.",
    name: "Founder Author",
    role: "Legacy Author client",
  },
  {
    quote:
      "The process felt premium, calm, and deeply structured from the first call to launch week.",
    name: "First-Time Author",
    role: "Author Pro client",
  },
  {
    quote:
      "My child learned how to think like a storyteller and finished with confidence we could see.",
    name: "Parent",
    role: "Young Author Programme",
  },
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
      "Yes. The platform supports Amazon publishing preparation, listing guidance, launch planning, and author positioning.",
  },
  {
    question: "Is the Young Author Programme parent-guided?",
    answer:
      "Yes. Parent consent, communication, and review checkpoints are part of the Young Author Programme experience.",
  },
  {
    question: "Which package should I choose?",
    answer:
      "Launchpad fits early publishing support, Author Pro fits serious authors, and Legacy Author fits professionals building authority.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
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
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold transition-colors hover:bg-[#e2c250] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
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
      className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      {children}
    </motion.a>
  );
}

function ParticleField() {
  const shouldReduceMotion = useReducedMotion();
  const particles = [
    { left: "9%", top: "18%", size: 3, delay: 0 },
    { left: "18%", top: "74%", size: 2, delay: 0.8 },
    { left: "36%", top: "22%", size: 2, delay: 1.4 },
    { left: "52%", top: "78%", size: 3, delay: 0.4 },
    { left: "69%", top: "15%", size: 2, delay: 1.1 },
    { left: "84%", top: "62%", size: 3, delay: 0.6 },
    { left: "92%", top: "28%", size: 2, delay: 1.7 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-gold/55 shadow-[0_0_18px_rgba(212,175,55,0.42)]"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.16, 0.58, 0.16],
                  y: [0, -18, 0],
                }
          }
          transition={{
            duration: 5.8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function HardcoverBook() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 22, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 22, mass: 0.35 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [9, -9]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -44]);
  const glowY = useTransform(scrollYProgress, [0, 0.6], [0, 28]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      style={{ y }}
      className="book-spine relative mx-auto hidden h-[560px] w-[500px] lg:block"
      aria-hidden="true"
    >
      <motion.div
        style={{ y: glowY }}
        className="gold-glow absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
      />
      <motion.div
        className="hardcover-book absolute left-1/2 top-1/2 h-[380px] w-[292px] -translate-x-1/2 -translate-y-1/2"
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
        }}
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="book-back-face absolute inset-0 rounded-lg bg-[#07101f] shadow-[28px_34px_90px_rgba(0,0,0,0.38)]" />
        <div className="book-pages-face absolute left-[270px] top-4 h-[352px] w-[54px] rounded-r-lg border border-white/25 bg-gradient-to-r from-[#F8F5EE] via-white to-[#D8DFEA]">
          <div className="absolute inset-y-7 left-3 w-px bg-navy/10" />
          <div className="absolute inset-y-10 left-6 w-px bg-navy/8" />
          <div className="absolute inset-y-12 left-9 w-px bg-navy/8" />
        </div>
        <div className="book-cover-face absolute inset-0 overflow-hidden rounded-lg border border-gold/38 bg-navy shadow-[0_36px_100px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-b from-[#f3df86] via-gold to-[#8e7426]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_38%,rgba(212,175,55,0.12))]" />
          <div className="absolute left-20 top-16 h-px w-28 bg-gold/74" />
          <div className="absolute left-20 top-24 h-px w-36 bg-white/24" />
          <div className="absolute bottom-20 left-20 right-10 rounded-lg border border-gold/35 bg-white/8 p-5 backdrop-blur">
            <p className="font-editorial text-3xl leading-tight text-white">Published Legacies</p>
            <p className="mt-3 text-xs font-medium uppercase text-gold">Think & Write</p>
          </div>
          <div className="absolute bottom-8 left-20 h-px w-24 bg-gold/70" />
        </div>
      </motion.div>
      <div className="absolute bottom-14 left-1/2 h-12 w-80 -translate-x-1/2 rounded-full bg-black/30 blur-2xl" />
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-navy">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/72 backdrop-blur-2xl">
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

      <section className="relative min-h-screen bg-navy-radial pt-28 text-white sm:pt-32">
        <ParticleField />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
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
              className="max-w-4xl font-editorial text-5xl leading-[0.98] text-white sm:text-6xl lg:text-[86px]"
            >
              Turning Ideas into{" "}
              <span className="gold-gradient-text">Published Legacies</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl sm:leading-9"
            >
              Your story deserves more than a document. We help authors shape
              their ideas into beautifully written books, credible personal
              brands, and launches that feel worthy of the life behind them.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact">Book Free Consultation</PrimaryButton>
              <SecondaryButton href="/packages">View Packages</SecondaryButton>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm text-white/72 sm:grid-cols-4"
            >
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="glass-panel rounded-lg px-4 py-4">
                  <div className="font-editorial text-3xl leading-none text-white">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase text-white/58">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <HardcoverBook />
        </div>
      </section>

      <section id="why" className="bg-premium-surface py-24 sm:py-32">
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
              <h2 className="max-w-xl font-editorial text-4xl leading-tight sm:text-5xl">
                A publishing house experience with startup-grade execution.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-navy/64">
                Built for authors who want a refined book, a credible public
                presence, and a process that feels considered at every step.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
              {whyReasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-navy/8 bg-white/88 p-6 shadow-soft-card backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/30"
                >
                  <item.icon className="mb-5 h-6 w-6 text-gold" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-navy/64">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Services Overview</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Everything an author needs to move from idea to impact.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-lg border border-navy/8 bg-white p-7 shadow-soft-card transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-premium"
              >
                <service.icon className="mb-6 h-7 w-7 text-gold" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-navy/64">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="relative bg-navy py-24 text-white sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Publishing Packages</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
                Choose the level of support your legacy deserves.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/68">
              Clear starting points for first-time authors, serious creators,
              professionals, founders, and young writers.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -8 }}
                className={cn(
                  "rounded-lg border p-7",
                  item.featured
                    ? "border-gold bg-white text-navy shadow-gold"
                    : "glass-panel text-white",
                )}
              >
                <div
                  className={cn(
                    "mb-6 inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                    item.featured ? "bg-gold/16 text-navy" : "bg-white/10 text-gold",
                  )}
                >
                  {item.label}
                </div>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-4 font-editorial text-4xl">{item.price}</p>
                <div className="mt-7 space-y-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm leading-6">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span className={item.featured ? "text-navy/72" : "text-white/72"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="young-author" className="relative bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Young Author Programme</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Helping young writers turn imagination into a published book.
            </h2>
            <p className="mt-6 text-lg leading-8 text-navy/68">
              A structured, parent-guided programme for students who are ready
              to develop storytelling confidence, creative discipline, and the
              pride of becoming a published author.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/young-authors">Apply Now</PrimaryButton>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-navy/12 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-premium"
              >
                Book Parent Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {["Idea development", "Writing mentorship", "Editing support", "Publishing guidance"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-navy/8 bg-white p-6 shadow-soft-card transition-all hover:-translate-y-1 hover:border-gold/30">
                  <BookOpen className="mb-4 h-6 w-6 text-gold" />
                  <p className="font-semibold">{item}</p>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Publishing Journey</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              A calm path from first idea to public launch.
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
                className="relative rounded-lg border border-navy/8 bg-white p-6 shadow-soft-card"
              >
                <span className="font-editorial text-4xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Authors remember the process as much as the book.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.figure
                key={testimonial.name}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-lg p-7"
              >
                <div className="mb-6 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg leading-8 text-white/84">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-white/56">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Questions authors ask before beginning.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-navy/8 bg-white p-6 shadow-soft-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-gold transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-7 text-navy/66">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-navy-radial px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <CalendarCheck className="mx-auto mb-6 h-10 w-10 text-gold" />
          <h2 className="font-editorial text-4xl leading-tight sm:text-6xl">
            Your book is not just a project. It is your legacy.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Begin with a consultation and leave with a clearer publishing path,
            stronger positioning, and the next step toward becoming an author.
          </p>
          <div className="mt-9">
            <PrimaryButton href="/contact" className="px-8">Book Free Consultation</PrimaryButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
