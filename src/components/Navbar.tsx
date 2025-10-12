"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-14 py-8 bg-[#0b0b0b]/95 border-b border-[#1f1f1f] backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.4)] fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center text-4xl font-extrabold tracking-tight hover:opacity-90 transition"
      >
        <span className="text-[#f2b237]">FUN</span>
        <span className="text-white">KARD</span>
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-16 text-xl font-semibold">
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
          className="text-[#f2b237] border-2 border-[#f2b237] px-6 py-3 rounded-full
                     hover:bg-[#f2b237] hover:text-black transition-all duration-300 shadow-[0_0_20px_#f2b23744]"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}
