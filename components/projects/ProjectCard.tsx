import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ProjectHighlightList } from "@/components/projects/ProjectHighlightList";
import { ProjectLinkButton } from "@/components/projects/ProjectLinkButton";

export function ProjectCard({ project }: { project: Project }) {
  const featuredTech = project.techStack.flatMap((group) => group.items).slice(0, 4);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study: ${project.title}`}
        className="block focus-visible:outline-2 focus-visible:outline-accent"
      >
        <BrowserFrame
          src={project?.imageUrl ?? ""}
          framed={false}
          label={project.title}
          alt={`Placeholder preview of the ${project.title} interface`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {featuredTech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <ProjectHighlightList items={project.engineeringHighlights} limit={2} className="mt-4" />

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`${project.title} case study`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Case study
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>

          <ProjectLinkButton
            url={project.liveDemoUrl}
            label="Live Demo"
            unavailableLabel="Live Demo — soon"
            iconName="external"
            variant="inline"
          />

          <ProjectLinkButton
            url={project.githubUrl}
            label="GitHub"
            unavailableLabel="GitHub — soon"
            iconName="code"
            variant="inline"
          />
        </div>
      </div>
    </div>
  );
}