export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  /** True while org/period/summary are still placeholders, not real content. */
  isPlaceholder?: boolean;
};

/**
 * Experience timeline data.
 *
 * The two entries below reflect only what's confirmed: ~4 years of
 * frontend/React experience, and a recent expansion into full-stack work
 * through the DevWeekends Fellowship. Employer names, exact dates, and
 * responsibilities are NOT invented — replace the "TODO" fields with real
 * details (or add/remove entries) before this goes live. `isPlaceholder`
 * drives the dashed placeholder styling in <ExperienceSection>; remove it
 * once an entry is finalized.
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "frontend-react",
    role: "Frontend / React Developer",
    organization: "TODO — add employer or client name(s)",
    period: "TODO — add date range (~4 years professional experience)",
    summary:
      "TODO — describe your day-to-day responsibilities, the products you worked on, and notable contributions.",
    isPlaceholder: true,
  },
  {
    id: "devweekends-fellowship",
    role: "Full-Stack Developer",
    organization: "DevWeekends Fellowship",
    period: "TODO — add date range",
    summary:
      "Expanded from frontend into full-stack development, shipping production-oriented projects end to end. TODO — add specifics once finalized.",
    isPlaceholder: true,
  },
];