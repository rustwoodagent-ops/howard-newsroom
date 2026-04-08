import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "default" | "narrow" | "wide";
  background?: "white" | "cream" | "dark";
  rhythm?: "compact" | "comfortable" | "spacious";
}

export function Section({
  children,
  className,
  containerClassName,
  size = "default",
  background = "white",
  rhythm = "comfortable",
}: SectionProps) {
  return (
    <section
      className={cn(
        rhythm === "compact" && "py-10 md:py-12",
        rhythm === "comfortable" && "py-12 md:py-16 lg:py-[4.5rem]",
        rhythm === "spacious" && "py-14 md:py-20 lg:py-24",
        background === "white" && "bg-white",
        background === "cream" && "bg-neutral-50",
        background === "dark" && "bg-neutral-900 text-white",
        className
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
