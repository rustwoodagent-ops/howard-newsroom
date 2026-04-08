import { Article } from "@/types";
import { StoryCard } from "./StoryCard";
import { SectionHeader } from "./SectionHeader";

interface RelatedStoriesProps {
  articles: Article[];
}

export function RelatedStories({ articles }: RelatedStoriesProps) {
  if (articles.length === 0) return null;

  return (
    <div>
      <SectionHeader title="Related Stories" subtitle="More reporting in this coverage lane." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <StoryCard key={article.id} article={article} variant="compact" showImage={false} className="card-shell p-4" />
        ))}
      </div>
    </div>
  );
}
