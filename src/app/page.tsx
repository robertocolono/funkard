"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0C0C0C] text-white text-center">
      {/* Logo principale */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Sorriso */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/android-chrome-512x512.png"
            alt="Funkard Logo"
            width={300}
            height={300}
            priority
            className="select-none"
          />
        </motion.div>

        {/* Nome FUNKARD */}
        <motion.h1
          className="text-5xl font-extrabold mt-6"
          initial={{ textShadow: "0 0 0px #FFB300" }}
          animate={{
            textShadow: hovered
              ? "0 0 20px #FFB300, 0 0 40px #FF7A00"
              : "0 0 0px #FFB300",
          }}
          transition={{ duration: 0.3 }}
        >
          FUNKARD
        </motion.h1>

        <p className="mt-2 text-gray-300">Collect. Connect. Play.</p>

        {/* Bottone “Esplora il Marketplace” */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/marketplace"
            className="mt-6 inline-block bg-gradient-to-r from-[#FFB300] to-[#FF7A00] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-amber-400/50 transition"
          >
            Esplora il Marketplace
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Funkard — Collect. Connect. Play.
      </footer>
    </main>
  );
}
