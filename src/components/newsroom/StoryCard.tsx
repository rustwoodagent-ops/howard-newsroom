import Link from "next/link";
import { Article } from "@/types";
import { CategoryTag } from "./CategoryTag";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { cn } from "@/lib/utils";
import { formatEditorialDate, formatEditorialDateShort, toArticlePath } from "@/lib/content";

interface StoryCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact" | "horizontal";
  showImage?: boolean;
  className?: string;
}

export function StoryCard({
  article,
  variant = "default",
  showImage = true,
  className,
}: StoryCardProps) {
  if (variant === "featured") {
    return (
      <Link href={toArticlePath(article.slug)} className={cn("group block", className)}>
        <article className="card-shell grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-4 md:p-6">
          {showImage && (
            <div className="relative overflow-hidden bg-neutral-100 lg:col-span-7">
              <div className="aspect-[4/3] lg:aspect-[7/5] relative">
                <EditorialImage
                  src={article.heroImage}
                  alt={article.heroAlt || article.title}
                  aspectRatio="auto"
                  className="h-full w-full"
                  imageClassName="group-hover:scale-[1.015] transition-transform duration-500"
                  priority={Boolean(article.featured)}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  placeholderText="Lead Story Visual"
                  placeholderLabel="Approved lead visual pending final art update"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center py-1 lg:col-span-5">
            <CategoryTag name={article.category.name} slug={article.categorySlug} />
            {article.kicker && <p className="mt-3 text-sm text-neutral-500">{article.kicker}</p>}
            <h2 className="mt-2 text-3xl md:text-[2.35rem] font-semibold text-neutral-900 leading-[1.14] group-hover:text-neutral-600 transition-colors">
              {article.title}
            </h2>
            <p className="mt-3 text-base md:text-lg text-neutral-600 leading-relaxed">
              {article.subheading}
            </p>
            <div className="meta-row mt-5">
              <span>{article.author}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <time dateTime={article.publishedAt}>{formatEditorialDate(article.publishedAt)}</time>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span>{article.readTime} read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={toArticlePath(article.slug)} className={cn("group block", className)}>
        <article className="flex gap-4">
          <div className="flex-1 min-w-0">
            <CategoryTag name={article.category.name} slug={article.categorySlug} size="sm" />
            <h3 className="mt-1 text-sm font-semibold text-neutral-900 leading-snug line-clamp-2 group-hover:text-neutral-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-1 text-xs text-neutral-500">{formatEditorialDateShort(article.publishedAt)}</p>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link href={toArticlePath(article.slug)} className={cn("group block", className)}>
        <article className="flex gap-4">
          {showImage && (
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
              <EditorialImage
                src={article.heroImage}
                alt={article.heroAlt || article.title}
                aspectRatio="square"
                className="h-full w-full"
                sizes="128px"
                placeholderText="Story Thumbnail"
                placeholderLabel="Editorial thumbnail pending"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CategoryTag name={article.category.name} slug={article.categorySlug} />
            <h3 className="mt-1 text-base md:text-lg font-semibold text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
              {article.summary}
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              {formatEditorialDateShort(article.publishedAt)} &middot; {article.readTime} read
            </p>
          </div>
        </article>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={toArticlePath(article.slug)} className={cn("group block", className)}>
      <article className="card-shell p-4 md:p-5 h-full">
        {showImage && (
          <div className="relative overflow-hidden mb-4">
            <EditorialImage
              src={article.heroImage}
              alt={article.heroAlt || article.title}
              aspectRatio="video"
              className="w-full"
              imageClassName="group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(min-width: 1024px) 30vw, 100vw"
              placeholderText="Story Visual"
              placeholderLabel="Approved visual pending final art pass"
            />
          </div>
        )}
        <CategoryTag name={article.category.name} slug={article.categorySlug} />
        <h3 className="mt-3 text-xl md:text-[1.4rem] font-semibold text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-600 line-clamp-3">
          {article.summary}
        </p>
        <p className="mt-4 text-xs text-neutral-500">
          {formatEditorialDateShort(article.publishedAt)} &middot; {article.readTime} read
        </p>
      </article>
    </Link>
  );
}
