"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-yellow-400/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-yellow-400">FUN</span>
          <span className="text-white">KARD</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/marketplace" className="text-gray-300 hover:text-yellow-400 font-medium transition">
            Marketplace
          </Link>
          <Link href="/collection" className="text-gray-300 hover:text-yellow-400 font-medium transition">
            Collezione
          </Link>
          <Link href="/gradelens" className="text-gray-300 hover:text-yellow-400 font-medium transition">
            GradeLens
          </Link>
          <Link href="/support" className="text-gray-300 hover:text-yellow-400 font-medium transition">
            Supporto
          </Link>

          <Link
            href="/register"
            className="ml-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition shadow-[0_0_15px_#FFB300]/40"
          >
            Registrati
          </Link>

          <button
            onClick={toggleTheme}
            className="ml-3 px-3 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-yellow-400 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-yellow-500/20 px-6 py-6 space-y-5 text-center">
          <Link href="/marketplace" className="block text-gray-300 hover:text-yellow-400 text-lg" onClick={() => setOpen(false)}>
            Marketplace
          </Link>
          <Link href="/collection" className="block text-gray-300 hover:text-yellow-400 text-lg" onClick={() => setOpen(false)}>
            Collezione
          </Link>
          <Link href="/gradelens" className="block text-gray-300 hover:text-yellow-400 text-lg" onClick={() => setOpen(false)}>
            GradeLens
          </Link>
          <Link href="/support" className="block text-gray-300 hover:text-yellow-400 text-lg" onClick={() => setOpen(false)}>
            Supporto
          </Link>
          <Link
            href="/register"
            className="block mt-4 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 shadow-[0_0_20px_#FFB300]/50 transition"
            onClick={() => setOpen(false)}
          >
            Registrati
          </Link>
        </div>
      )}
    </nav>
  );
}
