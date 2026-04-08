import { Metadata } from "next";
import Link from "next/link";
import { HeroFeaturedStory } from "@/components/newsroom/HeroFeaturedStory";
import { DailyBriefingStrip } from "@/components/newsroom/DailyBriefingStrip";
import { TopStoriesStrip } from "@/components/newsroom/TopStoriesStrip";
import { StoryGrid } from "@/components/newsroom/StoryGrid";
import { LatestFeed } from "@/components/newsroom/LatestFeed";
import { SectionHeader } from "@/components/newsroom/SectionHeader";
import { ServicesBridge } from "@/components/newsroom/ServicesBridge";
import { AudioPlayerBlock } from "@/components/newsroom/AudioPlayerBlock";
import { Section } from "@/components/shared/Section";
import { getFeaturedArticle, getTrendingArticles, getLatestArticles, getArticlesByCategory } from "@/data/articles";
import { latestBriefing, topStories } from "@/data/briefings";
import { getFeaturedCategories } from "@/data/categories";
import { getPageMetadata } from "@/lib/metadata";
import { formatEditorialDate } from "@/lib/content";

export const metadata: Metadata = getPageMetadata({
  title: "Signal Over Noise",
  description:
    "Curated intelligence on AI, agents, and automation with compact top stories, daily briefings, and practical analysis.",
  path: "/",
});

export default function Home() {
  const featuredArticle = getFeaturedArticle();
  const trendingArticles = getTrendingArticles(4);
  const latestArticles = getLatestArticles(8);
  const featuredCategories = getFeaturedCategories();

  return (
    <>
      {featuredArticle && <HeroFeaturedStory article={featuredArticle} />}

      <DailyBriefingStrip briefing={latestBriefing} />

      <TopStoriesStrip stories={topStories} />

      <Section background="white" rhythm="spacious">
        <SectionHeader 
          eyebrow="Now Briefing"
          title="Featured Coverage"
          subtitle="The clearest execution signals across AI, agents, automation, and platform strategy this week."
          href="/category/ai" 
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <StoryGrid articles={trendingArticles} columns={2} />
          </div>
          <aside className="lg:col-span-4 space-y-5">
            <div className="card-shell p-5">
              <p className="eyebrow">Daily Briefing</p>
              <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                {latestBriefing.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{latestBriefing.summary}</p>
              <p className="mt-3 text-xs text-neutral-500">{formatEditorialDate(latestBriefing.date)} | {latestBriefing.duration}</p>
              <AudioPlayerBlock
                audioUrl={latestBriefing.audioUrl}
                duration={latestBriefing.duration}
                title="Listen now"
                className="mt-4"
              />
            </div>
            <div className="card-shell p-5">
              <h3 className="text-xl font-semibold text-neutral-900">Coverage Lanes</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Move between lane-level reporting without losing editorial context.
              </p>
              <div className="mt-4 space-y-3">
                {featuredCategories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between border-b border-neutral-200 pb-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-neutral-400">-&gt;</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8">
            <LatestFeed articles={latestArticles.slice(0, 5)} />
          </div>
          <div className="lg:col-span-4">
            <SectionHeader title="Category Lanes" subtitle="Each lane is tuned for a different operating question." />
            <div className="space-y-3">
              {featuredCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="card-shell flex items-center justify-between p-4 hover:border-neutral-300 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-neutral-900">{cat.name}</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">{cat.description}</p>
                  </div>
                  <span className="text-neutral-400">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {featuredCategories.slice(0, 2).map((category) => {
        const categoryArticles = getArticlesByCategory(category.slug).slice(0, 3);
        if (categoryArticles.length === 0) return null;
        
        return (
          <Section key={category.slug} background="white" rhythm="compact">
            <SectionHeader 
              title={category.name} 
              subtitle={category.description}
              href={`/category/${category.slug}`}
            />
            <StoryGrid articles={categoryArticles} columns={3} />
          </Section>
        );
      })}

      <Section background="cream" rhythm="compact">
        <div className="card-shell p-6 md:p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="eyebrow">Audio Module</span>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900">Listen to Howard&apos;s Daily Briefing</h2>
            <p className="mt-3 text-neutral-600">
              Compact daily briefings for operators who need the short list, not the noise.
            </p>
          </div>
          <AudioPlayerBlock
            audioUrl={latestBriefing.audioUrl}
            duration={latestBriefing.duration}
            title={latestBriefing.title}
            summary={latestBriefing.summary}
            coverImage={latestBriefing.coverImage}
            coverAlt={latestBriefing.coverAlt}
            className="mt-6"
          />
          <div className="mt-6 text-center">
            <Link href="/briefings" className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
              Browse All Briefings
            </Link>
          </div>
        </div>
      </Section>

      <Section background="white" rhythm="compact">
        <SectionHeader
          title="Why This Newsroom Exists"
          subtitle="Howard Newsroom is built for teams making implementation decisions under time pressure."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-shell p-5">
            <p className="eyebrow">Signal</p>
            <h3 className="mt-2 text-xl font-semibold text-neutral-900">Only Actionable Moves</h3>
            <p className="mt-2 text-sm text-neutral-600">
              We prioritize developments that alter roadmap, cost, risk, or execution leverage.
            </p>
          </div>
          <div className="card-shell p-5">
            <p className="eyebrow">Context</p>
            <h3 className="mt-2 text-xl font-semibold text-neutral-900">From Headline to Implication</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Every story explains what changed, why it matters, and where operators should watch next.
            </p>
          </div>
          <div className="card-shell p-5">
            <p className="eyebrow">Trust</p>
            <h3 className="mt-2 text-xl font-semibold text-neutral-900">Published by Practitioners</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Coverage is shaped by delivery work inside HD Agents, not detached commentary.
            </p>
          </div>
        </div>
      </Section>

      <ServicesBridge />
    </>
  );
}
