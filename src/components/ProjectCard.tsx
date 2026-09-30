import Link from "next/link";
import type { Project } from "@/content/types";
import { ArrowRight } from "./Icons";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { TagList } from "./Tag";
import { T } from "./Text";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="reveal group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-4 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(26,26,23,0.35)] sm:p-5">
      <ScreenshotFrame
        shot={project.screenshots[0]}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        label="Preview coming soon"
      />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="text-xs font-semibold tracking-wider text-accent uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-medium">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl"
          >
            <T>{project.title}</T>
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          <T>{project.summary}</T>
        </p>
        <TagList
          items={project.tools.slice(0, 4)}
          label="Tools used"
          className="mt-4"
        />
        <p className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">
          Read case study
          <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
}
