import { ContactForm } from "@/components/ContactForm";
import { ContactLinks } from "@/components/ContactLinks";
import { Container } from "@/components/Container";
import { Download } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { T } from "@/components/Text";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch about email, lifecycle, marketing automation or web roles.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        intro="Hiring for an email, CRM, automation or web role? Send a note and I'll get back to you."
      />
      <Container className="grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="reveal">
          <h2 className="text-2xl font-medium">Reach me directly</h2>
          <div className="mt-6">
            <ContactLinks />
          </div>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">Based in</dt>
              <dd className="mt-1 text-muted">
                <T>{site.location}</T>
              </dd>
            </div>
            {site.availability && (
              <div>
                <dt className="font-semibold">Availability</dt>
                <dd className="mt-1 text-muted">{site.availability}</dd>
              </div>
            )}
          </dl>
          <a
            href={site.resumePdf}
            download
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            <Download /> Download my résumé (PDF)
          </a>
        </div>
        <div className="reveal">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
