import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker ? (
        <p className="font-mono text-sm font-medium tracking-wide text-accent">{kicker}</p>
      ) : null}
      {
        title ?
        <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      : null
      }
      {description ? <p className="mt-2 text-base text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}