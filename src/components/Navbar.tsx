"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-white">FUN</span>
          <span className="text-funkard-yellow">KARD</span>
        </Link>

        {/* Links a destra (desktop) */}
        <div className="ml-auto hidden sm:flex items-center gap-8 text-sm lg:text-base">
          <Link href="/marketplace" className="hover:text-funkard-yellow transition">
            Marketplace
          </Link>
          <Link href="/collection" className="hover:text-funkard-yellow transition">
            Collezione
          </Link>
          <Link href="/gradelens" className="hover:text-funkard-yellow transition">
            GradeLens
          </Link>
          <Link href="/support" className="hover:text-funkard-yellow transition">
            Supporto
          </Link>

          {/* Pulsante Registrati */}
          <Link
            href="/register"
            className="ml-2 px-5 py-2 rounded-lg bg-funkard-yellow text-black font-semibold hover:opacity-90 transition shadow-[0_0_12px_rgba(255,204,0,0.35)]"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}