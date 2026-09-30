import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { SkillCategoryCard } from "@/components/SkillCategoryCard";
import { skillCategories } from "@/content/skills";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Skills",
  description:
    "Skills in email and CRM, marketing automation, web development, CMS, analytics, AI tools, design and content.",
  path: "/skills",
});

export default function SkillsPage() {
  const categories = skillCategories.filter((c) => c.skills.length > 0);
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        intro="Grouped the way hiring teams tend to look for them. Everything listed is something I've used on real work."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, i) => (
            <SkillCategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
