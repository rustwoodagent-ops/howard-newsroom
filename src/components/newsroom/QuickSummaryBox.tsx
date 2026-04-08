import { FileText } from "lucide-react";

interface QuickSummaryBoxProps {
  summary: string;
  bullets?: string[];
}

export function QuickSummaryBox({ summary, bullets = [] }: QuickSummaryBoxProps) {
  return (
    <aside className="bg-neutral-50 border border-neutral-200 p-5 md:p-6 my-8">
      <div className="flex items-center gap-2 mb-2">
        <FileText className="w-4 h-4 text-neutral-600" />
        <h3 className="text-sm font-semibold text-neutral-800 uppercase tracking-[0.12em]">Quick Summary</h3>
      </div>
      <p className="text-neutral-700 leading-relaxed">{summary}</p>
      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {bullets.map((item) => (
            <li key={item} className="text-sm text-neutral-700 flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
