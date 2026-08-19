import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg"
    >
      <div className="flex aspect-video items-center justify-center border-b border-border bg-accent-muted">
        <FolderGit2 className="size-10 text-accent/60" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <ArrowUpRight
            className="size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 text-sm text-muted">{project.tagline}</p>

        {project.stack.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        ) : (
          <Badge className="mt-4 w-fit">Case study coming soon</Badge>
        )}
      </div>
    </Link>
  );
}