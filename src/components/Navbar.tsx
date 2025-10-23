"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Market", href: "/marketplace" },
    { name: "Collezione", href: "/collection" },
    { name: "GradeLens", href: "/gradelens" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-funkard-black border-b border-funkard-yellow/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-funkard-yellow">FUN</span>
          <span className="text-white">KARD</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition ${
                pathname === item.href
                  ? "text-funkard-yellow"
                  : "text-gray-300 hover:text-funkard-yellow"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Registrati */}
          <Link
            href="/register"
            className="ml-4 bg-funkard-yellow text-black font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}
