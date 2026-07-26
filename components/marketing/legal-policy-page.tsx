import { PageShell } from "@/components/marketing/site-frame";
import { legalPages, type LegalPageSlug } from "@/lib/content/legal";

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-cream">{part.slice(2, -2)}</strong>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={index} href={link[2]} className="text-gold hover:text-gold-light">
          {link[1]}
        </a>
      );
    }

    return part;
  });
}

function renderLegalLines(lines: string[]) {
  const elements: React.ReactNode[] = [];
  let bullets: string[] = [];

  function flushBullets() {
    if (bullets.length === 0) {
      return;
    }

    elements.push(
      <ul key={`ul-${elements.length}`} className="mt-4 list-disc space-y-2 pl-6 leading-7 text-cream/68">
        {bullets.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  }

  lines.forEach((line) => {
    if (line.startsWith("* ")) {
      bullets.push(line.slice(2));
      return;
    }

    flushBullets();

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={line} className="font-editorial text-4xl leading-tight text-cream sm:text-5xl">
          {renderInline(line.slice(2))}
        </h1>,
      );
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={line} className="mt-10 font-editorial text-3xl leading-tight text-cream">
          {renderInline(line.slice(3))}
        </h2>,
      );
      return;
    }

    elements.push(
      <p key={`${line}-${elements.length}`} className="mt-4 leading-8 text-cream/68">
        {renderInline(line)}
      </p>,
    );
  });

  flushBullets();
  return elements;
}

export function LegalPolicyPage({ slug }: { slug: LegalPageSlug }) {
  const page = legalPages[slug];

  return (
    <PageShell>
      <section className="bg-black px-4 py-20 text-cream sm:px-6 sm:py-28 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-lg border border-gold/18 bg-charcoal p-6 shadow-luxury sm:p-8">
          {renderLegalLines(page.lines)}
        </article>
      </section>
    </PageShell>
  );
}
