"use client";

import { track } from "@vercel/analytics";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { ComponentProps, MouseEvent } from "react";

type TrackedButtonLinkProps = ComponentProps<typeof ButtonLink> & {
  event: string;
  eventData?: Record<string, string>;
};

export function TrackedButtonLink({ event, eventData, onClick, ...rest }: TrackedButtonLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    track(event, eventData);
    onClick?.(e);
  }
  return <ButtonLink {...rest} onClick={handleClick} />;
}