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

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          kicker="About"
          title="Frontend-first, full-stack capable."
          description="A short summary of how I work and what I bring to a team — not a full biography."
        />

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