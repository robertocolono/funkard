"use client";

import Link from "next/link";
import { useTheme } from "@/lib/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-funkard-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-funkard-yellow">FUNKARD</span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" className="hover:text-funkard-yellow transition">Esplora le collezioni</Link>
          <Link href="/collection" className="hover:text-funkard-yellow transition">Gestisci la tua collezione</Link>
          <Link href="/gradelens" className="hover:text-funkard-yellow transition">Valuta le tue carte</Link>
          <Link href="/support" className="hover:text-funkard-yellow transition">Supporto</Link>
          <Link href="/faq" className="hover:text-funkard-yellow transition">FAQ</Link>
          <Link href="/register">
            <button className="bg-funkard-yellow text-black px-4 py-2 font-semibold rounded-md hover:opacity-90 transition">
              Registrati
            </button>
          </Link>
          <button
            onClick={toggleTheme}
            className="border border-gray-700 rounded-md px-3 py-1 hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
