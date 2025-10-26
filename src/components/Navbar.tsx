"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔹 Logo Funkard */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-violet-600">FUN</span>
          <span className="text-gray-900">KARD</span>
        </Link>

        {/* 🔸 Menu principale */}
        <div className="flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/marketplace" className="hover:text-violet-600 transition">Market</Link>
          <Link href="/collection" className="hover:text-violet-600 transition">Collezione</Link>
          <Link href="/gradelens" className="hover:text-violet-600 transition">GradeLens</Link>
          <Link href="/support" className="hover:text-violet-600 transition">Supporto</Link>
        </div>

        {/* 🔹 Pulsante Registrati */}
        <Link
          href="/register"
          className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}