"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: "Market", href: "/marketplace" },
    { name: "Collezione", href: "/collection" },
    { name: "GradeLens", href: "/gradelens" },
    { name: "Supporto", href: "/support" },
  ];

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-300
      ${isDark ? "bg-black/70 border-neutral-800" : "bg-white/70 border-neutral-200"}
    `}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="Funkard Logo"
            width={42}
            height={42}
            className="transition-transform hover:scale-105"
          />
          <span className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-black"}`}>
            <span className="text-funkard-yellow">FUN</span>KARD
          </span>
        </Link>

        {/* LINK DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-funkard-yellow"
                  : isDark
                    ? "text-gray-300 hover:text-funkard-yellow"
                    : "text-gray-700 hover:text-funkard-yellow"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* TOGGLE TEMA */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`rounded-full p-2 transition ${
              isDark
                ? "bg-neutral-900 text-yellow-400 hover:bg-neutral-800"
                : "bg-neutral-100 text-gray-700 hover:bg-neutral-200"
            }`}
            aria-label="Cambia tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* REGISTRAZIONE */}
          <Link
            href="/register"
            className="ml-2 px-5 py-2 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold rounded-xl shadow-[0_0_10px_rgba(255,200,0,0.25)] hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] transition-all duration-300"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}
