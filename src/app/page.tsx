"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-400">FUN</span>KARD
        </h1>
        <div className="flex items-center gap-6">
          <a href="/marketplace" className="hover:text-yellow-400 transition">Marketplace</a>
          <a href="/collection" className="hover:text-yellow-400 transition">Collezione</a>
          <a href="/gradelens" className="hover:text-yellow-400 transition">GradeLens</a>
          <a href="/support" className="hover:text-yellow-400 transition">Support</a>
          <Button className="bg-yellow-400 text-black font-semibold rounded-xl px-5 py-2 hover:bg-yellow-300">
            Registrati
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center mt-16 px-6">
        <Image
          src="/logo.png"
          alt="Funkard Logo"
          width={200}
          height={200}
          className="mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Esplora, compra, vendi e scambia in tutto il mondo!
        </h2>
        <Button
          size="lg"
          className="bg-yellow-400 text-black font-bold text-lg px-8 py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          Esplora il Marketplace
        </Button>
      </section>

      {/* FEATURE SECTION */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-stretch gap-6 mt-24 px-6">
        {[
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
        ].map((feature, i) => (
          <Card
            key={i}
            className="flex-1 bg-zinc-900 border-zinc-800 hover:border-yellow-400 transition rounded-2xl"
          >
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {feature.title}
              </h3>
              <p className="text-zinc-400">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-24 mb-10 text-sm text-zinc-500 text-center px-4">
        <p>Funkard © 2025 — Da collezionisti per collezionisti</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/privacy" className="hover:text-yellow-400 transition">Privacy</a>
          <a href="/cookie" className="hover:text-yellow-400 transition">Cookie</a>
          <a href="/terms" className="hover:text-yellow-400 transition">Termini</a>
        </div>
      </footer>
    </main>
  );
}