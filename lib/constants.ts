/**
 * Central site configuration.
 *
 * Anything marked TODO is intentionally left blank rather than invented —
 * fill these in with real values before deploying. Nothing here fabricates
 * a URL, handle, or number on your behalf.
 */

// TODO: set this to your real deployed domain (also set NEXT_PUBLIC_SITE_URL
// in your deployment environment so metadata/OG/sitemap resolve correctly).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const SITE_NAME = "Ghayyas Ahmed";

export const SITE_ROLE = "Full-Stack Web Developer";

export const SITE_DESCRIPTION =
  "Portfolio of Ghayyas Ahmed, a full-stack web developer with a frontend/React background, building production-grade web applications with Next.js and TypeScript.";

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Section ids tracked by the navbar's active-section indicator, in page order. */
export const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"] as const;

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * TODO: add your real profile URLs. Left empty on purpose — the UI hides
 * any entry whose `href` is empty, so nothing fake ever renders.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "" },
  { label: "LinkedIn", href: "" },
];

/** TODO: add a real contact email. Left empty on purpose — see SOCIAL_LINKS. */
export const CONTACT_EMAIL = "";

export const RESUME_PATH = "/resume.pdf";