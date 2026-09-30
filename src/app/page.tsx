import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, MapPin } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { LifecycleDiagram } from "@/components/LifecycleDiagram";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { T } from "@/components/Text";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { site } from "@/content/site";
import { skillCategories, topSkills } from "@/content/skills";
import { filled } from "@/lib/placeholder";

function personSchema() {
  const sameAs = [filled(site.linkedin), filled(site.github)].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    ...(filled(site.name) && { name: site.name }),
    jobTitle: site.role,
    description: site.description,
    url: site.url,
    ...(filled(site.email) && { email: `mailto:${site.email}` }),
    ...(sameAs.length > 0 && { sameAs }),
    knowsAbout: site.targetRoles,
  };
}

export default function HomePage() {
  const visibleCategories = skillCategories.filter((c) => c.skills.length > 0);

  return (
    <>
      <JsonLd data={personSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <Container className="grid grid-cols-1 items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <div className="rise flex flex-wrap items-center gap-3 text-sm">
              {site.availability && (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1 font-medium text-accent">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {site.availability}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-muted">
                <MapPin width={16} height={16} /> <T>{site.location}</T>
              </span>
            </div>
            <p className="rise mt-8 text-base font-medium text-muted" style={{ ["--i" as string]: 1 }}>
              Hi, I&apos;m <T>{site.name}</T>.
            </p>
            <h1
              className="rise mt-3 text-4xl leading-[1.08] font-medium sm:text-5xl lg:text-[3.6rem]"
              style={{ ["--i" as string]: 1 }}
            >
              {site.headline}
            </h1>
            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
              style={{ ["--i" as string]: 2 }}
            >
              <T>{site.intro}</T>
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <Button href="/experience">
                View experience <ArrowRight />
              </Button>
              <Button href="/projects" variant="secondary">
                View projects
              </Button>
              <Button href="/contact" variant="secondary">
                Contact me
              </Button>
            </div>
          </div>
          <LifecycleDiagram />
        </Container>
      </section>

      {/* What I do */}
      <Section
        id="focus"
        eyebrow="What I do"
        title="Where I can help your team"
        intro="The roles I'm pursuing all sit where marketing strategy meets hands-on building."
      >
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {site.targetRoles.map((role, i) => (
            <li key={role} className="reveal flex items-center gap-4 bg-surface p-6">
              <span aria-hidden className="font-display text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-medium">{role}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills overview */}
      <Section
        id="skills"
        eyebrow="Skills"
        title="A toolkit that spans strategy and build"
        className="border-y border-line bg-surface"
        action={
          <Button href="/skills" variant="ghost">
            All skills <ArrowRight />
          </Button>
        }
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          {topSkills.length > 0 && (
            <div className="reveal">
              <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">
                Core strengths
              </h3>
              <ul className="mt-4 space-y-3">
                {topSkills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-line pb-3 text-lg">
                    <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                    <T>{skill}</T>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {visibleCategories.map((category) => (
              <li key={category.id} className="reveal rounded-xl border border-line bg-paper/60 p-5">
                <Link href={`/skills#skill-${category.id}`} className="group block">
                  <span className="flex items-center justify-between font-medium">
                    {category.name}
                    <ArrowRight className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-1 block text-sm text-muted">{category.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <Section
          id="work"
          eyebrow="Selected work"
          title="Featured projects"
          intro="Case studies covering the problem, what I built and what happened next."
          action={
            <Button href="/projects" variant="ghost">
              All projects <ArrowRight />
            </Button>
          }
        >
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Experience snapshot */}
      {experience.length > 0 && (
        <Section
          id="experience"
          eyebrow="Experience"
          title="Recent roles"
          className="border-t border-line"
          action={
            <Button href="/experience" variant="ghost">
              Full work history <ArrowRight />
            </Button>
          }
        >
          <ol className="divide-y divide-line border-y border-line">
            {experience.slice(0, 3).map((job, i) => (
              <li key={i} className="reveal grid grid-cols-1 gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                <div>
                  <p className="font-display text-xl font-medium">
                    <T>{job.title}</T>
                  </p>
                  <p className="text-accent">
                    <T>{job.company}</T>
                  </p>
                </div>
                <p className="text-sm text-muted">
                  <T>{job.start}</T> – <T>{job.end}</T>
                </p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
