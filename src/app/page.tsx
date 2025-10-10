"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white">
      <motion.div
        onHoverStart={() => {
          setHovered(true);
          controls.start({ scaleY: 1.15, transition: { duration: 0.3 } });
        }}
        onHoverEnd={() => {
          setHovered(false);
          controls.start({ scaleY: 1, transition: { duration: 0.3 } });
        }}
        animate={controls}
        className="cursor-pointer"
      >
        <img
          src="/favicon.png"
          alt="Funkard smile"
          className="w-64 h-64 mx-auto"
        />
      </motion.div>

      <h1 className="text-4xl font-bold mt-8">
        <span className="text-yellow-400">FUN</span>KARD
      </h1>

      <p className="mt-2 text-gray-400">Collect. Connect. Play.</p>

      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <Link
            href="/marketplace"
            className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            Esplora il Marketplace
          </Link>
        </motion.div>
      )}
    </main>
  );
}
