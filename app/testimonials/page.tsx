import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/marketing/site-frame";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { testimonials } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Genuine author testimonials for Think & Write Media & Publishing.",
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="Genuine author testimonials."
        description="A dedicated testimonial space for approved author stories, designed so future testimonials can be added cleanly."
      />

      <section className="bg-black px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
