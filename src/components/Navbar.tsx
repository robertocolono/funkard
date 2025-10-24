"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={42}
            height={42}
            className="rounded-md"
          />
          <span className="text-xl font-bold tracking-wide text-white">FUNKARD</span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/marketplace" className="hover:text-funkard-yellow transition">
            Marketplace
          </Link>
          <Link href="/grade" className="hover:text-funkard-yellow transition">
            GradeLens
          </Link>
          <Link href="/about" className="hover:text-funkard-yellow transition">
            Chi siamo
          </Link>
          <Link href="/support" className="hover:text-funkard-yellow transition">
            Supporto
          </Link>
        </div>

        {/* LOGIN */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 text-sm font-semibold border border-funkard-yellow text-funkard-yellow rounded-md hover:bg-funkard-yellow hover:text-black transition"
          >
            Accedi
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 text-sm font-semibold bg-funkard-yellow text-black rounded-md hover:opacity-90 transition"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}