import { SKILLS } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading kicker="Skills" title="Tools I reach for." />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
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