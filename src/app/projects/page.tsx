import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { ProjectFilter } from "./ProjectFilter";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Case studies in email and lifecycle marketing, marketing automation, WordPress and front-end web development.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects & case studies"
        intro="Each case study covers the problem, my role, what I built, the tools, the results and what I took away from it."
      />
      <Container className="py-16 sm:py-20">
        <ProjectFilter projects={projects} />
      </Container>
      <CtaBand />
    </>
  );
}
