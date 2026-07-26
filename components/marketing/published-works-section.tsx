import { BookOpen, ExternalLink } from "lucide-react";
import { ButtonLink, SectionLabel } from "@/components/marketing/site-frame";
import { publishedWorks } from "@/lib/content/site";

export function PublishedWorksSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "mt-12" : "bg-obsidian px-4 py-24 text-cream sm:px-6 sm:py-32 lg:px-8"}>
      <div className={compact ? "" : "mx-auto max-w-7xl"}>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Published Works</SectionLabel>
            <h2 className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
              Published Works
            </h2>
          </div>
          {!compact ? (
            <ButtonLink href="/contact" variant="gold">
              Start Publishing
            </ButtonLink>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {publishedWorks.map((book) => (
            <article
              key={book.title}
              className="rounded-lg border border-gold/22 bg-black/50 p-6 shadow-luxury transition-all hover:-translate-y-1 hover:border-gold/45"
            >
              <div className="grid grid-cols-[88px_1fr] gap-5">
                <div className="flex aspect-[2/3] items-center justify-center rounded-lg border border-gold/28 bg-[radial-gradient(circle_at_35%_18%,rgba(240,216,121,0.18),transparent_34%),linear-gradient(145deg,#080706,#15110c_52%,#050505)]">
                  <BookOpen className="h-8 w-8 text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{book.genre}</p>
                  <h3 className="mt-3 font-editorial text-2xl leading-tight text-cream">{book.title}</h3>
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gold/28 bg-gold px-4 py-2 text-sm font-semibold text-black shadow-gold transition hover:bg-gold-light"
                  >
                    View on Amazon
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
