"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#0b0b0b] text-white">
      {/* Glow radiale caldo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23733_0%,_#0b0b0b_80%)] pointer-events-none" />

      <section className="relative z-10 flex flex-col items-center text-center gap-8 px-4 py-24">
        {/* Benvenuto */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#f2b237] text-xl md:text-2xl font-semibold tracking-wide"
        >
          Benvenuto su <span className="font-[Bungee]">FUNKARD!</span>
        </motion.p>

        {/* Smile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={380}
            height={380}
            className="w-64 md:w-80 lg:w-[400px] select-none"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight"
        >
          COLLEZIONA. SCAMBIA. VIVI LA PASSIONE.
        </motion.h1>

        {/* Descrizione */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community
          in un&apos;unica piattaforma.
        </motion.p>

        {/* Bottoni */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-5 mt-6"
        >
          <Link
            href="/marketplace"
            className="px-12 py-4 text-white font-semibold text-lg rounded-md border-[3px] border-[#f2b237]
                       shadow-[0_0_15px_#f2b23744] hover:shadow-[0_0_30px_#f2b23788]
                       hover:bg-[#f2b237] hover:text-black transition-all duration-300"
          >
            Esplora il Marketplace
          </Link>

          <Link
            href="/gradelens"
            className="px-12 py-4 text-white font-semibold text-lg rounded-md border-[3px] border-[#f2b237]
                       shadow-[0_0_15px_#f2b23744] hover:shadow-[0_0_30px_#f2b23788]
                       hover:bg-[#f2b237] hover:text-black transition-all duration-300"
          >
            Scopri GradeLens AI
          </Link>
        </motion.div>
      </section>
    </main>
  );
}