import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, GraduationCap, HeartHandshake, PenLine } from "lucide-react";
import {
  ButtonLink,
  FeatureCard,
  FinalCta,
  PageHero,
  PageShell,
  SectionLabel,
} from "@/components/marketing/site-frame";
import { PublishedWorksSection } from "@/components/marketing/published-works-section";
import { YoungAuthorApplicationForm } from "@/components/forms/young-author-application-form";
import { successStory } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Young Authors",
  description:
    "A parent-guided Young Author Programme helping students develop stories, confidence, and publishing readiness.",
};

const outcomes = [
  {
    title: "Book idea development",
    description: "Young writers learn how to shape imagination into a focused book concept.",
    icon: BookOpen,
  },
  {
    title: "Writing mentorship",
    description: "A structured rhythm helps students build confidence, discipline, and storytelling skill.",
    icon: PenLine,
  },
  {
    title: "Parent-guided process",
    description: "Parents receive clear checkpoints, expectations, and communication throughout the journey.",
    icon: HeartHandshake,
  },
  {
    title: "Publishing confidence",
    description: "The programme builds creative pride and introduces students to professional publishing thinking.",
    icon: GraduationCap,
  },
];

const steps = ["Apply", "Review", "Parent Consultation", "Acceptance", "Programme Start"];

export default function YoungAuthorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Young Authors"
        title="Helping young writers turn imagination into published confidence."
        description="A parent-guided programme for students aged 8-18 who want to develop a book idea, strengthen storytelling skills, and experience the pride of becoming an author."
      />

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <SectionLabel>Programme Outcomes</SectionLabel>
              <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
                Built for creativity, confidence, and guided achievement.
              </h2>
              <p className="mt-6 text-lg leading-8 text-cream/64">
                The programme balances imagination with structure so young writers
                feel supported while developing a serious creative project.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="gold">
                  Apply Through Consultation
                </ButtonLink>
              </div>
            </div>

            <article className="rounded-lg border border-gold/24 bg-charcoal p-7 shadow-luxury">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {successStory.title}
              </p>
              <h3 className="mt-3 font-editorial text-3xl leading-tight text-cream">
                {successStory.author}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  Age: {successStory.age}
                </span>
                <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  {successStory.startedWriting}
                </span>
              </div>
              <p className="mt-4 leading-7 text-cream/64">{successStory.description}</p>
              <div className="mt-6 overflow-hidden rounded-lg border border-gold/18 bg-black/40">
                <Image
                  src={successStory.imagePath}
                  alt={successStory.author}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full bg-black object-contain object-left"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {successStory.books.map((book) => (
                  <div key={book} className="rounded-lg border border-gold/18 bg-black/40 p-5">
                    <BookOpen className="mb-4 h-6 w-6 text-gold" />
                    <p className="font-editorial text-xl leading-tight text-cream">{book}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <FeatureCard key={outcome.title} {...outcome} />
            ))}
          </div>

          <PublishedWorksSection compact />
        </div>
      </section>

      <section className="bg-obsidian px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Application Flow</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              A clear pathway for students and parents.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-lg border border-gold/18 bg-black/50 p-6 shadow-luxury">
                <span className="font-editorial text-4xl text-gold">{index + 1}</span>
                <h3 className="mt-5 font-semibold text-cream">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Apply</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Submit a Young Author application.
            </h2>
            <p className="mt-6 text-lg leading-8 text-cream/64">
              Parents can share the student's details, book idea, and goals so
              the team can review fit and recommend next steps.
            </p>
          </div>
          <YoungAuthorApplicationForm />
        </div>
      </section>

      <FinalCta
        title="Begin your child's author journey."
        description="Book a parent consultation to understand fit, expectations, and next steps."
      />
    </PageShell>
  );
}
