import { SITE_NAME, SOCIAL_LINKS, CONTACT_EMAIL, NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocialLinks = SOCIAL_LINKS.filter((link) => link.href);

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">{SITE_NAME}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {year} {SITE_NAME}. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {(visibleSocialLinks.length > 0 || CONTACT_EMAIL) && (
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {visibleSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {CONTACT_EMAIL ? (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Email
              </a>
            ) : null}
          </div>
        )}
      </Container>
    </footer>
  );
}