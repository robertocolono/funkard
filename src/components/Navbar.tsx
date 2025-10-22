"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-800 dark:border-gray-700 bg-funkard-black text-white">
      {/* --- LEFT --- */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="font-luckiest text-funkard-yellow text-lg tracking-wide">
          Funkard
        </Link>
      </div>

      {/* --- CENTER NAV LINKS --- */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link href="/marketplace" className="hover:text-funkard-yellow transition-colors">
          Esplora le collezioni
        </Link>
        <Link href="/collection" className="hover:text-funkard-yellow transition-colors">
          Gestisci la tua collezione
        </Link>
        <Link href="/gradelens" className="hover:text-funkard-yellow transition-colors">
          Valuta le tue carte
        </Link>
        <Link href="/support" className="hover:text-funkard-yellow transition-colors">
          Supporto
        </Link>
        <Link href="/faq" className="hover:text-funkard-yellow transition-colors">
          FAQ
        </Link>
      </div>

      {/* --- RIGHT --- */}
      <div className="flex items-center space-x-4">
        <Link
          href="/register"
          className="bg-funkard-yellow text-black px-4 py-1.5 rounded-md font-semibold hover:brightness-110 transition-all"
        >
          Registrati
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}