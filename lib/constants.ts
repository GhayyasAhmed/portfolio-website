function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  console.log("process.env.NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL)
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel sets these automatically at build time — fall back to them
  // instead of silently shipping "http://localhost:3000" in production.
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  console.log("process.env.VERCEL_PROJECT_PRODUCTION_URL", process.env.VERCEL_PROJECT_PRODUCTION_URL)
  console.log("process.env.VERCEL_URL", process.env.VERCEL_URL)
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Ghayyas Ahmed";

export const SITE_ROLE = "Full-Stack Web Developer";

export const SITE_DESCRIPTION = "Portfolio of Ghayyas Ahmed, a full-stack web developer with a frontend/React background, building production-grade web applications with Next.js and TypeScript.";

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
  { label: "GitHub", href: "https://github.com/GhayyasAhmed" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ghayyas-ahmed/" },
];

/** TODO: add a real contact email. Left empty on purpose — see SOCIAL_LINKS. */
export const CONTACT_EMAIL = "ghayyas1ahmed@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/923700713489";

export const RESUME_PATH = "/Ghayyas_Ahmed_FullStack_Developer.pdf";