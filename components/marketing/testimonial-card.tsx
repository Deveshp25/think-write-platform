import Image from "next/image";
import { BookOpen, Quote, Star } from "lucide-react";

type Testimonial = {
  author: string;
  book: string;
  review: string;
  starRating: number | null;
  authorPhoto: string | null;
  bookCover: string | null;
  videoUrl: string | null;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-lg border border-gold/24 bg-charcoal p-6 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[140px_1fr]">
        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg border border-gold/22 bg-black/50">
          {testimonial.authorPhoto ? (
            <Image
              src={testimonial.authorPhoto}
              alt={testimonial.author}
              width={260}
              height={260}
              className="h-full w-full object-cover object-center"
            />
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-1 text-gold" aria-label={`${testimonial.starRating ?? 5} star review`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${testimonial.starRating && star <= testimonial.starRating ? "fill-current" : ""}`}
              />
            ))}
          </div>
          <Quote className="mb-4 h-8 w-8 text-gold" />
          <p className="font-editorial text-2xl leading-tight text-cream">{testimonial.author}</p>
          <p className="mt-1 text-sm leading-6 text-cream/58">{testimonial.book}</p>
        </div>
      </div>

      <p className="mt-8 whitespace-pre-line text-base leading-8 text-cream/72">{testimonial.review}</p>

      {testimonial.bookCover ? (
        <div className="mt-7 flex items-center gap-4 rounded-lg border border-gold/14 bg-black/38 p-4">
          <div className="flex h-24 w-16 items-center justify-center overflow-hidden rounded-lg border border-gold/22 bg-black/50">
            <Image src={testimonial.bookCover} alt={testimonial.book} width={128} height={192} className="h-full w-full object-cover" />
          </div>
          <BookOpen className="h-5 w-5 text-gold" />
        </div>
      ) : null}

      {testimonial.videoUrl ? (
        <div className="mt-6 rounded-lg border border-gold/14 bg-black/38 p-4 text-sm">
          <a href={testimonial.videoUrl} className="font-semibold text-gold hover:text-gold-light">
            Watch video testimonial
          </a>
        </div>
      ) : null}
    </article>
  );
}
