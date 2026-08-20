import { ArrowRight, FileDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE_NAME, RESUME_PATH } from "@/lib/constants";
import { hasResumeFile } from "@/lib/Resume";
import { TrackedButtonLink } from "@/components/analytics/TrackedButtonLink";

export function Hero() {
  const hasResume = hasResumeFile();

  return (
    <section className="relative overflow-hidden bg-grid-fade">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <p
          style={{ animationDelay: "0ms" }}
          className="animate-fade-up font-mono text-sm font-medium tracking-wide text-accent"
        >
          Hi, I&apos;m {SITE_NAME}
        </p>

        <h1
          style={{ animationDelay: "80ms" }}
          className="animate-fade-up mt-4 max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl md:text-5xl"
        >
          Fullstack Web Developer
        </h1>

        <p
          style={{ animationDelay: "160ms" }}
          className="animate-fade-up mt-6 max-w-xl text-base text-muted sm:text-lg text-justify"
        >
          Specializing in resilient React frontends for 4 years, now extending that precision across the entire stack to build and deploy complete full stack web applications.
        </p>

        <div
          style={{ animationDelay: "240ms" }}
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
        >
          <ButtonLink href="#projects" variant="secondary">
            View Projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          {hasResume ? (
            <TrackedButtonLink
              href={RESUME_PATH}
              variant="primary"
              target="_blank"
              event="Resume Download"
            >
              <FileDown className="size-4" aria-hidden="true" />
              Download Resume
            </TrackedButtonLink>
          ) : (
            <ButtonLink href="#contact" variant="secondary">
              Get in Touch
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
