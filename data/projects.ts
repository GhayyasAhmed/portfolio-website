export type ProjectStatus = "case-study-pending";

export type Project = {
  /** Matches the folder segment under app/projects/[slug] */
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  /** Tech stack — intentionally empty until confirmed; see comment below. */
  stack: string[];
  status: ProjectStatus;
};

/**
 * Placeholder project entries.
 *
 * These exist so `/projects/[slug]` routes and card layouts can be built
 * and reviewed now, without inventing case-study details (metrics, stack,
 * screenshots) that haven't been written yet. Replace `summary` and
 * `stack`, and swap `status` to a real value once each write-up is ready.
 */
export const PROJECTS: Project[] = [
  {
    slug: "multi-vendor-ecommerce",
    title: "Multi-Vendor E-Commerce Platform",
    tagline: "Marketplace supporting multiple independent sellers.",
    summary:
      "Case study write-up in progress. This project page is a placeholder — full details, architecture notes, and screenshots will be added here.",
    stack: [],
    status: "case-study-pending",
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    tagline: "Platform for courses, enrollment, and progress tracking.",
    summary:
      "Case study write-up in progress. This project page is a placeholder — full details, architecture notes, and screenshots will be added here.",
    stack: [],
    status: "case-study-pending",
  },
  {
    slug: "hotel-booking-system",
    title: "Hotel Booking System",
    tagline: "End-to-end booking flow with availability and reservations.",
    summary:
      "Case study write-up in progress. This project page is a placeholder — full details, architecture notes, and screenshots will be added here.",
    stack: [],
    status: "case-study-pending",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}