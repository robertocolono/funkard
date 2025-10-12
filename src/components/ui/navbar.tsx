"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/95 border-b border-[#1a1a1a] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
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
            className="text-[#f2b237] font-semibold px-5 py-2 rounded-md border border-[#f2b237] hover:bg-[#f2b237] hover:text-black transition-all duration-300"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}