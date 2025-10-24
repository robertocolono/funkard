"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo testuale */}
        <span className="text-2xl font-bold text-yellow-400 tracking-wide">
          FUN<span className="text-white">KARD</span>
        </span>

        {/* Link principali */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            ["Marketplace", "/marketplace"],
            ["Collezione", "/collection"],
            ["GradeLens", "/gradelens"],
            ["Support", "/support"],
            ["Registrati", "/register"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}