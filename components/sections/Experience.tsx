import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 py-16"
    >
      <Container>
        <SectionHeading
          headingId="experience-heading"
          kicker="Experience"
          // title="Where I've worked."
          // description="Professional roles only — full-stack project work from the DevWeekends Fellowship is showcased in Projects below."
        />
        <ol className="mt-10 space-y-6 border-l border-border pl-8">
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
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.role}
                  </h3>
                  {entry.isPlaceholder ? <Badge>Placeholder</Badge> : null}
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {entry.organization}
                </p>
                <p className="text-sm text-muted">{entry.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted text-justify">
                  {entry.summary}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
