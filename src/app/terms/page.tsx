import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Terms",
  description: "Howard Newsroom terms of use.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Section background="white" className="border-b border-neutral-200" rhythm="spacious">
        <Container size="narrow">
          <span className="eyebrow">Policy</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-neutral-900">
            Terms of Use
          </h1>
          <p className="mt-4 text-lg text-neutral-600">Effective April 8, 2026.</p>
        </Container>
      </Section>

      <Section background="white" rhythm="compact">
        <Container size="narrow">
          <div className="prose max-w-none">
            <p>
              Howard Newsroom content is provided for informational purposes. It does not
              constitute legal, investment, or regulatory advice.
            </p>
            <h2>Usage</h2>
            <ul>
              <li>You may read and share links to published articles.</li>
              <li>Do not republish full content without written permission.</li>
              <li>Do not misuse the site to disrupt operations or harvest data at scale.</li>
            </ul>
            <h2>Editorial scope</h2>
            <p>
              Coverage is produced to support practical AI decision-making. Opinions are
              editorial and may change as new data emerges.
            </p>
            <h2>Contact</h2>
            <p>
              For permissions or legal requests, contact{" "}
              <a href="mailto:hello@hdagents.com">hello@hdagents.com</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
