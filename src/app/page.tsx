"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Store, Camera, LayoutGrid, HelpCircle, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white relative pb-20 md:pb-0 transition-colors duration-300">
      {/* NAVBAR DESKTOP */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 items-center justify-between px-10 transition-colors duration-300">
        <div className="text-2xl font-bold">
          <span className="text-yellow-500">FUN</span>KARD
        </div>
        <div className="flex gap-10 text-lg font-medium">
          <Link href="/marketplace" className="hover:text-yellow-500 transition">Market</Link>
          <Link href="/collection" className="hover:text-yellow-500 transition">Collezione</Link>
          <Link href="/gradelens" className="hover:text-yellow-500 transition">GradeLens</Link>
          <Link href="/support" className="hover:text-yellow-500 transition">Support</Link>
          <Link href="/register" className="hover:text-yellow-500 transition">Registrati</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center pt-28 md:pt-32 pb-20 px-4">
        <Image
          src="/logo.png"
          alt="Funkard Logo"
          width={120}
          height={120}
          className="mb-6 opacity-90 dark:hidden"
        />
        <Image
          src="/logo2.png"
          alt="Funkard Logo Light"
          width={120}
          height={120}
          className="mb-6 opacity-90 hidden dark:block"
        />

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Cerca il tuo TCG preferito
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 text-sm md:text-base">
          Scopri, acquista e vendi carte da collezione in sicurezza. Tutti i TCG,
          un solo marketplace.
        </p>

        <div className="flex w-full max-w-md bg-gray-100 dark:bg-neutral-900 rounded-full p-2 shadow-md focus-within:ring-2 focus-within:ring-yellow-400 transition">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digita un gioco o una carta..."
            className="flex-1 bg-transparent border-none text-black dark:text-white placeholder-gray-500 px-4 text-sm md:text-base"
          />
          <Button className="rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400">
            <Search className="mr-2 w-4 h-4" />
            Cerca
          </Button>
        </div>

        <Link
          href="/marketplace"
          className="mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:shadow-[0_0_25px_rgba(255,200,0,0.4)] transition-all duration-300 inline-block"
        >
          Vai al Marketplace
        </Link>

        {/* CATEGORIE */}
        <div className="flex gap-6 mt-12 overflow-x-auto px-4 md:grid md:grid-cols-5 md:gap-8 md:overflow-visible md:px-0 scrollbar-hide">
          {[
            { src: "/images/sample/charizard.jpg", name: "Pokémon" },
            { src: "/images/sample/booster-box.jpg", name: "Yu-Gi-Oh!" },
            { src: "/images/sample/etb.jpg", name: "Magic" },
            { src: "/images/sample/charizard.jpg", name: "Lorcana" },
            { src: "/images/sample/booster-box.jpg", name: "One Piece" },
          ].map((game, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:scale-105 transition flex-shrink-0"
            >
              <Image
                src={game.src}
                alt={game.name}
                width={64}
                height={64}
                className="rounded-md mb-2"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">{game.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ULTIME CARTE */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Ultime carte caricate
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <Card
              key={i}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:scale-[1.02] transition"
            >
              <Image
                src={`/images/sample/charizard.jpg`}
                alt="Carta"
                width={300}
                height={200}
                className="rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-semibold text-sm md:text-lg">Charizard EX 2023</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Pokémon • Near Mint
                </p>
                <p className="font-bold text-yellow-500 text-sm md:text-base">
                  124,99 €
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/marketplace"
            className="px-6 md:px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:shadow-[0_0_25px_rgba(255,200,0,0.4)] transition-all duration-300 inline-block"
          >
            Vai al Marketplace
          </Link>
        </div>
      </section>

      {/* GRADELENS */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-neutral-900 text-center transition-colors duration-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Analizza la tua carta con GradeLens
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Scansiona, valuta e scopri lo stato della tua carta in pochi secondi.
          Ogni valutazione è basata su dati reali verificati.
        </p>

        <div className="bg-neutral-900/80 dark:bg-neutral-800/80 border border-neutral-800 dark:border-neutral-700 rounded-3xl p-8 md:p-10 max-w-3xl mx-auto shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] backdrop-blur-md transition-colors duration-300">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">GradeLens – Scansione simulata</h3>
          <p className="mb-6 text-gray-400 text-sm md:text-base">
            Funzionalità in fase beta — risultati basati su analisi reali.
          </p>
          <Link
            href="/gradelens"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-full shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:shadow-[0_0_25px_rgba(255,200,0,0.4)] transition-all duration-300 inline-block"
          >
            Analizza la carta
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-white dark:bg-black transition-colors duration-300">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 leading-snug">
          Esplora, vendi, compra e scambia la tua collezione con quella di altri in tutto il mondo.
        </h2>
        <Link
          href="/register"
          className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:shadow-[0_0_25px_rgba(255,200,0,0.4)] transition-all duration-300 inline-block"
        >
          Registrati ora
        </Link>
        <p className="mt-6 text-gray-600 dark:text-gray-500 text-sm">
          Funkard — <span className="text-yellow-400 font-semibold">Da collezionisti per collezionisti</span>
        </p>
      </section>

      {/* NAVBAR MOBILE */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 flex justify-around py-2 z-50 transition-colors duration-300">
        <Link href="/marketplace" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-yellow-500">
          <Store size={20} />
          <span className="text-xs">Market</span>
        </Link>
        <Link href="/collection" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-yellow-500">
          <LayoutGrid size={20} />
          <span className="text-xs">Collezione</span>
        </Link>
        <Link href="/gradelens" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-yellow-500">
          <Camera size={20} />
          <span className="text-xs">GradeLens</span>
        </Link>
        <Link href="/support" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-yellow-500">
          <HelpCircle size={20} />
          <span className="text-xs">Support</span>
        </Link>
        <Link href="/register" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-yellow-500">
          <UserPlus size={20} />
          <span className="text-xs">Profilo</span>
        </Link>
      </nav>
    </main>
  );
}
