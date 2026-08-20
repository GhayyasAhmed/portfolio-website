import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  framed?: boolean;
  sizes?: string;
};

/**
 * Reusable "browser chrome" frame for project screenshots.
 *
 * With no `src`, this renders an honest placeholder — it never claims to
 * be a real screenshot. Once a real image exists, pass `src` (and keep
 * `alt` accurate) and the placeholder disappears automatically.
 */
export function BrowserFrame({
  src,
  alt,
  label,
  className,
  framed = true,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: BrowserFrameProps) {
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
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-linear-to-br from-accent-muted to-surface p-6 text-center">
            <ImageOff className="size-8 text-accent/60" aria-hidden="true" />
            <p className="text-sm font-medium text-muted">
              Screenshot placeholder — {label}
            </p>
            <p className="text-xs text-muted/70">
              A real product screenshot hasn&apos;t been added yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
