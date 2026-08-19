import { Mail, Code, Globe, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_EMAIL, SOCIAL_LINKS, WHATSAPP_LINK } from "@/lib/constants";

type Channel = {
  label: string;
  href: string;
  icon: typeof Mail;
};

export function Contact() {
  const github = SOCIAL_LINKS.find((link) => link.label === "GitHub")?.href ?? "";
  const linkedin = SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.href ?? "";

  const channels: Channel[] = [
    { label: "Email", href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "", icon: Mail },
    { label: "GitHub", href: github, icon: Code },
    { label: "LinkedIn", href: linkedin, icon: Globe },
    { label: "WhatsApp", href: WHATSAPP_LINK, icon: MessageCircle },
  ];

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <Container className="text-center">
        <SectionHeading
          align="center"
          kicker="Contact"
          title="Let's connect."
          description="Have a project or opportunity in mind? Let's talk."
          className="mx-auto"
        />

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const isActive = Boolean(channel.href);

            if (isActive) {
              const isExternal = channel.href.startsWith("http");
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`Contact via ${channel.label}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface px-4 py-6 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface-hover"
                >
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  {channel.label}
                </a>
              );
            }

            return (
              <div
                key={channel.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border-strong bg-transparent px-4 py-6 text-sm font-medium text-muted"
              >
                <Icon className="size-5 text-muted" aria-hidden="true" />
                {channel.label}
                <span className="text-xs text-muted/70">Coming soon</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}