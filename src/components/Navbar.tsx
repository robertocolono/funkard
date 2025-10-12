"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-5 px-8 bg-[#0b0b0b]/90 border-b border-[#1a1a1a] backdrop-blur-sm flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center text-3xl font-extrabold tracking-tight">
        <span className="text-[#f2b237]">FUN</span>
        <span className="text-white">KARD</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-8 text-base font-medium">
        <Link
          href="/marketplace"
          className="text-white hover:text-[#f2b237] transition-colors"
        >
          Marketplace
        </Link>

        <Link
          href="/gradelens"
          className="text-white hover:text-[#f2b237] transition-colors"
        >
          GradeLens AI
        </Link>

        <Link
          href="/register"
          className="text-[#f2b237] hover:text-black border border-[#f2b237] px-5 py-2 rounded-lg font-semibold 
                     transition-all hover:bg-[#f2b237] hover:shadow-[0_0_20px_#f2b23755]"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}
