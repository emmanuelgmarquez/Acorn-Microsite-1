"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/content/types";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {categories.length > 1 && (
        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "border-ink bg-ink text-paper"
                  : "border-line-strong bg-surface text-ink hover:border-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {shown.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
