import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-24">
      <Container className="max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-8 flex aspect-video items-center justify-center rounded-xl border border-border bg-accent-muted">
          <FolderGit2 className="size-14 text-accent/60" aria-hidden="true" />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{project.title}</h1>
          <Badge>Case study coming soon</Badge>
        </div>

        <p className="mt-3 text-lg text-muted">{project.tagline}</p>
        <p className="mt-6 leading-relaxed text-muted">{project.summary}</p>

        {project.stack.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
      </Container>
    </article>
  );
}