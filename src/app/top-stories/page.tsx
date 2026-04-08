import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { topStories } from "@/data/briefings";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { getPageMetadata } from "@/lib/metadata";
import { formatEditorialDateShort } from "@/lib/content";
import { EditorialImage } from "@/components/shared/EditorialImage";

export const metadata: Metadata = getPageMetadata({
  title: "Top Stories",
  description: "Important world and public interest news curated for busy professionals.",
  path: "/top-stories",
});

export default function TopStoriesPage() {
  return (
    <>
      <Section background="white" className="border-b border-neutral-200" rhythm="spacious">
        <Container size="narrow">
          <div className="flex items-center gap-3 mb-4">
            <span className="eyebrow">
              News
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-neutral-900">
            Top Stories
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            A selective scan of macro, policy, and institutional stories that shape
            AI execution risk, operating costs, and market context.
          </p>
          <div className="mt-8">
            <EditorialImage
              src="/assets/hero/top-stories-banner.png"
              alt="Top Stories banner visual for Howard Newsroom."
              aspectRatio="wide"
              className="border border-neutral-200"
              priority
              sizes="(min-width: 1024px) 72vw, 100vw"
              placeholderText="Top Stories banner"
              placeholderLabel="Banner image pending final asset package"
            />
          </div>
        </Container>
      </Section>

      {/* Stories List */}
      <Section background="white" rhythm="compact">
        <Container size="narrow">
          <div className="space-y-6">
            {topStories.map((story, index) => (
              <a
                key={story.id}
                href={story.url || "#"}
                target={story.url ? "_blank" : undefined}
                rel={story.url ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 p-4 bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all"
                >
                  <span className="text-2xl font-bold text-neutral-300 group-hover:text-neutral-500 transition-colors w-8 flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs bg-neutral-50 border border-neutral-200">
                        {story.category}
                      </Badge>
                      <span className="text-xs text-neutral-400">
                        {formatEditorialDateShort(story.publishedAt)}
                      </span>
                    </div>
                  <h2 className="font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {story.headline}
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1">{story.source}</p>
                </div>
                {story.url && (
                  <ExternalLink className="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 flex-shrink-0" />
                )}
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
