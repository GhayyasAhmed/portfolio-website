"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Reads the theme straight from the `data-theme` attribute the anti-flash
 * script (and this component's own toggle) set on <html> — the DOM
 * attribute is the single source of truth, so this can never drift out of
 * sync with what's actually on screen.
 *
 * useSyncExternalStore (rather than useState+useEffect) is what makes this
 * hydration-safe without a manual setState-in-effect: React renders
 * `getServerSnapshot` on the server and during the initial client render,
 * then re-syncs to the real DOM value right after hydration commits.
 */
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-hover"
    >
      {theme === "light" ? (
        <Moon className="size-4" aria-hidden="true" />
      ) : (
        <Sun className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}