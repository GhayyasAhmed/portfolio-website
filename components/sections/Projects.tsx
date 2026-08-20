import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-16 py-16">
      <Container>
        <SectionHeading
        headingId="projects-heading"
          kicker="Projects"
          // title="Selected work."
          // description="Full-stack builds from the DevWeekends Fellowship. Detailed case studies are on the way."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}