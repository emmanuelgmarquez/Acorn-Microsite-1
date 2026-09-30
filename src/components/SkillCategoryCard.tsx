import type { SkillCategory } from "@/content/types";
import { T } from "./Text";

export function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <section
      aria-labelledby={`skill-${category.id}`}
      className="reveal flex h-full flex-col rounded-2xl border border-line bg-surface p-6"
    >
      <p aria-hidden className="font-display text-sm text-muted">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 id={`skill-${category.id}`} className="mt-3 text-xl font-medium">
        {category.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {category.description}
      </p>
      <ul className="mt-5 space-y-2 border-t border-line pt-5">
        {category.skills.map((skill, i) => (
          <li key={i} className="flex items-baseline gap-3 text-[0.95rem]">
            <span aria-hidden className="h-1 w-3 shrink-0 translate-y-[-3px] rounded-full bg-accent/60" />
            <T>{skill}</T>
          </li>
        ))}
      </ul>
    </section>
  );
}
