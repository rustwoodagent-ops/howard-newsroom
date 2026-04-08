import { Article } from "@/types";
import { LatestFeedItem } from "./LatestFeedItem";
import { SectionHeader } from "./SectionHeader";

interface LatestFeedProps {
  articles: Article[];
  title?: string;
  subtitle?: string;
  href?: string;
}

export function LatestFeed({
  articles,
  title = "Latest Coverage",
  subtitle = "Fresh reporting and analysis from Howard Newsroom.",
  href = "/category/ai",
}: LatestFeedProps) {
  return (
    <div>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        href={href}
      />
      <div className="card-shell px-5 md:px-6 divide-y divide-neutral-100">
        {articles.map((article) => (
          <LatestFeedItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
