/**
 * Hero illustration: a customer lifecycle drawn as a simple journey, showing
 * where marketing strategy and hands-on building meet. Purely decorative
 * content about the discipline — it makes no claims about past results.
 */
const stages = [
  { step: "Capture", detail: "Landing page & sign-up form", kind: "Web" },
  { step: "Welcome", detail: "Onboarding email series", kind: "Email" },
  { step: "Nurture", detail: "Segmented, triggered journeys", kind: "Automation" },
  { step: "Convert", detail: "Offers, tracking & attribution", kind: "Analytics" },
  { step: "Retain", detail: "Lifecycle & win-back programs", kind: "CRM" },
];

export function LifecycleDiagram() {
  return (
    <figure className="rise relative rounded-3xl border border-line bg-surface p-6 shadow-[0_24px_60px_-36px_rgba(26,26,23,0.45)] sm:p-8" style={{ ["--i" as string]: 3 }}>
      <figcaption className="flex items-center justify-between text-xs font-semibold tracking-wider text-muted uppercase">
        <span>Customer lifecycle</span>
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent normal-case tracking-normal">
          strategy + build
        </span>
      </figcaption>
      <ol className="relative mt-6 space-y-3">
        <span aria-hidden className="absolute top-4 bottom-4 left-[15px] w-px bg-line-strong" />
        {stages.map((s, i) => (
          <li
            key={s.step}
            className="rise relative flex items-center gap-4"
            style={{ ["--i" as string]: 4 + i }}
          >
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper font-display text-sm">
              {i + 1}
            </span>
            <span className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-xl border border-line bg-paper/60 px-4 py-3">
              <span className="min-w-0">
                <span className="block font-medium">{s.step}</span>
                <span className="block truncate text-sm text-muted">{s.detail}</span>
              </span>
              <span className="shrink-0 text-xs font-semibold text-accent">{s.kind}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-muted">
        From the page that captures a lead to the email that brings them back.
      </p>
    </figure>
  );
}
