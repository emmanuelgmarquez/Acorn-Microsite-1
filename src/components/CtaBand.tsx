import { site } from "@/content/site";
import Link from "next/link";
import { Container } from "./Container";
import { ArrowRight, Download } from "./Icons";

export function CtaBand({
  title = "Hiring for email, lifecycle or web?",
  body = "I'd love to hear about the role and the team. The fastest way to reach me is the contact form or email.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="no-print py-16 sm:py-20">
      <Container>
        <div className="reveal flex flex-col gap-8 rounded-3xl bg-ink px-6 py-12 text-paper sm:px-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 id="cta-heading" className="text-3xl font-medium sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 leading-relaxed text-paper/75">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft"
            >
              Contact me <ArrowRight />
            </Link>
            <a
              href={site.resumePdf}
              download
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
            >
              <Download /> Résumé PDF
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
