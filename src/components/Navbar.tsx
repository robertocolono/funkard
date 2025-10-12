"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-8 bg-[#0b0b0b]/95 border-b border-[#1a1a1a] backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)] fixed top-0 left-0 w-full z-50">
      {/* LOGO */}
      <Link
        href="/"
        className="flex items-center text-[2.3rem] font-extrabold tracking-tight hover:opacity-90 transition-all duration-200"
      >
        <span className="text-[#f2b237]">FUN</span>
        <span className="text-white">KARD</span>
      </Link>

      {/* LINK SEZIONI DESTRA */}
      <div className="flex items-center space-x-20 text-[1.25rem] font-semibold">
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
          className="text-[#f2b237] border-2 border-[#f2b237] px-7 py-3 rounded-full 
                     font-bold hover:bg-[#f2b237] hover:text-black hover:scale-105 
                     transition-all duration-300 shadow-[0_0_25px_#f2b23766]"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}
