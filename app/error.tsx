"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm font-medium tracking-wide text-accent">Error</p>
      <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Something went wrong</h1>
      <p className="mt-3 max-w-md text-muted">An unexpected error occurred. Please try again.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-accent"
      >
        Try again
      </button>
    </Container>
  );
}