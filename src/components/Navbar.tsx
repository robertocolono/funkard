"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isLoggedIn = false; // 👉 da collegare alla sessione utente

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        
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

        {/* LINK DESTRA */}
        <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-gray-300">
          <Link
            href="/marketplace"
            className={`hover:text-funkard-yellow transition ${
              pathname === "/marketplace" ? "text-funkard-yellow" : ""
            }`}
          >
            Marketplace
          </Link>
          <Link
            href="/collection"
            className={`hover:text-funkard-yellow transition ${
              pathname === "/collection" ? "text-funkard-yellow" : ""
            }`}
          >
            Collezione
          </Link>
          <Link
            href="/gradelens"
            className={`hover:text-funkard-yellow transition ${
              pathname === "/gradelens" ? "text-funkard-yellow" : ""
            }`}
          >
            GradeLens
          </Link>
          <Link
            href="/support"
            className={`hover:text-funkard-yellow transition ${
              pathname === "/support" ? "text-funkard-yellow" : ""
            }`}
          >
            Supporto
          </Link>

          {!isLoggedIn ? (
            <Link
              href="/register"
              className="px-4 py-2 font-semibold text-black bg-funkard-yellow rounded-md hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_8px_rgba(255,204,0,0.4)]"
            >
              Registrati
            </Link>
          ) : (
            <Link
              href="/account"
              className="px-4 py-2 font-semibold border border-funkard-yellow text-funkard-yellow rounded-md hover:bg-funkard-yellow hover:text-black transition-all duration-300"
            >
              Profilo
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}