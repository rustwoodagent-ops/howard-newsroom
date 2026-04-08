import { Article } from "@/types";
import { StoryCard } from "./StoryCard";
import { cn } from "@/lib/utils";

interface StoryGridProps {
  articles: Article[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StoryGrid({ articles, columns = 3, className }: StoryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5 md:gap-6",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {articles.map((article) => (
        <StoryCard key={article.id} article={article} />
      ))}
    </div>
  );
}
