"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "HOME" },
  { href: "/chi-siamo", label: "CHI SIAMO" },
  { href: "/growth-academy", label: "ACADEMY" },
  { href: "/news", label: "NEWS" },
  { href: "/contatti", label: "CONTATTI" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gg-orange/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/gg-logo-bianco-trasp-150px.png"
            alt="Growth Gaming"
            width={150}
            height={31}
            className="h-auto w-[120px] sm:w-[150px] group-hover:drop-shadow-[0_0_12px_rgba(255,107,0,0.5)] transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 font-display text-xs font-semibold tracking-widest transition-colors",
                pathname === link.href
                  ? "text-gg-orange"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-8 bg-gradient-to-r from-gg-orange to-gg-red rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted-foreground hover:text-gg-orange transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gg-orange/10">
          <div className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 font-display text-xs font-semibold tracking-widest rounded transition-colors",
                  pathname === link.href
                    ? "text-gg-orange bg-gg-orange/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
