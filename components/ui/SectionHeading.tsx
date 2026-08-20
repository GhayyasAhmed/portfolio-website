import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Id applied to the rendered heading, so the wrapping <section> can use aria-labelledby. */
  headingId?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker ? (
        <p className="font-mono text-sm font-medium tracking-wide text-accent">{kicker}</p>
      ) : null}
      {title ? (
        <h2 id={headingId} className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
      ) : kicker ? (
        // Sections that intentionally show only a kicker still need a real
        // heading — for screen-reader/landmark navigation and so h3s inside
        // them don't skip straight from h1.
        <h2 id={headingId} className="sr-only">
          {kicker}
        </h2>
      ) : null}
      {description ? <p className="mt-2 text-base text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}