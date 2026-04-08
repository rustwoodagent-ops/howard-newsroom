import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "ai",
    name: "AI",
    description:
      "Model launches, platform strategy, and capability shifts that materially change how teams build.",
    color: "#1a1a1a",
    featured: true,
  },
  {
    id: "cat-2",
    slug: "agents",
    name: "Agents",
    description:
      "Autonomous systems, orchestration patterns, and risk controls for real agent deployment.",
    color: "#2d2d2d",
    featured: true,
  },
  {
    id: "cat-3",
    slug: "automation",
    name: "Automation",
    description:
      "Workflow execution, voice operations, and operational rollouts where reliability matters.",
    color: "#3d3d3d",
    featured: true,
  },
  {
    id: "cat-4",
    slug: "tools",
    name: "Tools",
    description:
      "Product updates and platform moves across developer, productivity, and multimodal stacks.",
    color: "#4d4d4d",
    featured: true,
  },
  {
    id: "cat-5",
    slug: "research",
    name: "Research",
    description:
      "Safety studies, technical evidence, and governance signals that affect deployment posture.",
    color: "#5d5d5d",
    featured: false,
  },
  {
    id: "cat-6",
    slug: "business",
    name: "Business",
    description:
      "Capital flows, infrastructure spend, and enterprise economics shaping the AI market.",
    color: "#6d6d6d",
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}
