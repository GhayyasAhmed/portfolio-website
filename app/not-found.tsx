import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <Container className="flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm font-medium tracking-wide text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}