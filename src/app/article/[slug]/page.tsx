import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getArticleBySlug, getRelatedArticles, articles } from "@/data/articles";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { CategoryTag } from "@/components/newsroom/CategoryTag";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { AudioPlayerBlock } from "@/components/newsroom/AudioPlayerBlock";
import { QuickSummaryBox } from "@/components/newsroom/QuickSummaryBox";
import { RelatedStories } from "@/components/newsroom/RelatedStories";
import { LatestFeed } from "@/components/newsroom/LatestFeed";
import { ServicesBridge } from "@/components/newsroom/ServicesBridge";
import { getLatestArticles } from "@/data/articles";
import { formatEditorialDate } from "@/lib/content";
import { getArticleMetadata } from "@/lib/metadata";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return getArticleMetadata(article);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);
  const latestArticles = getLatestArticles(6).filter((item) => item.id !== article.id);

  return (
    <>
      <Section background="white" className="pb-0" rhythm="spacious">
        <Container size="narrow">
          {article.kicker && <p className="eyebrow mb-3">{article.kicker}</p>}
          <CategoryTag name={article.category.name} slug={article.categorySlug} />
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.6rem] font-semibold text-neutral-900 leading-[1.08]">
            {article.title}
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-neutral-600 leading-relaxed">
            {article.subheading}
          </p>
          <div className="mt-8 card-shell p-4 md:p-5">
            <div className="meta-row">
              <span className="font-medium text-neutral-900">{article.author}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <time dateTime={article.publishedAt}>{formatEditorialDate(article.publishedAt)}</time>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span>{article.readTime} read</span>
              {article.updatedAt && (
                <>
                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span>Updated {formatEditorialDate(article.updatedAt)}</span>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-6 md:py-8" rhythm="compact">
        <Container size="narrow">
          <div className="card-shell p-3">
            <EditorialImage
              src={article.heroImage}
              alt={article.heroAlt || article.title}
              aspectRatio="video"
              className="w-full"
              priority
              sizes="(min-width: 1024px) 72vw, 100vw"
              placeholderText={article.heroAlt || "Article Hero"}
              placeholderLabel="Approved image pending final license pass"
            />
            <p className="mt-3 text-xs text-neutral-500">
              {article.heroCaption || "Editorial image pending rights-cleared final variant."}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" className="pt-0" rhythm="compact">
        <Container size="narrow">
          {article.audioUrl && (
            <AudioPlayerBlock 
              audioUrl={article.audioUrl} 
              duration={article.audioDuration || article.readTime}
              title="Listen to this article"
              summary={article.summary}
              className="mb-8"
            />
          )}

          <QuickSummaryBox summary={article.summary} bullets={article.quickSummary} />

          <article
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-10 pt-6 border-t border-neutral-200">
            <p className="eyebrow mb-3">Topics</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {article.sources && article.sources.length > 0 && (
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="eyebrow mb-3">Primary Sources</p>
              <ul className="space-y-2">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-700 hover:text-neutral-900 underline decoration-neutral-300 underline-offset-4"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 card-shell p-6 md:p-7">
            <p className="eyebrow">Continue Reading</p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900">Keep your edge with the next brief.</h2>
            <p className="mt-3 text-neutral-600">
              Move from this article to the latest newsroom feed, category archive, or daily audio briefing.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/category/${article.categorySlug}`} className="px-4 py-2.5 border border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">
                More in {article.category.name}
              </Link>
              <Link href="/briefings" className="px-4 py-2.5 border border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">
                Daily Briefings
              </Link>
              <Link href="/" className="px-4 py-2.5 bg-neutral-900 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
                Homepage
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="cream" rhythm="compact">
        <Container>
          <RelatedStories articles={relatedArticles} />
        </Container>
      </Section>

      <Section background="white" rhythm="compact">
        <Container size="narrow">
          <LatestFeed
            articles={latestArticles}
            title="Latest Stories"
            subtitle="Fresh reporting from adjacent lanes."
            href="/"
          />
        </Container>
      </Section>

      <ServicesBridge />
    </>
  );
}
