import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        variant === "default" && "border-border bg-surface text-muted",
        variant === "accent" && "border-accent/20 bg-accent-muted text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}