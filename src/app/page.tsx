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
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <a
            href="/marketplace"
            className="px-10 py-3 text-lg font-semibold text-black bg-funkard-yellow rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,204,0,0.4)]"
          >
            Entra nel Marketplace
          </a>
          <a
            href="/register"
            className="px-10 py-3 text-lg font-semibold text-funkard-yellow border-2 border-funkard-yellow rounded-lg hover:bg-funkard-yellow hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,204,0,0.4)]"
          >
            Crea un account
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-black text-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Perché scegliere Funkard</h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "SafeTrade",
              desc: "Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-funkard-yellow mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.121A4 4 0 014 17V9a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-1.121 2.121M9 21h6" />
                </svg>
              ),
            },
            {
              title: "GradeLens AI",
              desc: "Analizza le tue carte in tempo reale grazie alla nostra intelligenza artificiale.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-funkard-yellow mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
                </svg>
              ),
            },
            {
              title: "Marketplace Globale",
              desc: "Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-funkard-yellow mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 13h10l4-8H5.4" />
                  <circle cx="7" cy="21" r="1" />
                  <circle cx="17" cy="21" r="1" />
                </svg>
              ),
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex-1 bg-[#111] rounded-xl p-6 text-center border border-neutral-800 hover:border-funkard-yellow hover:shadow-[0_0_15px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
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