import { cn } from "@/lib/utils";

type ProjectHighlightListProps = {
  items: string[];
  /** Cap how many items render — used by the compact card preview. */
  limit?: number;
  className?: string;
};

/** Reusable bullet list for Key Features / Engineering Highlights, and the card preview. */
export function ProjectHighlightList({ items, limit, className }: ProjectHighlightListProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <ul className={cn("space-y-2 text-sm leading-relaxed text-muted", className)}>
      {visibleItems.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="mt-0.5 text-accent">
            ›
          </span>
          <span className="text-justify">{item}</span>
        </li>
      ))}
    </ul>
  );
}