import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

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

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading"  className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          headingId="about-heading"
          kicker="About"
          title="Frontend-first, full-stack capable."
          description="A short summary of how I work and what I bring to a team — not a full biography."
        />

        <Reveal className="mt-10 flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-border sm:w-48">
            <Image
              src="/profile.webp"
              alt="Ghayyas Ahmed"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-cover"
              // priority
            />
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg text-justify">
            I&apos;m Ghayyas Ahmed, a full-stack web developer with four years of
            hands-on frontend experience, primarily in React. That time has gone into building
            component-driven interfaces, managing state and performance, and sweating the
            interaction details that make a product feel finished rather than just functional.
            More recently, I extended that foundation through the DevWeekends Fellowship, where
            I&apos;ve been shipping complete applications, end to end API design, data
            modeling, and deployment, not just the UI layer.
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