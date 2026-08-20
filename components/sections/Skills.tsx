import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 py-16"
    >
      <Container>
        <SectionHeading
          headingId="skills-heading"
          kicker="Skills"
          // title="Tools I reach for."
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, index) => (
            <Reveal key={group.category} delay={index * 80}>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="accent">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
