"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* === SORRISO CON EFFETTO LUCE === */}
        <motion.div
          animate={{
            scale: hovered ? 1.1 : 1,
            rotate: hovered ? 2 : 0,
          }}
          transition={{ type: "spring", stiffness: 150 }}
          className="relative"
        >
          <Image
            src="/favicon.png"
            alt="Funkard Smile"
            width={220}
            height={220}
            priority
            className="rounded-full select-none"
          />

          {/* ✨ Effetto luce dinamico */}
          {hovered && (
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "120%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md opacity-50"
            />
          )}
        </motion.div>

        {/* === TESTO FUNKARD === */}
        <motion.h1
          className="mt-6 text-6xl font-extrabold tracking-wide drop-shadow-[0_0_10px_#FFB300]"
          animate={{ opacity: hovered ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          FUN<span className="text-yellow-500">KARD</span>
        </motion.h1>

        {/* === PULSANTE ESPLORA === */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-[-80px]"
          >
            <Link
              href="/marketplace"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition-all shadow-md"
            >
              Esplora il Marketplace
            </Link>
          </motion.div>
        )}
      </div>

      {/* === SLOGAN === */}
      <p className="mt-24 text-neutral-400 text-lg tracking-wide">
        Collect. Connect. Play.
      </p>
    </main>
  );
}
