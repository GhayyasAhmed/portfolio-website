export type TechStackGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  overview: string;
  keyFeatures: string[];
  engineeringHighlights: string[];
  techStack: TechStackGroup[];
  imageUrl?: string;
  deployment: string;
  liveDemoUrl: string | null;
  githubUrl: string | null;
  metaDescription: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "multi-vendor-ecommerce",
    title: "Multi-Vendor E-Commerce Platform",
    tagline: "Full-stack marketplace with role-based workflows and real-time updates.",
    summary:
      "A production oriented marketplace where independent vendors manage products and orders, supported by role-based access, real-time communication, and an automated deployment pipeline.",
    overview:
      "A full-stack multi-vendor marketplace where buyers, vendors, and administrators interact through distinct role-based workflows. The application combines a React frontend with a Node.js/Express API, authentication and authorization, Socket.IO-based real-time communication, and Stripe-powered payments. The project was also taken through a production-oriented deployment workflow using Docker, Nginx, AWS EC2, and GitHub Actions CI/CD.",
    keyFeatures: [
      "Multi-vendor storefronts with independent product and order management.",
      "Role-based authentication and authorization for buyers, vendors, and administrators.",
      "Real-time order and notification updates using Socket.IO.",
      "REST API architecture supporting catalog, cart, checkout, and order workflows.",
      "Stripe payment integration.",
    ],
    engineeringHighlights: [
      "Designed frontend workflows around distinct buyer, vendor, and administrator roles.",
      "Implemented authentication, authorization, and role-based access control across the application.",
      "Integrated Socket.IO for real-time order and status communication.",
      "Built and integrated REST APIs for the application's core business workflows.",
      "Containerized the application with Docker and deployed it to AWS EC2 behind Nginx.",
      "Automated deployment through GitHub Actions CI/CD.",
      "Applied security considerations across authentication, authorization, API access, and deployment.",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & Realtime",
        items: ["Node.js", "Express", "REST APIs", "Socket.IO"],
      },
      {
        category: "Payments",
        items: ["Stripe"],
      },
      {
        category: "Deployment",
        items: ["Docker", "AWS EC2", "Nginx", "GitHub Actions"],
      },
    ],
    imageUrl: "/multi_vendor_ecommerce_app.webp",
    deployment:
      "Deployed using Docker on AWS EC2 behind Nginx, with GitHub Actions handling the CI/CD workflow. The infrastructure demonstrates the ability to take a full-stack application beyond local development and deploy it through an automated production-oriented workflow.",
    liveDemoUrl: "https://mercovia.vercel.app",
    githubUrl: "https://github.com/GhayyasAhmed/mern-multi-vendor-ecommerce",
    metaDescription:
      "Full-stack multi-vendor e-commerce platform built with React, TypeScript, Node.js, Socket.IO, Stripe, Docker, AWS EC2, and GitHub Actions.",
  },

  {
    slug: "learning-management-system",
    title: "Learning Management System",
    tagline: "Course platform with role-based access, payments, and SEO-focused pages.",
    summary:
      "A Next.js and TypeScript learning platform for course management and enrollment, with role-based access, social authentication, Stripe payments, SEO, and performance considerations.",
    overview:
      "A learning management system built with Next.js and TypeScript for instructors and students. Instructors can manage course content while students can discover, enroll in, and track courses. The application includes authentication and social authentication, role-based access, Stripe-powered payments, and SEO-focused course and catalog pages.",
    keyFeatures: [
      "Course creation and management for instructors.",
      "Student enrollment and progress tracking.",
      "Role-based access separating instructor and student capabilities.",
      "Email/password and social authentication.",
      "Stripe-powered course payments.",
      "SEO-focused course and catalog pages.",
    ],
    engineeringHighlights: [
      "Built the frontend with Next.js and TypeScript.",
      "Implemented role-based access control for instructor and student workflows.",
      "Integrated social authentication alongside standard authentication.",
      "Integrated Stripe for paid course enrollment.",
      "Structured pages and metadata with SEO and discoverability in mind.",
      "Optimized the application with a focus on performance and efficient rendering.",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & API",
        items: ["Node.js", "REST APIs"],
      },
      {
        category: "Authentication",
        items: ["Authentication", "Social Authentication", "RBAC"],
      },
      {
        category: "Payments",
        items: ["Stripe"],
      },
    ],
    imageUrl: "/learning_management_system.webp",
    deployment:
      "Deployed on Vercel with automated builds and deployments. The project uses Next.js's rendering capabilities to support fast, SEO-friendly application pages.",
    liveDemoUrl: "https://lms-lac-three.vercel.app",
    githubUrl: "https://github.com/GhayyasAhmed/learning-management-system",
    metaDescription:
      "Next.js and TypeScript learning management system with role-based access, social authentication, Stripe payments, SEO, and performance optimization.",
  },

  {
    slug: "hotel-booking-system",
    title: "Hotel Booking System",
    tagline: "Full-stack hotel reservation application.",
    summary:
      "A full-stack hotel booking application covering property discovery, availability search, and the reservation workflow.",
    overview:
      "A full-stack hotel booking application developed as part of the DevWeekends Fellowship. The project covers the core hotel reservation experience, including browsing properties, searching availability, selecting accommodation, and completing bookings.",
    keyFeatures: [
      "Hotel and room browsing.",
      "Availability search based on booking dates.",
      "Room selection and reservation workflow.",
      "Booking confirmation flow.",
    ],
    engineeringHighlights: [
      "Built the application using React and TypeScript.",
      "Implemented the end-to-end hotel reservation workflow.",
      "Integrated the frontend with a Node.js and Express backend API.",
      "Handled availability and booking-related application flows.",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & API",
        items: ["Node.js", "Express", "REST APIs"],
      },
    ],
    imageUrl: "/hotel_booking_system.webp",
    deployment:
      "Deployed on Vercel with separate frontend and backend application components.",
    liveDemoUrl: "https://hotel-booking-system-frontend-seven.vercel.app",
    githubUrl: "https://github.com/GhayyasAhmed/hotel-booking-system",
    metaDescription:
      "Full-stack hotel booking application built with React, TypeScript, Node.js, and Express, covering availability and reservation workflows.",
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}