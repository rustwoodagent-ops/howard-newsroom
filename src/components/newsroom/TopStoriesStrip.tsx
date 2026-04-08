import Link from "next/link";
import { TopStory } from "@/types";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";

interface TopStoriesStripProps {
  stories: TopStory[];
}

export function TopStoriesStrip({ stories }: TopStoriesStripProps) {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200 py-2.5">
      <Container>
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0 pt-0.5">
            <Newspaper className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Top Stories</span>
          </div>
          <div className="flex-1 overflow-x-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 min-w-0">
              {stories.slice(0, 4).map((story, index) => (
                <Link
                  key={story.id}
                  href={story.url || "#"}
                  target={story.url ? "_blank" : undefined}
                  rel={story.url ? "noopener noreferrer" : undefined}
                  className="group flex items-start sm:items-center gap-2 flex-shrink-0"
                >
                  <span className="text-xs font-medium text-neutral-400 w-4">{index + 1}.</span>
                  <div className="flex items-center gap-1.5">
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 bg-white border border-neutral-200">
                      {story.category}
                    </Badge>
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors line-clamp-1">
                      {story.headline}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
