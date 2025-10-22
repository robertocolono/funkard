"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLoggedIn = false; // stato mock: versione pre-NextAuth

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main
      className={`min-h-screen ${
        theme === "light"
          ? "bg-zinc-50 text-black"
          : "bg-black text-white"
      } transition-colors duration-300`}
    >
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <Image
          src={theme === "light" ? "/logo2.png" : "/logo.png"}
          alt="Funkard Logo"
          width={140}
          height={140}
          className="mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Esplora, compra, vendi e scambia la tua collezione con un semplice click!
        </h1>

        <p className="text-gray-400 max-w-2xl mb-10">
          Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
        </p>

        {!isLoggedIn && (
          <Link
            href="/marketplace"
            className="bg-funkard-yellow text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Esplora il marketplace →
          </Link>
        )}
      </section>

      {/* SEZIONI GUEST */}
      {!isLoggedIn && (
        <>
          {/* MARKETPLACE PREVIEW */}
          <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-lg md:text-xl font-semibold">Dal marketplace</h2>
            <Link href="/marketplace" className="text-funkard-yellow hover:underline mt-2 md:mt-0">
              Esplora il marketplace →
            </Link>
          </section>

          {/* FEATURE SECTION */}
          <section
            className={`py-16 px-6 text-center ${
              theme === "light" ? "bg-zinc-100" : "bg-zinc-950"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "light"
                  ? "text-funkard-yellow"
                  : "text-funkard-yellow drop-shadow-[0_0_12px_#f2b237]"
              }`}
            >
              Diventa un collezionista e divertiti!
            </h2>
            <p className="text-gray-400 mb-12">
              Scopri tutte le funzionalità del mondo Funkard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: "🛒",
                  title: "Marketplace intuitivo",
                  text: "Compra e vendi carte in modo semplice, sicuro e moderno.",
                },
                {
                  icon: "🔍",
                  title: "GradeLens AI",
                  text: "Analizza e valuta le tue carte con intelligenza artificiale.",
                },
                {
                  icon: "💼",
                  title: "La tua collezione",
                  text: "Gestisci e mostra le tue carte come un vero collezionista.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 text-left border transition-all duration-300 ${
                    theme === "light"
                      ? "bg-white border-zinc-200 hover:shadow-light-soft"
                      : "bg-zinc-900 border-zinc-800 hover:shadow-[0_0_20px_#f2b23780]"
                  }`}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-funkard-yellow mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GRADELENS SECTION */}
          <section className="py-16 px-6 max-w-5xl mx-auto">
            <div
              className={`rounded-2xl p-8 border ${
                theme === "light"
                  ? "bg-white border-zinc-200"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  Valuta le tue carte (GradeLens)
                </h2>
                <Link href="/gradelens" className="text-funkard-yellow hover:underline">
                  Prova ora →
                </Link>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">
                  🧠 GradeLens – Scansione simulata
                </h3>
                <button className="bg-zinc-700 text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                  Analizza la carta
                </button>

                <div
                  className={`mt-8 rounded-xl p-4 text-left text-sm ${
                    theme === "light"
                      ? "bg-yellow-50 border border-yellow-200 text-yellow-800"
                      : "bg-yellow-900/30 border border-yellow-700 text-yellow-300"
                  }`}
                >
                  <p className="font-semibold mb-1">⚠️ Importante</p>
                  <p>
                    Il punteggio assegnato da GradeLens è una{" "}
                    <strong>stima simulata</strong> basata su parametri tecnici
                    e/o valutazione manuale. Non rappresenta una certificazione
                    ufficiale di condizione o valore.
                  </p>
                  <p className="mt-2">
                    Le valutazioni possono differire da quelle di enti di grading
                    professionali (PSA, BGS, CGC, ecc.).
                  </p>
                </div>

                <p className="mt-4 text-gray-500 text-xs italic">
                  *Valutazione simulata non ufficiale. Le carte possono differire
                  da grading professionali.
                </p>
              </div>
            </div>
          </section>

          {/* SUPPORTO & COMMUNITY */}
          <section className="py-16 px-6 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Supporto</h3>
              <p className="text-gray-400 mb-2">
                Hai domande o problemi? Il nostro team è a disposizione. Apri un ticket e ti aiutiamo subito.
              </p>
              <Link href="/support" className="text-funkard-yellow hover:underline">
                Vai al supporto →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-400 mb-2">
                Scopri consigli, guide e novità dal mondo del collezionismo. Condividi esperienze con altri collezionisti.
              </p>
              <Link href="/community" className="text-funkard-yellow hover:underline">
                Entra in community →
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-10">
            <Link
              href="/register"
              className="bg-funkard-yellow text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
            >
              Registrati ora
            </Link>
          </div>
        </>
      )}

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-zinc-800">
        Funkard © 2025 — Da collezionisti per collezionisti.
      </footer>
    </main>
  );
}