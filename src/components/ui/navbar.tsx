"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto w-full px-6 py-5 bg-[#0b0b0b]/95 border-b border-[#1a1a1a] backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center text-2xl font-extrabold tracking-tight">
        <span className="text-[#f2b237]">FUN</span>
        <span className="text-white">KARD</span>
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-8 text-base font-medium">
        <Link href="/marketplace" className="hover:text-[#f2b237] transition-colors">
          Marketplace
        </Link>
        <Link href="/gradelens" className="hover:text-[#f2b237] transition-colors">
          GradeLens AI
        </Link>
        <Link
          href="/register"
          className="text-[#f2b237] hover:text-black border border-[#f2b237] px-5 py-2 rounded-md font-semibold hover:bg-[#f2b237] transition-all duration-300"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}