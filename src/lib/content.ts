import { categories } from "@/data/categories";
import { Article } from "@/types";

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const DATE_SHORT_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

function toDisplayDate(date: string): Date {
  const [year, month, day] = date.split("-").map((value) => Number(value));
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

export function formatEditorialDate(date: string): string {
  return DATE_FORMATTER.format(toDisplayDate(date));
}

export function formatEditorialDateShort(date: string): string {
  return DATE_SHORT_FORMATTER.format(toDisplayDate(date));
}

export function sortArticlesByDate(items: Article[]): Article[] {
  return [...items].sort(
    (a, b) =>
      toDisplayDate(b.publishedAt).getTime() - toDisplayDate(a.publishedAt).getTime()
  );
}

export function ensureArticleCategory(article: Article): Article {
  const matchedCategory = categories.find((category) => category.slug === article.categorySlug);

  if (!matchedCategory) {
    return article;
  }

  return {
    ...article,
    category: matchedCategory,
  };
}

export function toArticlePath(slug: string): string {
  return `/article/${slug}`;
}
