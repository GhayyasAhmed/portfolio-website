"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventData?: Record<string, string>;
};

/**
 * Plain `<a>` that fires a Vercel Analytics custom event on click, then
 * behaves exactly like a normal link. Kept as a tiny leaf client component
 * so Footer/Contact (which render it) can stay Server Components.
 */
export function TrackedLink({ event, eventData, onClick, ...rest }: TrackedLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    track(event, eventData);
    onClick?.(e);
  }
  return <a {...rest} onClick={handleClick} />;
}