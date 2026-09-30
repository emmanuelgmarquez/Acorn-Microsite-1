import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container size="narrow" className="py-24 text-center sm:py-32">
      <p className="font-display text-7xl text-line-strong">404</p>
      <h1 className="mt-6 text-3xl font-medium sm:text-4xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-muted">It may have moved, or the link might be mistyped.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/projects" variant="secondary">
          See projects
        </Button>
      </div>
    </Container>
  );
}
