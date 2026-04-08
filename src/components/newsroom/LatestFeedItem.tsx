import Link from "next/link";
import { Article } from "@/types";
import { CategoryTag } from "./CategoryTag";
import { formatEditorialDateShort, toArticlePath } from "@/lib/content";

interface LatestFeedItemProps {
  article: Article;
}

export function LatestFeedItem({ article }: LatestFeedItemProps) {
  return (
    <Link href={toArticlePath(article.slug)} className="group block py-5 border-b border-neutral-200 last:border-b-0">
      <article className="flex gap-4 items-start">
        <div className="flex-1 min-w-0">
          <CategoryTag name={article.category.name} slug={article.categorySlug} size="sm" />
          <h3 className="mt-2 text-lg font-semibold text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
            {article.summary}
          </p>
          <p className="mt-3 text-xs text-neutral-400">
            <time dateTime={article.publishedAt}>{formatEditorialDateShort(article.publishedAt)}</time> &middot; {article.readTime} read
          </p>
        </div>
      </article>
    </Link>
  );
}
