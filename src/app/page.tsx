"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Globe, Brain } from "lucide-react";
import TrendChart from "@/components/TrendChart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Colleziona. Scambia. Scopri.
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-xl mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e
          completamente trasparente.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Link
            href="/marketplace"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold hover:opacity-90 transition"
          >
            Entra nel Marketplace
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl border border-yellow-400 font-semibold hover:bg-yellow-400/10 transition"
          >
            Scopri di più
          </Link>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(242,178,55,0.15), transparent 60%)",
          }}
        />
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Shield className="w-10 h-10 mx-auto text-yellow-400" />,
              title: "SafeTrade",
              desc: "Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.",
            },
            {
              icon: <Brain className="w-10 h-10 mx-auto text-yellow-400" />,
              title: "GradeLens AI",
              desc: "Analizza le tue carte in tempo reale grazie alla nostra intelligenza artificiale.",
            },
            {
              icon: <Globe className="w-10 h-10 mx-auto text-yellow-400" />,
              title: "Marketplace Globale",
              desc: "Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-[#141414] rounded-2xl p-8 shadow-lg border border-[#1f1f1f] hover:border-yellow-400/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {f.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Le carte più cercate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#141414] rounded-xl p-4 border border-[#1f1f1f] hover:border-yellow-400/40 transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-32 w-full bg-[#1f1f1f] rounded-lg mb-3" />
                <p className="text-sm font-semibold">Carta #{i + 1}</p>
                <p className="text-xs text-gray-400">Trend +{(i + 3) * 2}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-24 px-6 bg-[#0e0e0e] relative text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Da collezionisti, per collezionisti
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Entra nella community Funkard. Scopri release, eventi e connettiti con
          altri appassionati.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="https://t.me/funkard"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:opacity-90 transition"
          >
            Unisciti su Telegram
          </Link>
          <Link
            href="https://discord.gg/"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-yellow-400 font-semibold hover:bg-yellow-400/10 transition"
          >
            Entra su Discord
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-center">
        <h2 className="text-4xl font-bold mb-4">Inizia la tua collezione oggi</h2>
        <p className="mb-8 text-lg text-black/80">
          Zero abbonamenti. Solo meritocrazia e passione per le carte.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 rounded-xl bg-black text-yellow-400 font-semibold hover:opacity-80 transition"
          >
            Crea un account
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 rounded-xl bg-black text-yellow-400 font-semibold hover:opacity-80 transition"
          >
            Accedi
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}