// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { FunkardButton } from "@/components/ui/FunkardButton";

const nav = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Collezione", href: "/collection" },
  { label: "GradeLens", href: "/gradelens" },
  { label: "Supporto", href: "/support" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/75 backdrop-blur supports-[backdrop-filter]:bg-black/55">
      <nav className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          <span className="text-[#F6C356]">FUN</span>
          <span className="text-white">KARD</span>
        </Link>

        {/* Right Menu */}
        <div className="ml-auto hidden items-center gap-6 sm:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-zinc-300 hover:text-white"
            >
              {n.label}
            </Link>
          ))}
          <FunkardButton as="a" href="/register" className="ml-2">
            Registrati
          </FunkardButton>
        </div>
      </nav>
    </header>
  );
}