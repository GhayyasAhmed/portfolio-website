/**
 * Runs synchronously in <head>, before first paint, so the persisted theme
 * preference is applied before the browser renders anything. This is what
 * makes dark-mode-by-default + a light-mode override flash-free. See:
 * node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 */
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}