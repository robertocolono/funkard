

"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 md:py-36 px-6 overflow-hidden bg-gradient-to-b from-black to-neutral-900 dark:from-black dark:to-neutral-950">
      {/* BG IMMAGINI SFUMATE */}
      <div className="absolute inset-0 overflow-hidden opacity-20 blur-2xl">
        <Image
          src="/images/sample/charizard.jpg"
          alt="Charizard"
          width={500}
          height={500}
          className="absolute top-10 left-10 rotate-[-8deg] opacity-30"
        />
        <Image
          src="/images/sample/booster-box.jpg"
          alt="Booster Box"
          width={500}
          height={500}
          className="absolute bottom-10 right-10 rotate-[10deg] opacity-30"
        />
      </div>

      {/* LOGO */}
      <Image
        src="/logo.png"
        alt="Funkard Logo"
        width={120}
        height={120}
        className="z-10 mb-8 drop-shadow-lg"
      />

      {/* TITOLO */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">
        Cerca il tuo <span className="text-yellow-500">TCG</span> preferito
      </h1>
      <p className="text-gray-400 max-w-2xl mb-10 z-10 text-base md:text-lg">
        Scopri, acquista e vendi carte da collezione in sicurezza. Tutti i TCG,
        un solo marketplace.
      </p>

      {/* SEARCH BAR */}
      <div className="flex w-full max-w-lg bg-neutral-900/70 rounded-full p-2 z-10 shadow-lg ring-1 ring-neutral-700">
        <Input
          placeholder="Digita un gioco o una carta..."
          className="flex-1 bg-transparent border-none text-white placeholder-gray-500 focus-visible:ring-0"
        />
        <Button className="rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
          <Search className="mr-2 h-4 w-4" /> Cerca
        </Button>
      </div>

      {/* CTA */}
      <div className="mt-10 z-10">
        <Link
          href="/marketplace"
          className="px-6 md:px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition inline-block"
        >
          Vai al Marketplace
        </Link>
      </div>
    </section>
  );
}

