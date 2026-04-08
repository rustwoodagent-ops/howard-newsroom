import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy",
  description: "Howard Newsroom privacy policy for readers and subscribers.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Section background="white" className="border-b border-neutral-200" rhythm="spacious">
        <Container size="narrow">
          <span className="eyebrow">Policy</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-neutral-600">Effective April 8, 2026.</p>
        </Container>
      </Section>

      <Section background="white" rhythm="compact">
        <Container size="narrow">
          <div className="prose max-w-none">
            <p>
              Howard Newsroom collects limited analytics and operational logs to keep the
              publication reliable and secure. We do not sell personal information.
            </p>
            <h2>What we collect</h2>
            <ul>
              <li>Basic visit analytics (page views, referrer, and device class).</li>
              <li>Contact information you explicitly provide via email outreach.</li>
              <li>Operational logs used for reliability and abuse prevention.</li>
            </ul>
            <h2>How data is used</h2>
            <p>
              Data is used for editorial operations, site performance, and direct communication
              when requested. We do not use reader data for unrelated advertising resale.
            </p>
            <h2>Questions</h2>
            <p>
              Contact <a href="mailto:hello@hdagents.com">hello@hdagents.com</a> for privacy requests.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
