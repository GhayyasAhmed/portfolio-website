import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  /**
   * Path to a real screenshot. Leave undefined to render the placeholder —
   * swapping in a real asset later is just passing this prop.
   */
  src?: string;
  /** Meaningful alt text, used once `src` is supplied. */
  alt: string;
  /** Short label shown in the fake address bar and placeholder copy. */
  label: string;
  className?: string;
  /**
   * When false, skips the outer rounded border/background so this can be
   * embedded inside an already-framed container (e.g. a project card).
   * Defaults to true for standalone use (e.g. the project detail page).
   */
  framed?: boolean;
};

/**
 * Reusable "browser chrome" frame for project screenshots.
 *
 * With no `src`, this renders an honest placeholder — it never claims to
 * be a real screenshot. Once a real image exists, pass `src` (and keep
 * `alt` accurate) and the placeholder disappears automatically.
 */
export function BrowserFrame({ src, alt, label, className, framed = true }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        framed && "rounded-xl border border-border bg-surface",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-border bg-surface-hover px-4 py-2.5"
      >
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted">
          {label}
        </span>
      </div>

      <div className="relative aspect-video">
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover object-top" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-linear-to-br from-accent-muted to-surface p-6 text-center">
            <ImageOff className="size-8 text-accent/60" aria-hidden="true" />
            <p className="text-sm font-medium text-muted">Screenshot placeholder — {label}</p>
            <p className="text-xs text-muted/70">
              A real product screenshot hasn&apos;t been added yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}