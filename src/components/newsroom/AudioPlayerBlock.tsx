import { Clock, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { getImagePath } from "@/lib/images";

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
            <div className="mt-4 rounded-xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]">
              <audio className="w-full h-12 [&::-webkit-media-controls-panel]:bg-transparent [&::-webkit-media-controls-current-time-display]:text-neutral-700 [&::-webkit-media-controls-time-remaining-display]:text-neutral-700" controls preload="none">
                <source src={getImagePath(audioUrl)} />
                Your browser does not support the audio element.
              </audio>
            </div>
          ) : (
            <div className="mt-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 px-4 py-3">
              <p className="text-sm text-neutral-600">Audio is being finalized for this item.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
