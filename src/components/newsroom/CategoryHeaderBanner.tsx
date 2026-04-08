import { Category } from "@/types";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";

interface CategoryHeaderBannerProps {
  category: Category;
  storyCount?: number;
}

export function CategoryHeaderBanner({ category, storyCount }: CategoryHeaderBannerProps) {
  return (
    <section className="bg-white py-14 md:py-16 border-b border-neutral-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="eyebrow">Category</span>
            <h1 className="mt-2 text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-semibold text-neutral-900">
              {category.name}
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">{category.description}</p>
            <p className="mt-5 text-sm text-neutral-500">
              {storyCount ? `${storyCount} stories in this lane.` : "Coverage focused on practical implementation, not hype cycles."}
            </p>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src={`/assets/categories/${category.slug}.png`}
              alt={`${category.name} category visual`}
              aspectRatio="video"
              className="border border-neutral-200"
              sizes="(min-width: 1024px) 34vw, 100vw"
              placeholderText={`${category.name} category visual`}
              placeholderLabel="Category image pending"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
