"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LogoLockup } from "./LogoLockup";
import { X } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-100">
            <LogoLockup size="small" showTagline />
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-neutral-600 hover:text-neutral-900"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    {link.icon && <link.icon className="w-5 h-5 text-neutral-400" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-neutral-100 px-4">
              <Link
                href="/services"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                About
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-neutral-100 bg-neutral-50">
            <p className="text-xs text-neutral-400 text-center">
              Published by HD Agents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
