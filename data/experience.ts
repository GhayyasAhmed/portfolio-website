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
 * Professional experience timeline.
 *
 * Only confirmed employment belongs here — the DevWeekends Fellowship is
 * project-based full-stack work, not a job, so it's featured in the
 * Projects section instead (see data/projects.ts) and referenced in About,
 * not listed as an employer here.
 *
 * The entry below reflects only what's confirmed: ~4 years of
 * frontend/React experience. Employer name(s), exact dates, and
 * responsibilities are NOT invented — replace the "TODO" fields with real
 * details (or add more entries) once available. `isPlaceholder` drives the
 * dashed placeholder styling in <Experience>; remove it once an entry is
 * finalized.
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
];