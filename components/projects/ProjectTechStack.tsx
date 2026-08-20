import { Badge } from "@/components/ui/Badge";
import type { TechStackGroup } from "@/data/projects";

export function ProjectTechStack({ techStack }: { techStack: TechStackGroup[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {techStack.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            {group.category}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Badge key={item} variant="accent">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}