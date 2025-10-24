"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-black/75 backdrop-blur supports-[backdrop-filter]:bg-black/55">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="font-extrabold tracking-wide text-white">
          <span className="text-[#F5C242]">FUN</span>KARD
        </Link>

        {/* Nav right */}
        <nav className="flex items-center gap-7 text-sm text-zinc-200">
          <Link href="/market" className="hover:text-white transition-colors">Marketplace</Link>
          <Link href="/collection" className="hover:text-white transition-colors">Collezione</Link>
          <Link href="/gradelens" className="hover:text-white transition-colors">GradeLens</Link>
          <Link href="/support" className="hover:text-white transition-colors">Supporto</Link>

          {/* CTA */}
          <Link
            href="/register"
            className="rounded-xl bg-[#E7B04B] px-4 py-2 font-semibold text-white shadow-[inset_0_-2px_0_rgba(0,0,0,.25)] hover:opacity-90 active:opacity-100 transition"
          >
            Registrati
          </Link>
        </nav>
      </div>
    </header>
  );
}
