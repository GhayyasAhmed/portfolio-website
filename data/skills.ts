export type SkillCategory = {
  category: string;
  items: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vite",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },

  {
    category: "State & Data",
    items: [
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
      "API Integration",
      "MongoDB",
      "Redis",
    ],
  },

  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Authentication & Authorization",
      "Role-Based Access Control",
      "Socket.IO",
      "Stripe",
    ],
  },

  {
    category: "Testing & Quality",
    items: [
      "Playwright",
      "React Testing Library",
      "Accessibility",
      "Web Performance",
      "Security",
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "DNS",
      "HTTPS / TLS",
      "Let's Encrypt",
      "Certbot",
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Vercel",
    ],
  },
];