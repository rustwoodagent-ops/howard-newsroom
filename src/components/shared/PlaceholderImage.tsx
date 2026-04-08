import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  className?: string;
  text?: string;
  aspectRatio?: "video" | "square" | "wide" | "auto";
  label?: string;
}

export function PlaceholderImage({
  className,
  text = "Howard Newsroom Visual Placeholder",
  aspectRatio = "video",
  label = "Replace With Licensed Editorial Asset",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "bg-neutral-100 border border-neutral-300/80 flex items-center justify-center relative overflow-hidden",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "wide" && "aspect-[21/9]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.03),rgba(15,23,42,0)_45%,rgba(15,23,42,0.03))]" />
      <div className="relative text-center px-6">
        <p className="text-neutral-500 text-sm font-medium">{text}</p>
        <p className="placeholder-note mt-2">{label}</p>
      </div>
    </div>
  );
}
