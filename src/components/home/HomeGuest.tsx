"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SupportCommunity from "@/components/sections/SupportCommunity";

type Card = {
  id: string;
  title: string;
  price: number;
  image: string;
  seller?: string;
  condition?: string;
};

export default function HomeGuest() {
  const { theme } = useTheme();
  const [featured, setFeatured] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // Endpoint "carte in evidenza reali"
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/market/featured?limit=4`, { 
          cache: "no-store" 
        });
        if (!res.ok) throw new Error("featured fail");
        const data = await res.json();
        setFeatured(data);
      } catch {
        // Fallback con carte mock
        setFeatured([
          { id: "1", title: "Charizard Base Set", price: 250, image: "/images/sample/charizard.jpg" },
          { id: "2", title: "Booster Box", price: 120, image: "/images/sample/booster-box.jpg" },
          { id: "3", title: "Elite Trainer Box", price: 45, image: "/images/sample/etb.jpg" },
          { id: "4", title: "Pikachu VMAX", price: 35, image: "/images/placeholder.svg" },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10">
      {/* HERO */}
      <section className="mb-10 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Esplora, compra, vendi e scambia la tua collezione con un semplice click!
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-base sm:text-lg">
            Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
          </p>
          <img
            src="/logo.png"
            alt="Funkard Logo"
            className="w-28 sm:w-40 mx-auto mb-6"
          />
          <Link
            href="/marketplace"
            className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-funkard-yellow text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Esplora il Marketplace →
          </Link>
        </div>
      </section>

      {/* ANTEPRIMA MARKETPLACE */}
      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dal marketplace</h2>
          <Link href="/marketplace" className="text-funkard-yellow hover:opacity-80 transition">
            Esplora il marketplace →
          </Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-card shadow-card" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map((c) => (
              <div key={c.id} className="rounded-xl bg-card p-4 shadow-card hover:scale-[1.02] transition-transform">
                <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
                <h3 className="font-semibold mb-1">{c.title}</h3>
                <p className="text-funkard-yellow font-medium">€{c.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-funkard-yellow mb-4 text-center glow-yellow">
          Diventa un collezionista e divertiti!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
          Scopri tutte le funzionalità del mondo Funkard.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Marketplace intuitivo",
              desc: "Compra e vendi carte in modo semplice, sicuro e moderno.",
              icon: "🛒",
            },
            {
              title: "GradeLens AI",
              desc: "Analizza e valuta le tue carte con intelligenza artificiale.",
              icon: "🔍",
            },
            {
              title: "La tua collezione",
              desc: "Gestisci e mostra le tue carte come un vero collezionista.",
              icon: "💼",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 shadow-md glow-yellow transition-all hover:scale-[1.01]"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-funkard-yellow font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRADELENS SHOWCASE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-md p-6 sm:p-8 transition-colors">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            🧠 GradeLens – Scansione simulata
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Analizza la tua carta in modo istantaneo con la nostra tecnologia AI.
          </p>

          <button className="w-full py-2.5 sm:py-3 bg-funkard-yellow text-black font-semibold rounded-lg hover:opacity-90 transition">
            Analizza la carta
          </button>
        </div>
      </section>

      {/* SUPPORTO & COMMUNITY */}
      <SupportCommunity />

      {/* CTA FINALE */}
      <section className="mt-12 text-center">
        <Link
          href="/register"
          className="rounded-lg bg-funkard-yellow px-6 py-3 font-semibold text-black shadow-sm hover:opacity-90 transition"
        >
          Registrati ora
        </Link>
        <p className="mt-6 text-sm text-muted-foreground">
          Funkard © 2025 — Da collezionisti per collezionisti.
        </p>
      </section>
    </main>
  );
}