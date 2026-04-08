import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { LogoLockup } from "./LogoLockup";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  sections: [
    { href: "/category/ai", label: "AI" },
    { href: "/category/agents", label: "Agents" },
    { href: "/category/automation", label: "Automation" },
    { href: "/category/tools", label: "Tools" },
    { href: "/category/research", label: "Research" },
    { href: "/category/business", label: "Business" },
  ],
  resources: [
    { href: "/briefings", label: "Daily Briefings" },
    { href: "/top-stories", label: "Top Stories" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ],
  connect: [
    { href: "mailto:hello@hdagents.com", label: "Email" },
    { href: "https://www.linkedin.com/company/hd-agents", label: "LinkedIn" },
    { href: "https://x.com/hdagents", label: "X" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <Container>
        <div className="py-12 md:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                <LogoLockup showTagline size="small" />
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Signal over noise. Curated intelligence on AI, agents, and automation for professionals who need to stay ahead.
                </p>
                <p className="text-xs text-neutral-500 uppercase tracking-[0.12em]">
                  Published by HD Agents
                </p>
              </div>
            </div>

            {/* Sections */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Sections
              </h3>
              <ul className="space-y-2">
                {footerLinks.sections.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-neutral-200" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} HD Agents. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
