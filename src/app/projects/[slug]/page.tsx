import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ArrowLeft, ArrowRight, External } from "@/components/Icons";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { Eyebrow } from "@/components/Section";
import { TagList } from "@/components/Tag";
import { T } from "@/components/Text";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { filled, isPlaceholder } from "@/lib/placeholder";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: filled(project.title) ?? "Case study",
    description: filled(project.summary) ?? `${project.category} case study.`,
    path: `/projects/${project.slug}`,
  });
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="reveal grid grid-cols-1 gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>
            <T>{item}</T>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const [hero, ...gallery] = project.screenshots;

  return (
    <article>
      <header className="border-b border-line pt-10 pb-14 sm:pt-14 sm:pb-20">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
          >
            <ArrowLeft /> All projects
          </Link>
          <div className="rise mt-10 max-w-3xl">
            <Eyebrow>{project.category}</Eyebrow>
            <h1 className="text-4xl font-medium sm:text-5xl">
              <T>{project.title}</T>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              <T>{project.summary}</T>
            </p>
          </div>

          <dl className="rise mt-10 grid grid-cols-1 gap-6 border-t border-line pt-6 text-sm sm:grid-cols-3" style={{ ["--i" as string]: 1 }}>
            <div>
              <dt className="font-semibold text-muted">My role</dt>
              <dd className="mt-1">
                <T>{project.role}</T>
              </dd>
            </div>
            {project.context && (
              <div>
                <dt className="font-semibold text-muted">Context</dt>
                <dd className="mt-1">
                  <T>{project.context}</T>
                </dd>
              </div>
            )}
            {project.date && (
              <div>
                <dt className="font-semibold text-muted">When</dt>
                <dd className="mt-1">
                  <T>{project.date}</T>
                </dd>
              </div>
            )}
          </dl>

          {project.links && project.links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) =>
                isPlaceholder(link.label) || link.href === "#" ? (
                  <li key={link.label} className="text-sm">
                    <T>{link.label}</T>
                  </li>
                ) : (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                    >
                      {link.label} <External width={15} height={15} />
                    </a>
                  </li>
                ),
              )}
            </ul>
          )}
        </Container>
      </header>

      <Container className="pt-12 sm:pt-16">
        <div className="rise" style={{ ["--i" as string]: 2 }}>
          <ScreenshotFrame shot={hero} priority sizes="(min-width: 1152px) 1088px, 100vw" />
        </div>
      </Container>

      <Container className="py-12 sm:py-16">
        <Block title="The problem">
          <p>
            <T>{project.problem}</T>
          </p>
        </Block>
        <Block title="What I did">
          <Bullets items={project.whatIDid} />
        </Block>
        <Block title="Tools used">
          <TagList items={project.tools} label="Tools used" />
        </Block>
        {gallery.length > 0 && (
          <Block title="Screenshots">
            <div className="grid grid-cols-1 gap-8">
              {gallery.map((shot) => (
                <ScreenshotFrame key={shot.src} shot={shot} sizes="(min-width: 1024px) 800px, 100vw" />
              ))}
            </div>
          </Block>
        )}
        <Block title="Results">
          <Bullets items={project.results} />
        </Block>
        <Block title="Key takeaways">
          <Bullets items={project.takeaways} />
        </Block>
      </Container>

      {next && next.slug !== project.slug && (
        <Container>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink sm:p-8"
          >
            <span>
              <span className="block text-xs font-semibold tracking-wider text-muted uppercase">
                Next case study
              </span>
              <span className="mt-2 block font-display text-2xl font-medium">
                <T>{next.title}</T>
              </span>
            </span>
            <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" width={24} height={24} />
          </Link>
        </Container>
      )}

      <CtaBand />
    </article>
  );
}
