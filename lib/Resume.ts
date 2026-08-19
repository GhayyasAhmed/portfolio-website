import fs from "node:fs";
import path from "node:path";

/**
 * Checks whether public/resume.pdf has actually been added, so the UI can
 * show a real download link or gracefully omit it — instead of linking to
 * a file that doesn't exist, or fabricating resume content.
 */
export function hasResumeFile(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));
  } catch {
    return false;
  }
}