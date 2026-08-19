import { EXPERIENCE } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading kicker="Experience" title="Where I've worked." />

        <ol className="mt-12 space-y-6 border-l border-border pl-8">
          {EXPERIENCE.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 80}>
              <li
                className={cn(
                  "relative rounded-xl border p-6",
                  entry.isPlaceholder
                    ? "border-dashed border-border-strong bg-transparent"
                    : "border-border bg-surface",
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-7 -left-9.25 size-2.5 rounded-full bg-accent"
                />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
                  {entry.isPlaceholder ? <Badge>Placeholder</Badge> : null}
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{entry.organization}</p>
                <p className="text-sm text-muted">{entry.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{entry.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}