import { Article } from "@/types";
import { StoryCard } from "./StoryCard";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";

interface HeroFeaturedStoryProps {
  article: Article;
}

export function HeroFeaturedStory({ article }: HeroFeaturedStoryProps) {
  return (
    <section className="pt-8 md:pt-10 pb-6 md:pb-8 bg-white">
      <Container>
        <div className="card-shell p-2 md:p-3 mb-6">
          <EditorialImage
            src="/assets/hero/homepage-hero.png"
            alt="Howard Newsroom homepage hero visual."
            aspectRatio="wide"
            priority
            sizes="(min-width: 1024px) 78rem, 100vw"
            placeholderText="Homepage hero"
            placeholderLabel="Hero image pending final replacement"
          />
        </div>
        <StoryCard article={article} variant="featured" />
      </Container>
    </section>
  );
}
