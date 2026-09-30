import { Container } from "@/components/Container";
import { ContactLinks } from "@/components/ContactLinks";
import { Download } from "@/components/Icons";
import { Eyebrow } from "@/components/Section";
import { T } from "@/components/Text";
import { experience } from "@/content/experience";
import { certifications, education, resumeSummary } from "@/content/resume";
import { site } from "@/content/site";
import { skillCategories } from "@/content/skills";
import { pageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import { PrintButton } from "./PrintButton";

export const metadata = pageMetadata({
  title: "Résumé",
  description:
    "Résumé: experience, skills, education and certifications. Download the PDF version.",
  path: "/resume",
});

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-4 border-t border-line py-8 break-inside-avoid-page md:grid-cols-[160px_1fr] md:gap-8 print:py-5">
      <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-accent uppercase md:pt-1.5">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export default function ResumePage() {
  const categories = skillCategories.filter((c) => c.skills.length > 0);

  return (
    <div className="py-10 sm:py-16 print:py-0">
      <Container size="narrow" className="no-print mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow>Résumé</Eyebrow>
          <p className="max-w-md text-muted">
            The web version of my résumé. Download the PDF to share or print.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={site.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-colors hover:bg-accent-hover"
          >
            <Download /> Download PDF résumé
          </a>
          <PrintButton />
        </div>
      </Container>

      <Container size="narrow">
        <article className="print-plain rise rounded-3xl border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(26,26,23,0.4)] sm:p-12">
          <header className="pb-8 print:pb-4">
            <h1 className="text-4xl font-medium sm:text-5xl print:text-4xl">
              <T>{site.name}</T>
            </h1>
            <p className="mt-2 text-lg text-accent">{site.role}</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <span>
                <T>{site.location}</T>
              </span>
              <ContactLinks layout="inline" />
            </div>
          </header>

          <ResumeSection title="Summary">
            <p className="leading-relaxed">
              <T>{resumeSummary}</T>
            </p>
          </ResumeSection>

          <ResumeSection title="Experience">
            <ol className="space-y-8 print:space-y-5">
              {experience.map((job, i) => (
                <li key={i} className="break-inside-avoid">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className="font-display text-xl font-medium">
                      <T>{job.title}</T>
                    </h3>
                    <p className="shrink-0 text-sm text-muted">
                      <T>{job.start}</T> – <T>{job.end}</T>
                    </p>
                  </div>
                  <p className="text-sm font-medium text-accent">
                    <T>{job.company}</T>
                    {job.location && (
                      <span className="font-normal text-muted">
                        {" · "}
                        <T>{job.location}</T>
                      </span>
                    )}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-accent">
                    {[...job.accomplishments, ...job.responsibilities].map((item, j) => (
                      <li key={j}>
                        <T>{item}</T>
                      </li>
                    ))}
                  </ul>
                  {job.tools.length > 0 && (
                    <p className="mt-2 text-sm text-muted">
                      <span className="font-semibold">Tools: </span>
                      {job.tools.map((tool, k) => (
                        <span key={k}>
                          {k > 0 && ", "}
                          <T>{tool}</T>
                        </span>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </ResumeSection>

          <ResumeSection title="Skills">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category.id}>
                  <dt className="text-sm font-semibold">{category.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">
                    {category.skills.map((skill, k) => (
                      <span key={k}>
                        {k > 0 && ", "}
                        <T>{skill}</T>
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          {education.length > 0 && (
            <ResumeSection title="Education">
              <ul className="space-y-4">
                {education.map((item, i) => (
                  <li key={i}>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <p className="font-semibold">
                        <T>{item.credential}</T>
                      </p>
                      {item.dates && (
                        <p className="text-sm text-muted">
                          <T>{item.dates}</T>
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-muted">
                      <T>{item.school}</T>
                    </p>
                    {item.details && <p className="mt-1 text-sm">{item.details}</p>}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          )}

          {certifications.length > 0 && (
            <ResumeSection title="Certifications">
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <span>
                      <span className="font-semibold">
                        {cert.url ? (
                          <a href={cert.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                            {cert.name}
                          </a>
                        ) : (
                          <T>{cert.name}</T>
                        )}
                      </span>
                      <span className="text-muted">
                        {" · "}
                        <T>{cert.issuer}</T>
                      </span>
                    </span>
                    {cert.date && (
                      <span className="text-sm text-muted">
                        <T>{cert.date}</T>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          )}
        </article>
      </Container>
    </div>
  );
}
