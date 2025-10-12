"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b]/95 border-b border-[#1a1a1a] backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-20 py-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition font-luckiest tracking-tight text-[2.8rem] select-none"
        >
          <span className="text-[#f2b237]">FUN</span>
          <span className="text-white">KARD</span>
        </Link>

        {/* LINK DESTRA */}
        <div className="flex justify-end items-center gap-[15px] text-[1.25rem] font-medium font-inter">
          <Link
            href="/marketplace"
            className="hover:text-[#f2b237] transition-all duration-200 hover:scale-105"
          >
            Marketplace
          </Link>

          <Link
            href="/gradelens"
            className="hover:text-[#f2b237] transition-all duration-200 hover:scale-105"
          >
            GradeLens
          </Link>

          <Link
            href="/register"
            className="text-[#f2b237] font-semibold text-[1.25rem]
                       px-6 py-3 rounded-full transition-all duration-300
                       hover:text-[#ffcc4d] hover:scale-105"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}
