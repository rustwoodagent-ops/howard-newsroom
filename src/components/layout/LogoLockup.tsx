import Link from "next/link";
import Image from "next/image";

interface LogoLockupProps {
  showTagline?: boolean;
  size?: "default" | "small" | "large";
  withMark?: boolean;
}

export function LogoLockup({
  showTagline = false,
  size = "default",
  withMark = true,
}: LogoLockupProps) {
  const textSizes = {
    small: "text-lg",
    default: "text-xl",
    large: "text-[1.65rem]",
  };

  const taglineSizes = {
    small: "text-[10px]",
    default: "text-xs",
    large: "text-sm",
  };

  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Howard Newsroom home">
      {withMark && (
        <span className="relative inline-flex h-9 w-9 items-center justify-center border border-neutral-300 bg-white overflow-hidden">
          <Image
            src="/assets/logos/howard-logo-approved.jpg"
            alt="Howard Newsroom logo"
            fill
            unoptimized
            sizes="36px"
            className="object-cover"
          />
        </span>
      )}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0.5 leading-none">
          <span className={`${textSizes[size]} font-heading font-semibold tracking-tight text-neutral-900`}>
            Howard
          </span>
          <span className={`${textSizes[size]} font-heading font-normal tracking-tight text-neutral-600`}>
            Newsroom
          </span>
        </div>
        {showTagline && (
          <span className={`${taglineSizes[size]} text-neutral-500 font-semibold tracking-[0.15em] uppercase`}>
            Signal Over Noise
          </span>
        )}
      </div>
    </Link>
  );
}
