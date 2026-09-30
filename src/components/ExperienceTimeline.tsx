import type { Experience } from "@/content/types";
import { TagList } from "./Tag";
import { T } from "./Text";

function BulletList({ items, label }: { items: string[]; label: string }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-wider text-muted uppercase">
        {label}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <T>{item}</T>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceItem({ job }: { job: Experience }) {
  return (
    <li className="reveal relative grid grid-cols-1 gap-4 pb-14 pl-8 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10 md:pl-0">
      {/* Timeline rail + dot */}
      <span aria-hidden className="absolute top-2 bottom-0 left-[5px] w-px bg-line md:left-[219px]" />
      <span aria-hidden className="absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border-2 border-accent bg-paper md:left-[214px]" />

      <div className="text-sm text-muted md:pt-0.5 md:text-right">
        <p className="font-semibold text-ink">
          <T>{job.start}</T> – <T>{job.end}</T>
        </p>
        {job.location && (
          <p className="mt-1">
            <T>{job.location}</T>
          </p>
        )}
      </div>

      <div className="md:pl-10">
        <h3 className="text-2xl font-medium">
          <T>{job.title}</T>
        </h3>
        <p className="mt-1 font-medium text-accent">
          <T>{job.company}</T>
        </p>
        {job.summary && (
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            <T>{job.summary}</T>
          </p>
        )}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BulletList items={job.responsibilities} label="Responsibilities" />
          <BulletList items={job.accomplishments} label="Accomplishments" />
        </div>
        <TagList items={job.tools} label="Tools and platforms" className="mt-6" />
      </div>
    </li>
  );
}

export function ExperienceTimeline({ jobs }: { jobs: Experience[] }) {
  return (
    <ol className="relative">
      {jobs.map((job, i) => (
        <ExperienceItem key={`${job.company}-${i}`} job={job} />
      ))}
    </ol>
  );
}
