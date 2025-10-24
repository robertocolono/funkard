"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Search, User, Archive, Star, Globe, Mail, FolderKanban, Gem, Home, LayoutGrid, Camera, HelpCircle } from "lucide-react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: Archive,
      title: "Gestisci la tua collezione",
      desc: "Tieni traccia delle tue carte in modo semplice e visivo.",
    },
    {
      icon: Star,
      title: "Valuta le tue carte",
      desc: "Scopri il valore reale grazie alla tecnologia GradeLens.",
    },
    {
      icon: Globe,
      title: "Connettiti con tutto il mondo",
      desc: "Compra e vendi in sicurezza con collezionisti globali.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAVBAR DESKTOP */}
      {!isMobile && (
        <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 border-b border-zinc-800 bg-black">
          <h1 className="text-2xl font-bold text-white">FUNKARD</h1>

          <div className="hidden md:flex space-x-8 text-sm text-zinc-300">
            <a href="/marketplace" className="hover:text-yellow-400 transition">Marketplace</a>
            <a href="/collezione" className="hover:text-yellow-400 transition">Collezione</a>
            <a href="/gradelens" className="hover:text-yellow-400 transition">GradeLens</a>
            <a href="/supporto" className="hover:text-yellow-400 transition">Supporto</a>
            <a href="/profilo" className="hover:text-yellow-400 transition">Profilo</a>
          </div>
        </nav>
      )}

      {/* HERO */}
      <section className="justify-center items-center text-center flex-1 px-6 py-20 md:py-24 relative">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900/70 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={220}
            height={220}
            className="mb-6"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold mb-8 max-w-2xl text-zinc-100"
        >
          Esplora, compra, vendi e scambia in tutto il mondo!
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="/marketplace"
            className="inline-block bg-yellow-400 text-black font-bold text-lg px-10 py-4 rounded-2xl hover:bg-yellow-300 transition"
          >
            Esplora il Marketplace
          </a>
        </motion.div>
      </section>



      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
          <FolderKanban className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">Gestisci la tua collezione</h3>
          <p className="text-zinc-400 text-sm">Tieni traccia delle tue carte in modo semplice e visivo.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
          <Gem className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">Valuta le tue carte</h3>
          <p className="text-zinc-400 text-sm">Scopri il valore reale grazie alla tecnologia GradeLens.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
          <Globe className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">Connettiti con tutto il mondo</h3>
          <p className="text-zinc-400 text-sm">Compra e vendi in sicurezza con collezionisti globali.</p>
        </div>
      </section>

      {/* FOOTER DESKTOP */}
      {!isMobile && (
        <footer className="mt-16 mb-10 text-sm text-zinc-500 text-center px-4 border-t border-zinc-800 pt-6">
          <p>Funkard © 2025 — Da collezionisti per collezionisti</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="/privacy" className="hover:text-yellow-400 transition">Privacy</a>
            <a href="/cookie" className="hover:text-yellow-400 transition">Cookie</a>
            <a href="/terms" className="hover:text-yellow-400 transition">Termini</a>
          </div>
        </footer>
      )}

      {/* MOBILE BOTTOM NAV */}
      {isMobile && (
        <footer className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around items-center py-3 md:hidden">
          <a href="/marketplace" className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition">
            <Home size={22} />
            <span className="text-xs mt-1">Market</span>
          </a>

          <a href="/collezione" className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition">
            <LayoutGrid size={22} />
            <span className="text-xs mt-1">Collezione</span>
          </a>

          <a href="/gradelens" className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition">
            <Camera size={22} />
            <span className="text-xs mt-1">GradeLens</span>
          </a>

          <a href="/supporto" className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition">
            <HelpCircle size={22} />
            <span className="text-xs mt-1">Supporto</span>
          </a>

          <a href="/profilo" className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition">
            <User size={22} />
            <span className="text-xs mt-1">Profilo</span>
          </a>
        </footer>
      )}
    </main>
  );
}