import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

export function Contact() {
  const visibleSocialLinks = SOCIAL_LINKS.filter((link) => link.href);

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <Container className="text-center">
        <SectionHeading
          align="center"
          kicker="Contact"
          title="Let's work together."
          description="Open to full-stack and frontend-focused roles. The fastest way to reach me is email."
          className="mx-auto"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {CONTACT_EMAIL ? (
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="primary">
              <Mail className="size-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </ButtonLink>
          ) : (
            <p className="rounded-lg border border-dashed border-border-strong px-5 py-2.5 text-sm text-muted">
              Add a contact email in lib/constants.ts to activate this button.
            </p>
          )}

          {visibleSocialLinks.map((link) => (
            <ButtonLink key={link.label} href={link.href} variant="secondary" target="_blank">
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}