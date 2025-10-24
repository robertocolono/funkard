"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />

      {/* TEST TAILWIND */}
      <div className="bg-red-500 w-40 h-40 mx-auto mb-4"></div>
      <div className="grid grid-cols-3 gap-6 bg-red-500 h-10 mx-auto mb-4 max-w-md"></div>

      {/* HERO */}
      <section className="text-center py-32 bg-black text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-funkard-yellow drop-shadow-[0_0_8px_rgba(255,204,0,0.4)]">
          Benvenuto
        </h1>

        <Image
          src="/logo.png"
          alt="Funkard Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Il marketplace TCG creato per i collezionisti.
          <br />
          <span className="text-funkard-yellow">
            Sicuro, globale e completamente trasparente.
          </span>
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="/marketplace"
            className="px-8 py-3 text-base font-semibold bg-funkard-yellow text-black rounded-lg hover:bg-yellow-400 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_12px_rgba(255,204,0,0.4)]"
          >
            Entra nel Marketplace
          </a>
          <a
            href="/register"
            className="px-8 py-3 text-base font-semibold border border-funkard-yellow text-funkard-yellow rounded-lg hover:bg-funkard-yellow hover:text-black hover:scale-[1.03] transition-all duration-300"
          >
            Crea un account
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-black text-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          Perché scegliere Funkard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "SafeTrade",
              desc: "Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.",
              icon: "🛡️",
            },
            {
              title: "GradeLens AI",
              desc: "Analizza le tue carte in tempo reale grazie alla nostra intelligenza artificiale.",
              icon: "🤖",
            },
            {
              title: "Marketplace Globale",
              desc: "Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.",
              icon: "🌍",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[#111] rounded-xl p-8 text-center border border-neutral-800 hover:border-funkard-yellow hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARD SCROLLER */}
      <section className="overflow-hidden py-10 bg-[#111]">
        <div className="animate-scroll flex gap-6 px-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="min-w-[200px] bg-[#1a1a1a] rounded-xl p-5 text-center shadow-glow"
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