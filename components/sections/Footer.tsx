import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocialLinks = SOCIAL_LINKS.filter((link) => link.href);

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {/* <p className="font-display text-sm font-semibold text-foreground">{SITE_NAME}</p> */}
          <p className="mt-1 text-sm text-muted">
            &copy; {year} {SITE_NAME}
          </p>
        </div>

        {/* <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav> */}

        {(visibleSocialLinks.length > 0 || CONTACT_EMAIL) && (
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {CONTACT_EMAIL ? (
              <TrackedLink
                href={`mailto:${CONTACT_EMAIL}`}
                event="Contact Click"
                eventData={{ channel: "Email", location: "footer" }}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Email
              </TrackedLink>
            ) : null}
            {visibleSocialLinks.map((link) => (
              <TrackedLink
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                event="Social Click"
                eventData={{ channel: link.label, location: "footer" }}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </TrackedLink>
            ))}           
          </div>
        )}
      </Container>
    </footer>
  );
}
