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
    tagline:
      "Production-oriented marketplace with role-based workflows, real-time communication, payments, and cloud deployment.",
    summary:
      "A full-stack multi-vendor marketplace where independent vendors manage products and orders, buyers complete purchases through Stripe, and users receive real-time updates through Socket.IO. The application is containerized and deployed on AWS EC2 with Nginx, HTTPS, MongoDB, Redis, and GitHub Actions CI/CD.",
    overview:
      "A full-stack multi-vendor marketplace where buyers, vendors, and administrators interact through distinct role-based workflows. The application combines a React and TypeScript frontend with a Node.js/Express API, MongoDB, Redis, Socket.IO-based real-time communication, authentication and authorization, and Stripe-powered payments. The application was containerized with Docker and deployed to AWS EC2 behind Nginx, with separate HTTPS endpoints for the frontend, backend API, and real-time socket service. MongoDB is self-hosted on AWS EC2 with persistent storage, while GitHub Actions provides the CI/CD workflow.",
    keyFeatures: [
      "Multi-vendor storefronts with independent product and order management.",
      "Role-based authentication and authorization for buyers, vendors, and administrators.",
      "Real-time order and notification updates using Socket.IO.",
      "REST API architecture supporting catalog, cart, checkout, and order workflows.",
      "Stripe payment integration.",
      "Redis-backed application functionality where required by the real-time architecture.",
      "Production HTTPS endpoints for the frontend, backend API, and Socket.IO service.",
    ],
    engineeringHighlights: [
      "Designed frontend workflows around distinct buyer, vendor, and administrator roles.",
      "Implemented authentication, authorization, and role-based access control across the application.",
      "Integrated Socket.IO for real-time order and status communication.",
      "Built and integrated REST APIs for the application's core business workflows.",
      "Containerized the frontend, backend, and socket-relay services using Docker and Docker Compose.",
      "Deployed the application services to AWS EC2 and used Nginx as a reverse proxy.",
      "Deployed MongoDB on AWS EC2 with persistent storage and internal networking.",
      "Configured Redis as an internal service without exposing it publicly.",
      "Configured custom domains for the frontend, backend API, and socket-relay service.",
      "Configured HTTPS using Let's Encrypt and Certbot, including secure WSS communication for Socket.IO.",
      "Configured Nginx for WebSocket upgrade and proxying between the public socket endpoint and the socket-relay service.",
      "Implemented GitHub Actions CI/CD for automated application deployment.",
      "Applied production security practices including restricted network ports, environment-variable management, internal database access, and HTTPS.",
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
      {
        category: "Database & Infrastructure",
        items: ["MongoDB", "Redis"],
      },
      {
        category: "Realtime",
        items: ["Socket.IO"],
      },
      {
        category: "Payments",
        items: ["Stripe"],
      },
      {
        category: "Cloud & Deployment",
        items: [
          "AWS EC2",
          "Docker",
          "Docker Compose",
          "Nginx",
          "GitHub Actions",
        ],
      },
      {
        category: "Security & Networking",
        items: ["HTTPS", "TLS", "Let's Encrypt", "Certbot", "WebSockets/WSS"],
      },
    ],
    imageUrl: "/multi_vendor_ecommerce_app.webp",
    deployment:
      "Containerized and deployed on AWS EC2 using Docker and Docker Compose. Nginx acts as the reverse proxy for the frontend, backend API, and Socket.IO service. MongoDB runs on the AWS infrastructure with persistent storage, while Redis remains internal to the application network. Custom domains are secured with HTTPS using Let's Encrypt/Certbot, including WSS for real-time communication. GitHub Actions provides the CI/CD workflow.",
    liveDemoUrl: "https://mercovia.online",
    githubUrl: "https://github.com/GhayyasAhmed/mern-multi-vendor-ecommerce/tree/feature/ssl-domains-deployment",
    metaDescription:
      "Production-oriented multi-vendor e-commerce platform built with React, TypeScript, Node.js, Express, MongoDB, Redis, Socket.IO, Stripe, Docker, AWS EC2, Nginx, HTTPS, and GitHub Actions CI/CD.",
  },

  {
    slug: "learning-management-system",
    title: "Learning Management System",
    tagline:
      "Course platform with role-based access, payments, social authentication, and SEO-focused pages.",
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
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}