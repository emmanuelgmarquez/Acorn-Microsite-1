import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./Section";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container>
        <div className="rise max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-medium sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </header>
  );
}
