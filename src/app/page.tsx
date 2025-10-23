"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();

  // Redirect automatico per utenti loggati
  useEffect(() => {
    const token = localStorage.getItem("funkard_token");
    if (token) {
      router.push("/marketplace");
    }
  }, [router]);

  const categories = [
    { name: "Pokémon", img: "/tcg/pokemon.jpg" },
    { name: "Yu-Gi-Oh!", img: "/tcg/yugioh.jpg" },
    { name: "Magic: The Gathering", img: "/tcg/mtg.jpg" },
    { name: "One Piece", img: "/tcg/onepiece.jpg" },
    { name: "Disney Lorcana", img: "/tcg/lorcana.jpg" },
    { name: "Flesh and Blood", img: "/tcg/fab.jpg" },
    { name: "Dragon Ball Super", img: "/tcg/dbs.jpg" },
    { name: "Weiß Schwarz", img: "/tcg/weiss.jpg" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      
      {/* HERO */}
      <section className="pt-36 pb-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-funkard-yellow mb-6"
        >
          Cerca il tuo TCG preferito
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          Scopri, acquista e vendi carte da collezione in sicurezza. Tutti i TCG, un solo marketplace.
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto flex items-center bg-funkard-gray rounded-xl px-4 py-3 shadow-dark-glow"
        >
          <Search className="text-funkard-yellow mr-3" size={22} />
          <input
            type="text"
            placeholder="Digita un gioco o una carta..."
            className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400"
          />
          <Button className="ml-3 bg-funkard-yellow text-black font-semibold px-5 hover:opacity-90 transition">
            Cerca
          </Button>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Link href="/marketplace">
            <Button className="bg-funkard-yellow text-black font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition">
              Vai al Marketplace
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* CATEGORY SHOWCASE */}
      <section className="w-full py-20 bg-background transition-colors duration-500 px-6">
        <h2 className="text-3xl font-bold text-funkard-yellow mb-10 text-center">
          Tutti i giochi, un solo posto.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={400}
                height={400}
                className="object-cover w-full h-48 sm:h-56 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              <span className="absolute bottom-4 left-4 text-lg font-semibold text-white drop-shadow-lg">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY FUNKARD */}
      <section className="w-full py-24 bg-background border-t border-gray-800 transition-colors duration-500">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-funkard-yellow mb-16">
          Perché scegliere Funkard?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* SICUREZZA */}
          <div className="bg-funkard-gray p-8 rounded-2xl border border-gray-800 shadow-dark-glow hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-funkard-yellow mb-3 text-center">
              Sicurezza e Trasparenza
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Ogni transazione è protetta con <span className="text-funkard-yellow font-medium">SafeTrade</span>.  
              Pagamenti verificati, protezione venditore e acquirente: su Funkard non ci sono sorprese.
            </p>
          </div>

          {/* TECNOLOGIA */}
          <div className="bg-funkard-gray p-8 rounded-2xl border border-gray-800 shadow-dark-glow hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-funkard-yellow mb-3 text-center">
              Analisi e Valutazione
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Con <span className="text-funkard-yellow font-medium">GradeLens</span> puoi scansionare le tue carte e ricevere una valutazione basata su dati reali.  
              Nessuna AI: ogni risultato è controllato manualmente per garantirti precisione.
            </p>
          </div>

          {/* COMMUNITY */}
          <div className="bg-funkard-gray p-8 rounded-2xl border border-gray-800 shadow-dark-glow hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-funkard-yellow mb-3 text-center">
              Community Reale
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Niente account fake, solo <span className="text-funkard-yellow font-medium">collezionisti reali</span>.  
              Funkard nasce da chi colleziona, per chi colleziona — senza abbonamenti, solo passione.
            </p>
          </div>
        </div>
      </section>

      {/* GRADELENS */}
      <section className="w-full py-28 px-6 transition-colors duration-500 bg-background text-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-funkard-yellow mb-6">
            Analizza la tua carta con GradeLens
          </h2>
          <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-14 leading-relaxed">
            Scansiona, valuta e scopri lo stato della tua carta in pochi secondi.  
            Ogni valutazione è basata su dati reali verificati.
          </p>

          <div className="mx-auto max-w-2xl p-10 rounded-3xl border border-border shadow-dark-glow transition-all duration-500 bg-[#1a1a1a]/80 dark:bg-[#1a1a1a]/80 light:bg-[#f5f5f5]/90 backdrop-blur-md">
            <div className="relative w-60 sm:w-72 mx-auto aspect-[3/4] rounded-xl overflow-hidden mb-8 border border-funkard-yellow/50 bg-[#111] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-funkard-yellow opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zm0 0l9 6 9-6" />
              </svg>
            </div>

            <Link href="/gradelens">
              <button className="bg-funkard-yellow text-black font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition">
                Prova la scansione simulata
              </button>
            </Link>

            <p className="text-xs text-gray-400 mt-5">
              Funzionalità in fase beta — risultati basati su analisi reali.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-24 bg-funkard-yellow text-black text-center border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
            Esplora, vendi, compra e scambia <br className="hidden sm:block" />
            la tua collezione con quella di altri in tutto il mondo.
          </h2>

          <Link
            href="/register"
            className="inline-block bg-black text-funkard-yellow text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          >
            Registrati ora
          </Link>

          <p className="text-sm sm:text-base text-black/80 mt-10 font-medium tracking-wide">
            Funkard — Da collezionisti per collezionisti
          </p>
        </div>
      </section>
    </main>
  );
}
