import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Static CSP (no middleware/nonces) so every route stays statically
 * generated. This is a zero-input static portfolio — no forms, no CMS, no
 * user-generated content — so the marginal gain from per-request nonces
 * isn't worth trading away static rendering. 'unsafe-inline' only covers
 * what this app actually inlines: the anti-flash theme script
 * (components/theme/ThemeScript.tsx), the JSON-LD blocks, and next/font's
 * generated @font-face <style> tags — all author-controlled, never user
 * input. next/font self-hosts Google Fonts at build time, so no external
 * font-src is needed. Vercel Analytics loads/posts to same-origin
 * `/_vercel/insights/*`, so 'self' covers it — no extra connect-src host.
 */
const ContentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;