export interface EditorialSource {
  label: string;
  url: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  kicker?: string;
  subheading: string;
  summary: string;
  content: string;
  category: Category;
  categorySlug: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  heroImage?: string;
  heroAlt?: string;
  heroCaption?: string;
  featured?: boolean;
  trending?: boolean;
  quickSummary: string[];
  audioUrl?: string;
  audioDuration?: string;
  sources?: EditorialSource[];
  tags: string[];
}

export interface Briefing {
  id: string;
  date: string;
  title: string;
  summary: string;
  coverImage?: string;
  coverAlt?: string;
  audioUrl?: string;
  duration: string;
  stories: BriefingStory[];
}

export interface BriefingStory {
  id: string;
  headline: string;
  source: string;
  url?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  color: string;
  featured?: boolean;
}

export interface TopStory {
  id: string;
  headline: string;
  source: string;
  url?: string;
  category: string;
  publishedAt: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
}
