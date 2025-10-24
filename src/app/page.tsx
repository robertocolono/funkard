"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const features = [
    {
      title: "Gestisci la tua collezione",
      desc: "Tieni traccia delle tue carte in modo semplice e visivo.",
    },
    {
      title: "Valuta le tue carte",
      desc: "Scopri il valore reale grazie alla tecnologia GradeLens.",
    },
    {
      title: "Connettiti con tutto il mondo",
      desc: "Compra e vendi in sicurezza con collezionisti globali.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-yellow-400">FUN</span>KARD
        </h1>
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="/marketplace" className="hover:text-yellow-400 transition">Marketplace</a>
          <a href="/collection" className="hover:text-yellow-400 transition">Collezione</a>
          <a href="/gradelens" className="hover:text-yellow-400 transition">GradeLens</a>
          <a href="/support" className="hover:text-yellow-400 transition">Support</a>
          <Button className="bg-yellow-400 text-black font-semibold rounded-xl px-5 py-2 hover:bg-yellow-300 transition">
            Registrati
          </Button>
        </div>
      </nav>

      {/* HERO FULLSCREEN */}
      <section className="flex flex-col justify-center items-center text-center flex-1 px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={240}
            height={240}
            className="mb-6"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold mb-8 max-w-2xl"
        >
          Esplora, compra, vendi e scambia in tutto il mondo!
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-yellow-400 text-black font-bold text-lg px-10 py-4 rounded-2xl hover:bg-yellow-300 transition"
          >
            Esplora il Marketplace
          </Button>
        </motion.div>
      </section>

      {/* FEATURE SECTION */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10 px-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Card className="bg-zinc-900 border-zinc-800 hover:border-yellow-400 transition rounded-2xl shadow-md hover:shadow-yellow-400/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-20 mb-10 text-sm text-zinc-500 text-center px-4">
        <p>Funkard © 2025 — Da collezionisti per collezionisti</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/privacy" className="hover:text-yellow-400 transition">Privacy</a>
          <a href="/cookie" className="hover:text-yellow-400 transition">Cookie</a>
          <a href="/terms" className="hover:text-yellow-400 transition">Termini</a>
        </div>
      </footer>
    </main>
  );
}