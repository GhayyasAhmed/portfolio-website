export type SkillCategory = {
  category: string;
  items: string[];
};

/**
 * Adjust this list so it precisely matches your real, hands-on experience —
 * it's scaffolding based on the stack described in the project brief
 * (frontend/React depth, full-stack via the DevWeekends Fellowship), not a
 * verified résumé. Categories are intentionally limited to what's actually
 * supported by that stack — don't add a category (e.g. testing/QA tooling)
 * until there's real experience with it to list.
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
    category: "State & Data",
    items: ["REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Infrastructure & Tools",
    items: ["Git & GitHub", "npm", "Vercel", "VS Code", "Figma"],
  },
];