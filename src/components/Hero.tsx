"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita mismatch idratazione (Next.js)
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center py-28 md:py-36 px-6 overflow-hidden transition-colors duration-500 border-b ${
        isDark
          ? "bg-gradient-to-b from-black to-neutral-900 border-neutral-800"
          : "bg-gradient-to-b from-white to-neutral-100 border-neutral-200"
      }`}
    >
      {/* BACKGROUND IMMAGINI BLUR */}
      <div
        className={`absolute inset-0 overflow-hidden blur-2xl transition-opacity ${
          isDark ? "opacity-30" : "opacity-20"
        }`}
      >
        <Image
          src="/images/sample/charizard.jpg"
          alt="Charizard"
          width={500}
          height={500}
          className="absolute top-10 left-10 rotate-[-8deg]"
        />
        <Image
          src="/images/sample/booster-box.jpg"
          alt="Booster Box"
          width={500}
          height={500}
          className="absolute bottom-10 right-10 rotate-[10deg]"
        />
      </div>

      {/* LOGO DINAMICO */}
      <Image
        src={isDark ? "/logo.png" : "/logo2.png"}
        alt="Funkard Logo"
        width={140}
        height={140}
        className="z-10 mb-8 drop-shadow-lg transition-all duration-300"
        priority
      />

      {/* TITOLO */}
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 z-10 transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        FUNKARD TEST 123 🚀
      </h1>

      <p
        className={`max-w-2xl mb-10 z-10 text-base md:text-lg transition-colors duration-300 ${
          isDark ? "text-gray-400" : "text-gray-700"
        }`}
      >
        Scopri, acquista e vendi carte da collezione in sicurezza. Tutti i TCG,
        un solo marketplace.
      </p>

      {/* SEARCH BAR */}
      <div
        className={`flex w-full max-w-lg rounded-full p-2 z-10 shadow-lg ring-1 transition-colors duration-300 ${
          isDark
            ? "bg-neutral-900/70 ring-neutral-700"
            : "bg-white ring-neutral-300"
        }`}
      >
        <Input
          placeholder="Digita un gioco o una carta..."
          className={`flex-1 bg-transparent border-none focus-visible:ring-0 transition-colors ${
            isDark
              ? "text-white placeholder-gray-500"
              : "text-black placeholder-gray-400"
          }`}
        />
        <Button className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:shadow-[0_0_25px_rgba(255,200,0,0.4)] transition-all duration-300">
          <Search className="mr-2 h-4 w-4" /> Cerca
        </Button>
      </div>

      {/* CTA */}
      <div className="mt-10 z-10">
        <Link
          href="/marketplace"
          className="px-6 md:px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:shadow-[0_0_25px_rgba(255,200,0,0.4)] transition-all duration-300 inline-block"
        >
          Vai al Marketplace
        </Link>
      </div>
    </section>
  );
}