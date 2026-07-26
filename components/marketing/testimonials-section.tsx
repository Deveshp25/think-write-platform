import { SectionLabel } from "@/components/marketing/site-frame";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { testimonials } from "@/lib/content/site";

export function TestimonialsSection() {
  return (
    <section className="bg-black px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Featured author testimonial.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
