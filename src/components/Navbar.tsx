"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#0b0b0b]/90 border-b border-[#1a1a1a] backdrop-blur-sm shadow-md">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center text-3xl font-extrabold tracking-tight hover:opacity-90 transition"
      >
        <span className="text-[#f2b237]">FUN</span>
        <span className="text-white">KARD</span>
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-12 text-lg font-semibold">
        <Link
          href="/marketplace"
          className="hover:text-[#f2b237] transition-colors duration-200"
        >
          Marketplace
        </Link>

        <Link
          href="/gradelens"
          className="hover:text-[#f2b237] transition-colors duration-200"
        >
          GradeLens AI
        </Link>

        <Link
          href="/register"
          className="text-[#f2b237] border border-[#f2b237] px-5 py-2.5 rounded-md
                     hover:bg-[#f2b237] hover:text-black transition-all duration-300 shadow-[0_0_10px_#f2b23733]"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}
