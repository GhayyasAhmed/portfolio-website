export type TechStackGroup = {
  /** e.g. "Frontend", "Backend & Realtime" */
  category: string;
  items: string[];
};

export type Project = {
  /** Matches the folder segment under app/projects/[slug] */
  slug: string;
  title: string;
  tagline: string;
  /** Short description used on the homepage project card. */
  summary: string;
  /** Longer description used in the detail page's Overview section. */
  overview: string;
  keyFeatures: string[];
  engineeringHighlights: string[];
  techStack: TechStackGroup[];
  deployment: string;
  /**
   * Live deployment / GitHub repository URLs.
   * `null` means the link isn't available yet — never a fabricated URL.
   * Cards and detail pages render an honest "coming soon" state instead
   * (see components/projects/ProjectLinkButton.tsx).
   */
  liveDemoUrl: string | null;
  githubUrl: string | null;
  /** Unique per-project SEO description — kept distinct from tagline/summary. */
  metaDescription: string;
};

/**
 * Full-stack projects built during the DevWeekends Fellowship.
 *
 * Order here drives both the homepage grid and the sitemap: Multi-Vendor
 * E-Commerce, then LMS, then Hotel Booking.
 *
 * Content reflects only verified capabilities. Real product screenshots and
 * live demo / GitHub URLs aren't available yet, so those stay `null` /
 * placeholder rather than invented.
 */
export const PROJECTS: Project[] = [
  {
    slug: "multi-vendor-ecommerce",
    title: "Multi-Vendor E-Commerce Platform",
    tagline: "Marketplace supporting multiple independent sellers.",
    summary:
      "A full-stack marketplace where independent vendors manage their own storefronts, with real-time order updates and a containerized deployment.",
    overview:
      "A full-stack marketplace that lets multiple independent vendors list products, manage inventory, and fulfill orders under one platform. The core of the build is the application layer: role-based authentication and authorization across buyers, vendors, and admins, a REST API architecture to support each role, and Socket.IO-driven real-time updates for order status and notifications. The app also ships with a containerized deployment pipeline — Docker, Nginx, GitHub Actions, and AWS EC2 — built to get the product running end to end in a production-like environment; that infrastructure work supports the application rather than being the focus of it.",
    keyFeatures: [
      "Multi-vendor storefronts — vendors manage their own product listings, inventory, and orders independently.",
      "Role-based authentication and authorization for buyers, vendors, and admins.",
      "Real-time order and notification updates via Socket.IO.",
      "REST API layer supporting the catalog, cart, checkout, and order flow.",
    ],
    engineeringHighlights: [
      "Designed the backend and API architecture around distinct vendor, buyer, and admin roles.",
      "Implemented real-time communication with Socket.IO for order and status updates.",
      "Applied security practices around authentication, authorization, and API access control.",
      "Containerized the app with Docker and deployed it to AWS EC2 behind Nginx.",
      "Set up a GitHub Actions CI/CD pipeline to automate build and deployment.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Realtime", items: ["Node.js", "Express", "REST APIs", "Socket.IO"] },
      {
        category: "Infrastructure & Deployment",
        items: ["Docker", "AWS EC2", "Nginx", "GitHub Actions CI/CD"],
      },
    ],
    deployment:
      "Deployed to an AWS EC2 instance behind Nginx as a reverse proxy, with the app containerized using Docker for consistent environments. A GitHub Actions pipeline builds and deploys on push. This setup exists to get the product running end to end in production — the engineering focus of the project is the application and API layer, with infrastructure as supporting evidence of shipping it.",
    liveDemoUrl: "https://mercovia.vercel.app",
    githubUrl: "https://github.com/GhayyasAhmed/mern-multi-vendor-ecommerce",
    metaDescription:
      "Case study: a full-stack multi-vendor e-commerce marketplace with role-based auth, real-time Socket.IO updates, and a Dockerized AWS deployment.",
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    tagline: "Platform for courses, enrollment, and progress tracking.",
    summary:
      "A course platform built with Next.js and TypeScript, with role-based access, Stripe-powered enrollment, and SEO-minded course pages.",
    overview:
      "A learning management system for creating, publishing, and enrolling in courses, built with Next.js and TypeScript. Access is role-based: instructors manage course content while students enroll and track their progress, with authentication supporting social sign-in alongside standard email/password login. Paid enrollment runs through Stripe. Because course and catalog pages are meant to be found and read quickly, the build paid close attention to SEO fundamentals and page performance, leaning on Next.js's rendering model to keep both fast.",
    keyFeatures: [
      "Course creation and management for instructors.",
      "Student enrollment and progress tracking.",
      "Role-based access separating instructor and student permissions.",
      "Authentication with support for social sign-in.",
      "Paid course enrollment via Stripe.",
    ],
    engineeringHighlights: [
      "Built on Next.js and TypeScript, using the framework's rendering model for fast, SEO-friendly course pages.",
      "Implemented role-based access control to separate instructor and student capabilities.",
      "Integrated Stripe for course payments and enrollment.",
      "Structured pages and metadata with SEO in mind for course discoverability.",
      "Kept performance in view across course and catalog pages.",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Data", items: ["Node.js", "REST APIs"] },
      { category: "Auth & Payments", items: ["Authentication", "Social Authentication", "Stripe"] },
    ],
    deployment:
      "Deployed on Vercel, which pairs naturally with the Next.js framework this project is built on — builds and previews ship automatically on push, and course pages are served from Vercel's edge network to keep load times low.",
    liveDemoUrl: "https://lms-lac-three.vercel.app",
    githubUrl: "https://github.com/GhayyasAhmed/learning-management-system",
    metaDescription:
      "Case study: a Next.js and TypeScript learning management system with role-based access, Stripe-powered enrollment, and SEO-focused course pages.",
  },
  {
    slug: "hotel-booking-system",
    title: "Hotel Booking System",
    tagline: "End-to-end booking flow with availability and reservations.",
    summary:
      "A full-stack booking application covering property browsing, availability search, and the reservation flow end to end.",
    overview:
      "A full-stack hotel booking application covering the core reservation flow: browsing available properties, checking availability, and completing a booking. It's built on the same React/TypeScript foundation used across these projects, with a Node.js/Express API handling availability and reservation logic.",
    keyFeatures: [
      "Property and room browsing.",
      "Availability search by date.",
      "End-to-end reservation flow, from selection through booking confirmation.",
    ],
    engineeringHighlights: [
      "Implemented the end-to-end booking flow, from availability search through reservation confirmation.",
      "Built the API layer in Node.js/Express to handle availability and booking logic.",
      "Used the same React, TypeScript, and Tailwind CSS foundation as the other Fellowship projects.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    ],
    deployment: "Deployed on Vercel, in line with the other projects in this portfolio.",
    liveDemoUrl: "https://hotel-booking-system-frontend-seven.vercel.app",
    githubUrl: "https://github.com/GhayyasAhmed/hotel-booking-system",
    metaDescription:
      "Case study: a full-stack hotel booking application covering property browsing, availability search, and the end-to-end reservation flow.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}