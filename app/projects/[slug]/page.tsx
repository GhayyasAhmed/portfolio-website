import { ProjectDetailSection } from "@/components/projects/ProjectDetailSection";
import { ProjectHighlightList } from "@/components/projects/ProjectHighlightList";
import { ProjectLinkButton } from "@/components/projects/ProjectLinkButton";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { SITE_NAME } from "@/lib/constants";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";
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
    description: project.metaDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.metaDescription,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription,
    author: { "@type": "Person", name: SITE_NAME },
    keywords: project.techStack.flatMap((group) => group.items).join(", "),
    ...(project.liveDemoUrl ? { url: project.liveDemoUrl } : {}),
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
  };

  return (
    <article className="py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to projects
        </Link>

        <h1 className="mt-8 text-3xl font-semibold text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.tagline}</p>

        <div className="mt-8">
          <BrowserFrame
            label={project.title}
            alt={`Placeholder preview of the ${project.title} interface — a real screenshot hasn't been added yet`}
          />
        </div>

        <ProjectDetailSection title="Overview">
          <p className="leading-relaxed text-muted">{project.overview}</p>
        </ProjectDetailSection>

        <ProjectDetailSection title="Key Features">
          <ProjectHighlightList items={project.keyFeatures} />
        </ProjectDetailSection>

        <ProjectDetailSection title="Engineering Highlights">
          <ProjectHighlightList items={project.engineeringHighlights} />
        </ProjectDetailSection>

        <ProjectDetailSection title="Tech Stack">
          <ProjectTechStack techStack={project.techStack} />
        </ProjectDetailSection>

        <ProjectDetailSection title="Deployment">
          <p className="leading-relaxed text-muted">{project.deployment}</p>
        </ProjectDetailSection>

        <ProjectDetailSection title="Live Demo">
          <ProjectLinkButton
            url={project.liveDemoUrl}
            label="View Live Demo"
            unavailableLabel="Live demo coming soon"
            icon={ExternalLink}
            variant="primary"
          />
        </ProjectDetailSection>

        <ProjectDetailSection title="GitHub">
          <ProjectLinkButton
            url={project.githubUrl}
            label="View Source on GitHub"
            unavailableLabel="Repository link coming soon"
            icon={Code}
            variant="secondary"
          />
        </ProjectDetailSection>
      </Container>
    </article>
  );
}