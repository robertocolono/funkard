"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Brain, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "SafeTrade",
      desc: "Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.",
    },
    {
      icon: <Brain className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "GradeLens AI",
      desc: "Analizza le tue carte in tempo reale grazie alla nostra intelligenza artificiale.",
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "Marketplace Globale",
      desc: "Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.",
    },
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-28">
      <Navbar />
      
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-16">
        <motion.p
          className="text-yellow-400 text-lg font-semibold mb-4"
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
            width={120}
            height={120}
            className="mb-4"
          />
        </motion.div>

        <motion.h1
          className="text-2xl md:text-3xl font-semibold text-center max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </motion.h1>

        {/* CTA buttons */}
        <div className="flex gap-4 mt-2">
          <Link
            href="/marketplace"
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            Entra nel Marketplace
          </Link>
          <Link
            href="#features"
            className="px-6 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Scopri di più
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Perché Funkard</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 md:px-12 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex-1">
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scrolling Cards */}
      <section className="overflow-hidden py-10 bg-[#111]">
        <div className="animate-scroll flex gap-6 px-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="min-w-[200px] bg-[#1a1a1a] rounded-xl p-4 text-center shadow-glow"
            >
              <p className="font-semibold">Carta #{i + 1}</p>
              <p className="text-yellow-400 mt-1">Trend +{5 + i * 2}%</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Inizia la tua collezione oggi</h2>
        <p className="text-gray-400 mb-6">
          Zero abbonamenti. Solo meritocrazia e passione per le carte.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            Crea un account
          </Link>
          <Link
            href="/login"
            className="px-6 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Accedi
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}