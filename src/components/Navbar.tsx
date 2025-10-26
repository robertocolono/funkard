"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 🔹 LOGO */}
        <Link href="/" className="flex items-center space-x-1">
          <span className="text-violet-700 font-extrabold text-xl tracking-tight">
            FUN
          </span>
          <span className="text-gray-900 font-extrabold text-xl tracking-tight">
            KARD
          </span>
        </Link>

        {/* 🔹 NAV LINK */}
        <div className="flex items-center space-x-10">
          <Link
            href="/marketplace"
            className="text-gray-700 font-medium hover:text-violet-700 transition"
          >
            Market
          </Link>
          <Link
            href="/collection"
            className="text-gray-700 font-medium hover:text-violet-700 transition"
          >
            Collezione
          </Link>
          <Link
            href="/gradelens"
            className="text-gray-700 font-medium hover:text-violet-700 transition"
          >
            GradeLens
          </Link>
          <Link
            href="/support"
            className="text-gray-700 font-medium hover:text-violet-700 transition"
          >
            Supporto
          </Link>
        </div>

        {/* 🔹 REGISTRAZIONE */}
        <div>
          <Link
            href="/register"
            className="bg-violet-700 hover:bg-violet-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}