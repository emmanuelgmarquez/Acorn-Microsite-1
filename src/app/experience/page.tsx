import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageHeader } from "@/components/PageHeader";
import { experience } from "@/content/experience";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Work history across email marketing, CRM and lifecycle marketing, marketing automation and web.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Work history"
        intro="The teams I've worked with, what I owned and what came of it."
      />
      <Container className="py-16 sm:py-20">
        <ExperienceTimeline jobs={experience} />
      </Container>
      <CtaBand />
    </>
  );
}
