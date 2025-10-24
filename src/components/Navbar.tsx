"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white">
          FUN<span className="text-funkard-yellow">KARD</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <Link href="/marketplace" className="hover:text-funkard-yellow transition">Marketplace</Link>
          <Link href="/collection" className="hover:text-funkard-yellow transition">Collezione</Link>
          <Link href="/gradelens" className="hover:text-funkard-yellow transition">GradeLens</Link>
          <Link href="/support" className="hover:text-funkard-yellow transition">Supporto</Link>
        </div>

        {/* Button */}
        <Link
          href="/register"
          className="ml-6 px-5 py-2 rounded-lg bg-funkard-yellow text-black font-semibold hover:opacity-90 transition-all shadow-[0_0_10px_rgba(255,204,0,0.4)]"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}