"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-black via-neutral-900 to-black relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={150}
            height={150}
            className="mx-auto mb-8 drop-shadow-[0_0_20px_rgba(255,204,0,0.2)]"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Esplora, compra, vendi e scambia in tutto il mondo{" "}
          <span className="text-funkard-yellow">con un semplice click!</span>
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/marketplace"
            className="bg-funkard-yellow text-black font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-transform hover:scale-105"
          >
            Entra nel Marketplace
          </Link>
          <Link
            href="/register"
            className="border border-funkard-yellow text-funkard-yellow font-semibold px-10 py-4 rounded-lg hover:bg-funkard-yellow hover:text-black transition-transform hover:scale-105"
          >
            Crea un Account
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-neutral-950">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
          Perché scegliere Funkard
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
          {[
            {
              icon: "🛡️",
              title: "SafeTrade",
              desc: "Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.",
            },
            {
              icon: "📸",
              title: "GradeLens",
              desc: "Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.",
            },
            {
              icon: "🌍",
              title: "Marketplace Globale",
              desc: "Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-[#111] border border-neutral-800 rounded-2xl p-8 text-center hover:border-funkard-yellow hover:shadow-[0_0_15px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING CARDS */}
      <section className="py-24 bg-neutral-900">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
          Le carte più popolari del momento
        </h2>

        <div className="flex overflow-x-auto gap-6 px-6 pb-4 scrollbar-hide">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center hover:border-funkard-yellow hover:shadow-[0_0_15px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="w-28 h-40 bg-neutral-800 rounded-lg mb-4"></div>
              <p className="font-semibold">Carta #{i + 1}</p>
              <p className="text-funkard-yellow mt-2 text-sm">Trend +{3 + i * 2}%</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/marketplace"
            className="bg-funkard-yellow text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-transform hover:scale-105"
          >
            Scopri il Marketplace
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}