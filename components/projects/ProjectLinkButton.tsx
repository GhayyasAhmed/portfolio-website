"use client";
import { track } from "@vercel/analytics";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Code } from "lucide-react";

type ProjectLinkButtonProps = {
  url: string | null;
  label: string;
  unavailableLabel: string;
  iconName: "external" | "code";
  variant?: "primary" | "secondary" | "inline";
};

export function ProjectLinkButton({
  url,
  label,
  unavailableLabel,
  iconName,
  variant = "primary",
}: ProjectLinkButtonProps) {
  const Icon = iconName === "external" ? ExternalLink : Code;

  function handleClick() {
    if (url) track("Project Link Click", { label, url });
  }

  if (variant === "inline") {
    return url ? (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
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
      <ButtonLink href={url} target="_blank" variant={variant} onClick={handleClick}>
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