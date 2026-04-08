import Link from "next/link";
import { Briefing } from "@/types";
import { Container } from "@/components/shared/Container";
import { Headphones, Play, Clock, ArrowRight } from "lucide-react";
import { formatEditorialDateShort } from "@/lib/content";

interface DailyBriefingStripProps {
  briefing: Briefing;
}

export function DailyBriefingStrip({ briefing }: DailyBriefingStripProps) {
  return (
    <section className="bg-neutral-900 text-white py-3.5">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-500">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-400">
                Daily Briefing | {formatEditorialDateShort(briefing.date)}
              </p>
              <h2 className="text-sm font-semibold text-white mt-0.5">{briefing.title}</h2>
              <p className="text-xs text-neutral-400 line-clamp-1">{briefing.summary}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{briefing.duration}</span>
            </div>
            <Link
              href="/briefings"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <Play className="w-4 h-4" />
              Listen
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
