import Image from "next/image";
import type { Screenshot } from "@/content/types";

/** A browser-style frame around a screenshot, or a neutral placeholder. */
export function ScreenshotFrame({
  shot,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  label = "Screenshot coming soon",
}: {
  shot?: Screenshot;
  priority?: boolean;
  sizes?: string;
  label?: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_0_rgba(0,0,0,0.03),0_12px_32px_-16px_rgba(26,26,23,0.18)]">
        <div aria-hidden className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        {shot ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full"
          />
        ) : (
          <div className="flex aspect-[16/10] flex-col justify-between bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:28px_28px] p-5 sm:p-6">
            <div className="space-y-2" aria-hidden>
              <div className="h-3 w-2/5 rounded bg-line-strong/70" />
              <div className="h-2 w-3/5 rounded bg-line" />
              <div className="h-2 w-1/2 rounded bg-line" />
            </div>
            <p className="self-start rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-muted">
              {label}
            </p>
          </div>
        )}
      </div>
      {shot?.caption && (
        <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
      )}
    </figure>
  );
}
