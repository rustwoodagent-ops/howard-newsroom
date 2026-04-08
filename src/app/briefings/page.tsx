import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { AudioPlayerBlock } from "@/components/newsroom/AudioPlayerBlock";
import { briefings, latestBriefing } from "@/data/briefings";
import { Calendar, Clock } from "lucide-react";
import { formatEditorialDate } from "@/lib/content";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Daily Briefings",
  description: "Listen to Howard's editorial audio briefings on AI, agents, and automation.",
  path: "/briefings",
});

export default function BriefingsPage() {
  const archivedBriefings = briefings.slice(1);

  return (
    <>
      <Section background="white" className="border-b border-neutral-200" rhythm="spacious">
        <Container size="narrow">
          <span className="eyebrow">Audio</span>
          <h1 className="mt-2 text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-neutral-900">
            Howard Daily Briefings
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Fast editorial audio for operators tracking AI platform shifts, agent execution
            risk, and automation opportunities.
          </p>
        </Container>
      </Section>

      <Section background="white" rhythm="compact">
        <Container size="narrow">
          <span className="eyebrow">Latest Episode</span>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-900">{latestBriefing.title}</h2>
          <div className="flex items-center gap-4 mt-3 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatEditorialDate(latestBriefing.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {latestBriefing.duration}
            </span>
          </div>

          <AudioPlayerBlock
            audioUrl={latestBriefing.audioUrl}
            duration={latestBriefing.duration}
            title={latestBriefing.title}
            summary={latestBriefing.summary}
            coverImage={latestBriefing.coverImage}
            coverAlt={latestBriefing.coverAlt}
            className="mt-6"
          />

          <div className="mt-8 card-shell p-5">
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">Stories in this briefing</h3>
            <ul className="space-y-3">
              {latestBriefing.stories.map((story) => (
                <li key={story.id} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    {story.url ? (
                      <a
                        href={story.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-800 hover:text-neutral-900 underline decoration-neutral-300 underline-offset-4"
                      >
                        {story.headline}
                      </a>
                    ) : (
                      <span className="text-neutral-800">{story.headline}</span>
                    )}
                    <span className="text-neutral-500 ml-2">- {story.source}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section background="cream" rhythm="compact">
        <Container size="narrow">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Recent Episodes</h2>
          <div className="space-y-4">
            {archivedBriefings.map((briefing) => (
              <div key={briefing.id} className="card-shell p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-neutral-900">{briefing.title}</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      {formatEditorialDate(briefing.date)} - {briefing.duration}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500">
                    {briefing.stories.length} linked stories
                  </p>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{briefing.summary}</p>
                <AudioPlayerBlock
                  audioUrl={briefing.audioUrl}
                  duration={briefing.duration}
                  title={briefing.title}
                  coverImage={briefing.coverImage}
                  coverAlt={briefing.coverAlt}
                  className="mt-4"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
