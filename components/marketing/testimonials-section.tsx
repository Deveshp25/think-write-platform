import { BookOpen, PlayCircle, Star, UserRound } from "lucide-react";
import { SectionLabel } from "@/components/marketing/site-frame";
import { testimonials } from "@/lib/content/site";

export function TestimonialsSection() {
  return (
    <section className="bg-black px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Author experiences prepared for stories, reviews, and future video testimonials.
            </h2>
          </div>
          <div className="rounded-lg border border-gold/18 bg-charcoal px-5 py-4 text-sm leading-6 text-cream/62 shadow-luxury">
            Video testimonial layout ready
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
            >
              <div className="grid grid-cols-[84px_1fr] gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-gold/22 bg-black/50">
                  <UserRound className="h-7 w-7 text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-cream">{testimonial.author}</p>
                  <p className="mt-1 text-sm leading-6 text-cream/58">{testimonial.book}</p>
                  <div className="mt-3 flex gap-1 text-gold" aria-label="Five star review">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-[92px_1fr] gap-4">
                <div className="flex min-h-32 items-center justify-center rounded-lg border border-gold/22 bg-black/50">
                  <BookOpen className="h-7 w-7 text-gold" />
                </div>
                <p className="text-sm leading-7 text-cream/66">{testimonial.review}</p>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-lg border border-gold/14 bg-black/38 p-4 text-sm text-cream/58">
                <PlayCircle className="h-5 w-5 text-gold" />
                <span>Future video testimonial placeholder</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
