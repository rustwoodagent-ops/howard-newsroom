import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  onClick?: () => void;
}

export function Button({
  children,
  className,
  href,
  variant = "primary",
  size = "default",
  onClick,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variant === "primary" &&
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_1px_0_rgba(0,0,0,0.12)]",
    variant === "secondary" &&
      "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50",
    variant === "ghost" && "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
    size === "default" && "px-5 py-2.5 text-sm",
    size === "sm" && "px-4 py-2 text-sm",
    size === "lg" && "px-6 py-3 text-base",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
