"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold tracking-wide">
            <span className="text-white">FUN</span>
            <span className="text-funkard-yellow">KARD</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="/marketplace" className="text-gray-300 hover:text-funkard-yellow transition">Marketplace</Link>
          <Link href="/collection" className="text-gray-300 hover:text-funkard-yellow transition">Collezione</Link>
          <Link href="/gradelens" className="text-gray-300 hover:text-funkard-yellow transition">GradeLens</Link>
          <Link href="/support" className="text-gray-300 hover:text-funkard-yellow transition">Supporto</Link>
        </div>

        {/* CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/register"
            className="px-5 py-2 text-sm font-semibold bg-funkard-yellow text-black rounded-md hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-[0_0_10px_rgba(255,204,0,0.4)]"
          >
            Registrati
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 text-sm font-semibold text-funkard-yellow border border-funkard-yellow rounded-md hover:bg-funkard-yellow hover:text-black transition-all duration-300"
          >
            Accedi
          </Link>
        </div>
      </div>
    </nav>
  );
}