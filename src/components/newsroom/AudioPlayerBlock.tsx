import { Clock, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorialImage } from "@/components/shared/EditorialImage";

interface AudioPlayerBlockProps {
  audioUrl?: string;
  duration?: string;
  title?: string;
  summary?: string;
  coverImage?: string;
  coverAlt?: string;
  className?: string;
}

export function AudioPlayerBlock({
  audioUrl,
  duration = "4:32",
  title = "Listen to this article",
  summary,
  coverImage,
  coverAlt = "Audio cover art",
  className,
}: AudioPlayerBlockProps) {
  return (
    <div className={cn("card-shell p-4 md:p-5", className)}>
      <div className="flex flex-col sm:flex-row gap-4">
        {coverImage && (
          <EditorialImage
            src={coverImage}
            alt={coverAlt}
            aspectRatio="square"
            className="w-full sm:w-28 flex-shrink-0"
            sizes="112px"
            placeholderText="Audio cover"
            placeholderLabel="Cover art pending"
          />
        )}

        <div className="flex-1 min-w-0">
          <p className="eyebrow">Audio Briefing</p>
          <h3 className="mt-1 text-base font-semibold text-neutral-900">{title}</h3>
          {summary && <p className="mt-2 text-sm text-neutral-600">{summary}</p>}
          <div className="mt-3 flex items-center gap-4 text-xs text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5" />
              Howard Newsroom
            </span>
          </div>

          {audioUrl ? (
            <audio className="mt-4 w-full" controls preload="none">
              <source src={audioUrl} />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <p className="mt-4 text-sm text-neutral-500 border border-dashed border-neutral-300 px-3 py-2">
              Audio is being finalized for this item.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
