export type SkillCategory = {
  category: string;
  items: string[];
};

/**
 * Adjust this list so it precisely matches your real, hands-on experience —
 * it's scaffolding based on the stack described in the project brief
 * (frontend/React depth, full-stack via the DevWeekends Fellowship), not a
 * verified résumé.
 */
export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
    ],
  },
  {
    category: "Full-Stack & Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "npm", "Vercel", "VS Code", "Figma"],
  },
];