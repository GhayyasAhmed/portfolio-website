export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  isPlaceholder?: boolean;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "kachyng",
    role: "Front-End Engineer",
    organization: "Kachyng Inc",
    period: "Feb 2024 – Feb 2026",
    summary:
      "Built and optimized production React and TypeScript payment workflows, improving checkout performance, reducing frontend bundle size, refactoring complex modules into reusable components, strengthening API type contracts, and adding Playwright E2E coverage for critical payment flows.",
  },
  {
    id: "auxin-security",
    role: "Front-End Engineer",
    organization: "Auxin Security",
    period: "Jun 2022 – Jan 2024",
    summary:
      "Built React-based cybersecurity SaaS dashboards using Redux Toolkit, RTK Query, and REST APIs; developed reusable Material UI components, authentication and token-refresh flows, RBAC-aware interfaces, Socket.IO real-time updates, and migrated applications from CRA to Vite.",
  },
];