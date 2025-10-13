"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-zinc-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="font-bold text-xl text-white hover:text-[#f2b237] transition-colors">
            FUNKARD
          </Link>
        </div>

        {/* Link */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/marketplace" className="hover:text-[#f2b237] transition-colors">Marketplace</Link>
          <Link href="/gradelens" className="hover:text-[#f2b237] transition-colors">GradeLens</Link>
          <Link href="/register" className="text-[#f2b237] font-semibold hover:text-white transition-colors">Registrati</Link>
        </div>
      </div>
    </nav>
  );
}
