"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-[Bungee]">
            <span className="text-[#f2b237]">FUN</span>KARD
          </h1>
          <Link
            href="/register"
            className="bg-[#f2b237] text-black font-semibold px-6 py-3 rounded-lg text-lg hover:bg-[#ffca47] transition-all"
          >
            Registrati
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center h-screen w-full px-6 pt-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-[Bungee] mb-6">
          Colleziona. Scambia. Vivi la Passione.
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-10">
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace,
         AI e community in un&apos;unica piattaforma.
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/marketplace">
            <Button variant="primary" size="lg">
              Esplora il Marketplace
            </Button>
          </Link>
          <Link href="/gradelens">
            <Button variant="secondary" size="lg">
              Scopri GradeLens AI
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-32 px-6">
        <div className="bg-[#161616] rounded-2xl p-10 border border-neutral-800 hover:border-[#f2b237] transition-all">
          <h3 className="text-2xl font-bold text-[#f2b237] mb-4">
            🛒 Marketplace Intuitivo
          </h3>
          <p className="text-gray-400">
            Compra e vendi carte in un ambiente sicuro, trasparente e pensato per
            i collezionisti veri.
          </p>
        </div>

        <div className="bg-[#161616] rounded-2xl p-10 border border-neutral-800 hover:border-[#f2b237] transition-all">
          <h3 className="text-2xl font-bold text-[#f2b237] mb-4">
            🧠 GradeLens AI
          </h3>
          <p className="text-gray-400">
        Analizza le tue carte con l&apos;intelligenza artificiale e ottieni una
            valutazione istantanea e precisa.
          </p>
        </div>

        <div className="bg-[#161616] rounded-2xl p-10 border border-neutral-800 hover:border-[#f2b237] transition-all">
          <h3 className="text-2xl font-bold text-[#f2b237] mb-4">
            🌍 Community Autentica
          </h3>
          <p className="text-gray-400">
            Connettiti con altri collezionisti, condividi la tua collezione e
            scopri nuove passioni.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-neutral-800 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Funkard — Da collezionisti, per collezionisti.
      </footer>
    </main>
  );
}