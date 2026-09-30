import { site } from "@/content/site";
import { isPlaceholder } from "@/lib/placeholder";
import { GitHub, LinkedIn, Mail } from "./Icons";
import { T } from "./Text";

/** Email / LinkedIn / GitHub links. Placeholder values render but don't link. */
export function contactChannels() {
  return [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      Icon: Mail,
    },
    {
      label: "LinkedIn",
      value: site.linkedin,
      href: site.linkedin,
      Icon: LinkedIn,
    },
    {
      label: "GitHub",
      value: site.github,
      href: site.github,
      Icon: GitHub,
    },
  ].filter((c) => c.value !== "");
}

function prettyUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function ContactLinks({ layout = "list" }: { layout?: "list" | "inline" }) {
  const channels = contactChannels();

  if (layout === "inline") {
    return (
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {channels.map(({ label, value, href, Icon }) => (
          <li key={label}>
            {isPlaceholder(value) ? (
              <span className="inline-flex items-center gap-2 text-muted">
                <Icon /> {label}
              </span>
            ) : (
              <a
                href={href}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                {...(label !== "Email"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon /> {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="divide-y divide-line border-y border-line">
      {channels.map(({ label, value, href, Icon }) => {
        const content = (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold tracking-wider text-muted uppercase">
                {label}
              </span>
              <span className="block truncate font-medium">
                {isPlaceholder(value) ? <T>{value}</T> : label === "Email" ? value : prettyUrl(value)}
              </span>
            </span>
          </>
        );
        return (
          <li key={label}>
            {isPlaceholder(value) ? (
              <div className="flex items-center gap-4 py-4">{content}</div>
            ) : (
              <a
                href={href}
                className="group flex items-center gap-4 py-4 transition-colors hover:text-accent"
                {...(label !== "Email"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
