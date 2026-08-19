import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    title: "Frontend depth",
    description:
      "Years spent in React day to day — component architecture, state, performance, and the small UX details that make an interface feel solid.",
  },
  {
    title: "Full-stack range",
    description:
      "Extended that foundation end to end through the DevWeekends Fellowship: APIs, data modeling, and deployment, not just the UI layer.",
  },
  {
    title: "Production mindset",
    description:
      "Comfortable with the engineering that supports a feature — typed code, sane project structure, and shipping things that hold up.",
  },
];

/**
 * No real headshot exists yet. This is a deliberate, polished placeholder
 * (initials on a bordered gradient field) — not a generated or fabricated
 * photo of a person. Swap the contents of this block for a `next/image`
 * <Image /> once a real photo is available; the surrounding layout doesn't
 * need to change.
 */
function HeadshotPlaceholder() {
  return (
    <div className="flex aspect-square w-40 shrink-0 items-center justify-center rounded-2xl border border-border bg-linear-to-br from-accent-muted to-surface sm:w-48">
      <div className="flex flex-col items-center gap-2">
        <User className="size-10 text-accent/70" aria-hidden="true" />
        <span className="font-display text-sm font-semibold tracking-wide text-muted">GA</span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          kicker="About"
          title="Frontend-first, full-stack capable."
          description="A short summary of how I work and what I bring to a team — not a full biography."
        />

        <Reveal className="mt-10 flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <HeadshotPlaceholder />
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg text-justify">
            I&apos;m Ghayyas Ahmed, a full-stack web developer with roughly four years of
            hands-on frontend experience, primarily in React. That time has gone into building
            component-driven interfaces, managing state and performance, and sweating the
            interaction details that make a product feel finished rather than just functional.
            More recently, I extended that foundation through the DevWeekends Fellowship, where
            I&apos;ve been shipping complete applications end to end — API design, data
            modeling, and deployment, not just the UI layer. I&apos;m not claiming years of
            backend depth; I&apos;m describing a frontend specialist actively building
            full-stack range, with a production mindset: typed code, sensible project
            structure, and interfaces that hold up outside a demo.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}