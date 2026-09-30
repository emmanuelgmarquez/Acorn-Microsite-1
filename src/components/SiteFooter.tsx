import Link from "next/link";
import { navigation, site } from "@/content/site";
import { ContactLinks } from "./ContactLinks";
import { Container } from "./Container";
import { T } from "./Text";

export function SiteFooter() {
  return (
    <footer className="no-print mt-auto border-t border-line bg-surface">
      <Container className="grid grid-cols-1 gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <p className="font-display text-2xl font-medium">
            <T>{site.name}</T>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {site.role}
          </p>
          <div className="mt-6">
            <ContactLinks layout="inline" />
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <li>
              <Link href="/" className="text-muted hover:text-ink">
                Home
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-line py-6 text-xs text-muted">
        © {new Date().getFullYear()} <T>{site.name}</T>. Built with Next.js.
      </Container>
    </footer>
  );
}
