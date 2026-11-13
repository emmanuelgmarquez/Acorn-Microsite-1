import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { T } from "@/components/Text";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Professional background and how marketing and technical experience overlap.",
  path: "/about",
});

function OverlapColumn({
  title,
  items,
  emphasis = false,
}: {
  title: string;
  items: string[];
  emphasis?: boolean;
}) {
  return (
    <div
      className={`reveal rounded-2xl p-6 sm:p-7 ${
        emphasis ? "bg-accent text-white" : "border border-line bg-surface"
      }`}
    >
      <h3 className="text-xl font-medium">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className={`flex gap-3 leading-relaxed ${emphasis ? "text-white/90" : ""}`}>
            <span
              aria-hidden
              className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${emphasis ? "bg-white" : "bg-accent"}`}
            />
            <span>
              <T>{item}</T>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={about.heading} />

      <Container
        size={site.photo ? "default" : "narrow"}
        className={`py-14 sm:py-20 ${
          site.photo
            ? "grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-16"
            : ""
        }`}
      >
        {site.photo && (
          <figure className="rise mx-auto w-full max-w-[280px] md:sticky md:top-24 md:max-w-none">
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              width={site.photo.width}
              height={site.photo.height}
              sizes="(min-width: 768px) 320px, 280px"
              priority
              className="aspect-[4/5] w-full rounded-3xl border border-line object-cover object-top shadow-[0_24px_60px_-36px_rgba(26,26,23,0.45)]"
            />
            <figcaption className="mt-4 text-sm text-muted">
              <span className="block font-semibold text-ink">{site.name}</span>
              {site.location}
            </figcaption>
          </figure>
        )}
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed sm:text-xl">
          {about.story.map((paragraph, i) => (
            <p key={i} className="reveal">
              <T>{paragraph}</T>
            </p>
          ))}
        </div>
      </Container>

      <Section
        id="overlap"
        eyebrow="The overlap"
        title="Marketing thinking, technical hands"
        intro="Most teams split these across people. Here's where I sit on each side, and where they come together."
        className="border-y border-line bg-paper"
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <OverlapColumn title="Marketing" items={about.overlap.marketing} />
          <OverlapColumn title="Technical" items={about.overlap.technical} />
          <OverlapColumn title="Where they meet" items={about.overlap.together} emphasis />
        </div>
      </Section>

      {about.approach.length > 0 && (
        <Section id="approach" eyebrow="How I work" title="What you can expect">
          <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {about.approach.map((item, i) => (
              <li key={i} className="reveal border-t-2 border-ink pt-5">
                <p aria-hidden className="font-display text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-medium">
                  <T>{item.title}</T>
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  <T>{item.body}</T>
                </p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {about.outsideWork && (
        <Container size="narrow" className="pb-8">
          <h2 className="text-2xl font-medium">Outside work</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">{about.outsideWork}</p>
        </Container>
      )}

      <CtaBand />
    </>
  );
}
