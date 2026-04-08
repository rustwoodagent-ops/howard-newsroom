import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryTagProps {
  name: string;
  slug: string;
  variant?: "default" | "light" | "dark";
  size?: "sm" | "default";
}

export function CategoryTag({ name, slug, variant = "default", size = "default" }: CategoryTagProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className={cn(
        "inline-flex items-center font-semibold uppercase tracking-[0.14em] transition-colors",
        size === "sm" && "text-[10px]",
        size === "default" && "text-[11px]",
        variant === "default" && "text-neutral-700 hover:text-neutral-900",
        variant === "light" && "text-neutral-500 hover:text-neutral-900",
        variant === "dark" && "text-white/80 hover:text-white"
      )}
    >
      {name}
    </Link>
  );
}
