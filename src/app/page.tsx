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
      icon: <Shield className="w-10 h-10 text-yellow-400 mb-3" />,
      title: "SafeTrade",
      desc: "Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.",
    },
    {
      icon: <Brain className="w-10 h-10 text-yellow-400 mb-3" />,
      title: "GradeLens AI",
      desc: "Analizza le tue carte in tempo reale grazie alla nostra intelligenza artificiale.",
    },
    {
      icon: <Globe className="w-10 h-10 text-yellow-400 mb-3" />,
      title: "Marketplace Globale",
      desc: "Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.",
    },
  ];

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
        <div className="flex flex-col md:flex-row gap-5 mt-2">
          <Link
            href="/marketplace"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_15px_rgba(242,178,55,0.6)]"
          >
            Entra nel Marketplace
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_15px_rgba(242,178,55,0.6)]"
          >
            Crea un account
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20">
        <h2 className="text-center text-3xl font-bold mb-14">Perché Funkard</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-16 px-6 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex-1 max-w-sm mx-auto">
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
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