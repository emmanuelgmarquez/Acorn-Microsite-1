import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm shadow-accent/20",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink",
  ghost: "text-accent hover:text-accent-hover underline-offset-4 hover:underline px-0!",
};

export function buttonClasses(variant: Variant = "primary") {
  return `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 ${styles[variant]}`;
}

export function Button({
  href,
  children,
  variant = "primary",
  download,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  download?: boolean;
  external?: boolean;
}) {
  const className = buttonClasses(variant);
  if (download || external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        download={download || undefined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
