import { hasResumeFile } from "@/lib/Resume";
import { NavbarClient } from "./NavbarClient";

/**
 * Server Component boundary so the resume.pdf existence check (a Node.js
 * `fs` call) never has to run in the client bundle. Everything interactive
 * — scroll state, active-section tracking, the mobile menu — lives in
 * NavbarClient.
 */
export function Navbar() {
  return <NavbarClient hasResume={hasResumeFile()} />;
}