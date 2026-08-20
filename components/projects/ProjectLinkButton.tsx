import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ProjectLinkButtonProps = {
  /** `null` when the URL isn't available yet — this component never fabricates one. */
  url: string | null;
  label: string;
  unavailableLabel: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /**
   * "primary" / "secondary" render full ButtonLinks (detail page).
   * "inline" renders a compact text link (project card).
   */
  variant?: "primary" | "secondary" | "inline";
};

export function ProjectLinkButton({
  url,
  label,
  unavailableLabel,
  icon: Icon,
  variant = "primary",
}: ProjectLinkButtonProps) {
  if (variant === "inline") {
    return url ? (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        <Icon className="size-4" aria-hidden="true" />
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
      </Link>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted/70">
        <Icon className="size-4" aria-hidden="true" />
        {unavailableLabel}
      </span>
    );
  }

  if (url) {
    return (
      <ButtonLink href={url} target="_blank" variant={variant}>
        <Icon className="size-4" aria-hidden="true" />
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
      </ButtonLink>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-dashed border-border-strong px-5 py-2.5 text-sm font-medium text-muted",
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      {unavailableLabel}
    </span>
  );
}