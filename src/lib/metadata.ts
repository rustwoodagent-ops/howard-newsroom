import { Metadata } from "next";
import { Article, Category } from "@/types";
import { toArticlePath } from "@/lib/content";

const SITE_NAME = "Howard Newsroom";
const SITE_DESCRIPTION =
  "Signal over noise. Curated intelligence on AI, agents, and automation from Howard and HD Agents.";
const DEFAULT_SOCIAL_IMAGE = "/assets/social/social-base-approved.jpg";

export const FALLBACK_SITE_URL = "https://rustwoodagent-ops.github.io/howard-newsroom";

function resolveSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL;
}

function absoluteUrl(path: string) {
  return new URL(path, resolveSiteUrl()).toString();
}

export function getBaseMetadata(): Metadata {
  const siteUrl = resolveSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${SITE_NAME} | Signal Over Noise`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: SITE_NAME,
      title: `${SITE_NAME} | Signal Over Noise`,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: DEFAULT_SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: "Howard Newsroom",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} | Signal Over Noise`,
      description: SITE_DESCRIPTION,
      images: [DEFAULT_SOCIAL_IMAGE],
      creator: "@hdagents",
    },
    icons: {
      icon: [{ url: "/assets/logos/howard-logo-approved.jpg", type: "image/jpeg" }],
      apple: [{ url: "/assets/logos/howard-logo-approved.jpg", type: "image/jpeg" }],
      shortcut: [{ url: "/favicon.ico" }],
    },
  };
}

export function getPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: "Howard Newsroom",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_SOCIAL_IMAGE],
    },
  };
}

export function getCategoryMetadata(category: Category): Metadata {
  const image = `/assets/categories/${category.slug}.png`;

  return {
    ...getPageMetadata({
      title: category.name,
      description: category.description,
      path: `/category/${category.slug}`,
    }),
    openGraph: {
      type: "website",
      title: `${category.name} | ${SITE_NAME}`,
      description: category.description,
      url: absoluteUrl(`/category/${category.slug}`),
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${category.name} category`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | ${SITE_NAME}`,
      description: category.description,
      images: [image],
    },
  };
}

export function getArticleMetadata(article: Article): Metadata {
  const path = toArticlePath(article.slug);
  const articleUrl = absoluteUrl(path);
  const articleImage = article.heroImage || DEFAULT_SOCIAL_IMAGE;

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: path,
    },
    keywords: article.tags,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: articleUrl,
      siteName: SITE_NAME,
      publishedTime: article.publishedAt,
      authors: [article.author],
      tags: article.tags,
      section: article.category.name,
      images: [
        {
          url: articleImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [articleImage],
    },
  };
}
