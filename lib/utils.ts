/**
 * Joins class names, skipping falsy values.
 *
 * Deliberately dependency-free (no `clsx`/`tailwind-merge`) — the project
 * only needs conditional joining, not class-conflict resolution.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}