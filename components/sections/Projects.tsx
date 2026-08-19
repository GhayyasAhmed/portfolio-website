import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          kicker="Projects"
          title="Selected work."
          description="Full-stack builds from the DevWeekends Fellowship. Detailed case studies are on the way."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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