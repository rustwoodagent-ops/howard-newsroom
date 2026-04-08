import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getArticlesByCategory, getLatestArticles } from "@/data/articles";
import { Container } from "@/components/shared/Container";
import { CategoryHeaderBanner } from "@/components/newsroom/CategoryHeaderBanner";
import { StoryGrid } from "@/components/newsroom/StoryGrid";
import { ServicesBridge } from "@/components/newsroom/ServicesBridge";
import { SectionHeader } from "@/components/newsroom/SectionHeader";
import { LatestFeed } from "@/components/newsroom/LatestFeed";
import { getCategoryMetadata } from "@/lib/metadata";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return getCategoryMetadata(category);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(slug);
  const latestArticles = getLatestArticles(6).filter(
    (item) => item.categorySlug !== category.slug
  );
  const adjacentCategories = categories.filter((item) => item.slug !== category.slug).slice(0, 3);

  return (
    <>
      <CategoryHeaderBanner category={category} storyCount={articles.length} />

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <SectionHeader
            title={`${category.name} Coverage`}
            subtitle="Reporting, analysis, and practical implementation notes from the current newsroom cycle."
          />
          {articles.length > 0 ? (
            <StoryGrid articles={articles} columns={3} />
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-500">No articles found in this category yet.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="py-10 md:py-12 bg-neutral-50 border-y border-neutral-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <LatestFeed
                articles={latestArticles.slice(0, 4)}
                title="Latest Across the Newsroom"
                subtitle="Cross-lane coverage to keep the wider market context in view."
                href="/"
              />
            </div>
            <aside className="lg:col-span-4">
              <SectionHeader
                title="Explore Other Lanes"
                subtitle="Cross into adjacent categories without losing context."
              />
              <div className="space-y-3">
                {adjacentCategories.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/category/${item.slug}`}
                    className="card-shell block p-4 hover:border-neutral-300 transition-colors"
                  >
                    <h3 className="font-semibold text-neutral-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <ServicesBridge />
    </>
  );
}
