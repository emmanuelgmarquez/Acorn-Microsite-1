import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  action,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`py-16 sm:py-24 ${className}`}
    >
      <Container>
        {(title || eyebrow) && (
          <div className="reveal mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              {title && (
                <h2
                  id={headingId}
                  className="text-3xl font-medium sm:text-4xl"
                >
                  {title}
                </h2>
              )}
              {intro && (
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {intro}
                </p>
              )}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
      <span aria-hidden className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}
