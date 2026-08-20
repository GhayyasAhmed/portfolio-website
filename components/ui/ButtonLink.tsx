import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  "aria-disabled"?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border-strong text-foreground hover:bg-surface-hover",
  ghost: "text-foreground hover:bg-surface-hover",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  const isExternal = href.startsWith("http") || target === "_blank";

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel ?? "noopener noreferrer"} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}