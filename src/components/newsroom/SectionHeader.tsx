import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  href?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, eyebrow, href, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6 md:mb-8", className)}>
      {eyebrow && <span className="eyebrow mb-2">{eyebrow}</span>}
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-[1.9rem] md:text-[2.15rem] font-semibold leading-tight text-neutral-900">{title}</h2>
        {href && (
          <Link
            href={href}
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      {subtitle && (
        <p className="mt-2 text-[15px] text-neutral-600 max-w-3xl">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-full bg-neutral-200" />
    </div>
  );
}
