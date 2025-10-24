"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f] z-50">
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
        {/* Logo testuale */}
        <span className="text-3xl font-extrabold tracking-wide">
          <span className="text-yellow-400">FUN</span>
          <span className="text-white">KARD</span>
        </span>

        {/* Link principali */}
        <div className="flex gap-10 text-base font-medium">
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
              className="text-white hover:text-yellow-400 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}