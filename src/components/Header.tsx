"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-funkard-black">
      <Link href="/" className="flex items-center gap-3">
        {isHome ? (
          // ✅ LOGO COMPLETO SOLO IN HOME
          <img src="/logo.png" alt="Funkard logo" className="w-12 h-12 object-contain" />
        ) : (
          // ✅ SOLO SORRISO + TESTO NELLE ALTRE PAGINE
          <>
            <Image
              src="/favicon.png"
              alt="Funkard Icon"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <h1 className="font-bold text-xl text-funkard-yellow tracking-wide">FUNKARD</h1>
          </>
        )}
      </Link>

      <nav className="flex gap-6 text-white/80">
        <Link href="/dashboard" className="hover:text-funkard-yellow transition">Dashboard</Link>
        <Link href="/login" className="hover:text-funkard-yellow transition">Login</Link>
        <Link href="/register" className="hover:text-funkard-yellow transition">Registrati</Link>
      </nav>
    </header>
  );
}
