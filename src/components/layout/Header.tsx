"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoLockup } from "./LogoLockup";
import { MobileNav } from "./MobileNav";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { Menu, Headphones, Newspaper } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category/ai", label: "AI" },
  { href: "/category/agents", label: "Agents" },
  { href: "/category/automation", label: "Automation" },
  { href: "/category/tools", label: "Tools" },
  { href: "/top-stories", label: "Top Stories", icon: Newspaper },
  { href: "/briefings", label: "Briefings", icon: Headphones },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="hidden lg:block border-b border-neutral-100">
        <Container>
          <div className="h-9 flex items-center justify-between text-[11px] tracking-[0.12em] uppercase text-neutral-500">
            <span>Howard Newsroom Edition</span>
            <span>AI | Agents | Automation</span>
            <span>Published by HD Agents</span>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex items-center justify-between h-[4.25rem]">
          {/* Logo */}
          <LogoLockup showTagline />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1.5",
                  pathname === link.href
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/services"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium px-4 py-2.5 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="lg:hidden p-2 -mr-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} links={navLinks} />
    </header>
  );
}
