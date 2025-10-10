"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-funkard-black text-white">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Sorriso animato */}
        <motion.div
          animate={{
            scale: hovered ? 1.1 : 1,
            rotate: hovered ? 2 : 0,
          }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <Image
            src="/favicon.png"
            alt="Funkard Smile"
            width={220}
            height={220}
            priority
          />
        </motion.div>

        {/* Testo FUNKARD */}
        <motion.h1
          className="mt-6 text-5xl font-extrabold tracking-wide"
          animate={{ opacity: hovered ? 0.7 : 1 }}
          transition={{ duration: 0.3 }}
        >
          FUN<span className="text-funkard-yellow">KARD</span>
        </motion.h1>

        {/* Pulsante "Esplora il Marketplace" */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-[-80px]"
          >
            <Link
              href="/marketplace"
              className="px-6 py-3 bg-funkard-yellow text-black font-semibold rounded-xl hover:bg-funkard-orange transition"
            >
              Esplora il Marketplace
            </Link>
          </motion.div>
        )}
      </div>

      {/* Slogan */}
      <p className="mt-16 text-neutral-400 text-lg">
        Collect. Connect. Play.
      </p>
    </main>
  );
}
