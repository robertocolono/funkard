"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-[#0b0b0b]/90 border-b border-[#1a1a1a] backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center text-3xl font-extrabold tracking-tight">
        <span className="text-[#f2b237]">FUN</span>
        <span className="text-white">KARD</span>
      </Link>

      {/* Links */}
      <div className="flex space-x-8 text-base font-medium">
        <Link href="/marketplace" className="hover:text-[#f2b237] transition-colors">
          Marketplace
        </Link>
        <Link href="/gradelens" className="hover:text-[#f2b237] transition-colors">
          GradeLens AI
        </Link>
        <Link
          href="/register"
          className="ml-4 text-[#f2b237] border border-[#f2b237] px-4 py-1.5 rounded-md hover:bg-[#f2b237] hover:text-black transition-all"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}
