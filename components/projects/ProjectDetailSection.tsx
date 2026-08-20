import { cn } from "@/lib/utils";

type ProjectDetailSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Consistent heading + spacing wrapper for each detail-page section. */
export function ProjectDetailSection({ title, children, className }: ProjectDetailSectionProps) {
  return (
    <section className={cn("mt-12 first:mt-8", className)}>
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}