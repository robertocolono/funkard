"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-0">
      <Navbar />
      
      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-5xl text-red-600 font-bold mb-4">TEST TAILWIND</h1>
        <div className="test-tw p-4 rounded-lg mb-4">TESTING @apply</div>
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
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/marketplace"
            className="px-10 py-4 text-lg font-semibold text-black bg-funkard-yellow rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,204,0,0.4)]"
          >
            Entra nel Marketplace
          </a>
          <a
            href="/register"
            className="px-10 py-4 text-lg font-semibold text-funkard-yellow border-2 border-funkard-yellow rounded-xl hover:bg-funkard-yellow hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,204,0,0.4)]"
          >
            Crea un account
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-black text-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Perché scegliere Funkard</h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 max-w-6xl mx-auto">
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
              className="flex-1 bg-[#111] rounded-xl p-8 text-center border border-neutral-800 hover:border-funkard-yellow hover:shadow-[0_0_15px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
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