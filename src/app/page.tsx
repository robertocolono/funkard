"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-40">
      <Navbar />
      
      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <motion.p
          className="text-3xl md:text-4xl text-yellow-400 font-semibold mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Benvenuto
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={200}
            height={200}
            className="mb-8"
          />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold max-w-3xl mb-10 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </motion.h1>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="/marketplace"
            className="px-8 py-3 text-lg font-semibold text-funkard-yellow border-2 border-funkard-yellow rounded-xl bg-transparent hover:bg-funkard-yellow hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:shadow-[0_0_25px_rgba(255,204,0,0.5)]"
          >
            Entra nel Marketplace
          </a>
          <a
            href="/register"
            className="px-8 py-3 text-lg font-semibold text-funkard-yellow border-2 border-funkard-yellow rounded-xl bg-transparent hover:bg-funkard-yellow hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:shadow-[0_0_25px_rgba(255,204,0,0.5)]"
          >
            Crea un account
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-black text-white">
        <h2 className="text-center text-4xl font-bold mb-16">Perché scegliere Funkard</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 px-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex-1 bg-[#111] rounded-2xl p-8 text-center border border-neutral-800 hover:border-funkard-yellow hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all duration-300">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-funkard-yellow mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.121A4 4 0 014 17V9a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-1.121 2.121M9 21h6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">SafeTrade</h3>
              <p className="text-gray-400 text-sm">
                Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 bg-[#111] rounded-2xl p-8 text-center border border-neutral-800 hover:border-funkard-yellow hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all duration-300">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-funkard-yellow mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">GradeLens AI</h3>
              <p className="text-gray-400 text-sm">
                Analizza le tue carte in tempo reale grazie alla nostra intelligenza artificiale.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 bg-[#111] rounded-2xl p-8 text-center border border-neutral-800 hover:border-funkard-yellow hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all duration-300">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-funkard-yellow mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Marketplace Globale</h3>
              <p className="text-gray-400 text-sm">
                Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS SCROLLER */}
      <section className="overflow-hidden py-10 bg-[#111]">
        <div className="animate-scroll flex gap-6 px-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-[#1a1a1a] rounded-xl p-5 text-center shadow-glow"
            >
              <p className="font-semibold">Carta #{i + 1}</p>
              <p className="text-yellow-400 mt-1">Trend +{5 + i * 2}%</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}