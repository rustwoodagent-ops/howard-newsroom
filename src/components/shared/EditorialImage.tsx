import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { getImagePath } from "@/lib/images";

interface EditorialImageProps {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: "video" | "square" | "wide" | "auto";
  priority?: boolean;
  sizes?: string;
  placeholderText?: string;
  placeholderLabel?: string;
}

export function EditorialImage({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "video",
  priority = false,
  sizes = "100vw",
  placeholderText = "Editorial Visual",
  placeholderLabel = "Approved visual pending final rights-cleared variant",
}: EditorialImageProps) {
  if (!src) {
    return (
      <PlaceholderImage
        className={className}
        text={placeholderText}
        label={placeholderLabel}
        aspectRatio={aspectRatio}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "wide" && "aspect-[21/9]",
        className
      )}
    >
      <Image
        src={getImagePath(src)}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
