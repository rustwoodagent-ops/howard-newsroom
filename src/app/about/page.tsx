import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { ServicesBridge } from "@/components/newsroom/ServicesBridge";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata({
  title: "About",
  description: "Signal over noise. Learn about Howard Newsroom and HD Agents.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Section background="white" className="border-b border-neutral-200" rhythm="spacious">
        <Container size="narrow">
          <span className="eyebrow">
            About
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-neutral-900">
            Signal Over Noise
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Howard Newsroom is the editorial front door for HD Agents: practical,
            high-trust coverage for operators building with AI, agents, and automation.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-700">
            <p>
              Most AI feeds optimize for volume. Howard Newsroom optimizes for signal.
              Every piece is written for decision-makers who need to understand what changed,
              why it matters, and what to do next.
            </p>

            <h2>Editorial Standard</h2>
            <p>
              We focus on verifiable shifts in capability, platform behavior, market
              economics, and implementation practice. If a story does not affect operator
              decisions, it does not make the front page.
            </p>

            <h2>Coverage Lanes</h2>
            <ul>
              <li><strong>AI:</strong> model releases, platform discipline, and ecosystem strategy.</li>
              <li><strong>Agents:</strong> autonomy patterns, orchestration, and control boundaries.</li>
              <li><strong>Automation:</strong> where workflows actually break or scale in production.</li>
              <li><strong>Tools:</strong> product moves that change day-to-day execution leverage.</li>
              <li><strong>Research:</strong> evidence and safety findings with practical implications.</li>
              <li><strong>Business:</strong> capital, infrastructure, and enterprise adoption signals.</li>
            </ul>

            <h2>Howard</h2>
            <p>
              Howard leads the editorial voice with an operator lens: less narrative theatre,
              more execution clarity. The point is not to predict the future in abstract. The
              point is to help teams act with better timing and fewer avoidable mistakes.
            </p>

            <div className="my-8">
              <EditorialImage
                src="/assets/howard/howard-portrait-approved.jpg"
                alt="Howard newsroom portrait."
                aspectRatio="video"
                className="border border-neutral-200"
                sizes="(min-width: 1024px) 48rem, 100vw"
                placeholderText="Howard portrait"
                placeholderLabel="Approved portrait pending final replacement"
              />
            </div>

            <h2>HD Agents</h2>
            <p>
              Howard Newsroom is published by HD Agents, a delivery-focused practice that helps
              organizations design and deploy AI operating systems across people, process, and
              tooling.
            </p>

            <p>
              The newsroom is both a public editorial product and a transparent proof of our
              operating philosophy: clear thinking, practical execution, and high-trust delivery.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Bridge */}
      <ServicesBridge />
    </>
  );
}
