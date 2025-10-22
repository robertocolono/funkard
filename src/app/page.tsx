"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Simulazione login (da sostituire con auth reale)
const isLoggedIn = false;

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className={`min-h-screen ${theme === "light" ? "bg-zinc-50 text-black" : "bg-black text-white"} transition-colors duration-300`}>
      
      {/* HERO SECTION */}
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
          Funkard è il marketplace moderno per collezionisti. Scopri il valore delle tue carte, gestisci la tua collezione e connettiti con la community.
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

      {/* HOMEPAGE GUEST */}
      {!isLoggedIn && (
        <>
          {/* MARKETPLACE PREVIEW */}
          <section className="px-6 py-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Dal marketplace</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition-transform">
                  <div className="h-48 bg-zinc-800 flex items-center justify-center text-gray-500">
                    Funkard Sample Image
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURE SECTION */}
          <section className={`py-16 px-6 text-center ${theme === "light" ? "bg-zinc-100" : "bg-zinc-950"}`}>
            <h2 className="text-3xl font-bold mb-4 text-funkard-yellow">
              Diventa un collezionista e divertiti!
            </h2>
            <p className="text-gray-400 mb-12">
              Scopri tutte le funzionalità del mondo Funkard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Marketplace intuitivo", text: "Compra e vendi carte in modo semplice, sicuro e moderno." },
                { title: "GradeLens AI", text: "Analizza e valuta le tue carte con intelligenza artificiale." },
                { title: "La tua collezione", text: "Gestisci e mostra le tue carte come un vero collezionista." },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 text-left border transition-all duration-300 ${
                    theme === "light"
                      ? "bg-white border-zinc-200 hover:shadow-light-soft"
                      : "bg-zinc-900 border-zinc-800 hover:shadow-[0_0_15px_#f2b23780]"
                  }`}
                >
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
            <h2 className="text-xl font-semibold mb-4">Valuta le tue carte (GradeLens)</h2>
            <div
              className={`rounded-2xl p-8 border text-center ${
                theme === "light"
                  ? "bg-white border-zinc-200"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">🧠 GradeLens – Scansione simulata</h3>
              <button className="bg-zinc-700 text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                Analizza la carta
              </button>
              <p className="mt-6 text-sm text-gray-400">
                ⚠️ Il punteggio assegnato da GradeLens è una stima simulata basata su parametri tecnici e/o valutazione manuale.
              </p>
            </div>
          </section>

          {/* SUPPORTO & COMMUNITY */}
          <section className="py-16 px-6 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Supporto</h3>
              <p className="text-gray-400 mb-2">
                Hai domande o problemi? Il nostro team è a disposizione.
              </p>
              <Link href="/support" className="text-funkard-yellow hover:underline">
                Vai al supporto →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-400 mb-2">
                Scopri consigli, guide e novità dal mondo del collezionismo.
              </p>
              <Link href="/community" className="text-funkard-yellow hover:underline">
                Entra in community →
              </Link>
            </div>
          </section>

          {/* CTA FINALE */}
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

      {/* HOMEPAGE LOGGED USER */}
      {isLoggedIn && (
        <>
          <section className="px-6 py-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Carte in evidenza</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition-transform">
                  <div className="h-48 bg-zinc-800 flex items-center justify-center text-gray-500">
                    Funkard Sample Image
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Supporto & Community */}
          <section className="py-16 px-6 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Supporto</h3>
              <p className="text-gray-400 mb-2">Hai domande o problemi? Il nostro team è a disposizione.</p>
              <Link href="/support" className="text-funkard-yellow hover:underline">
                Vai al supporto →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-400 mb-2">Scopri consigli, guide e novità dal mondo del collezionismo.</p>
              <Link href="/community" className="text-funkard-yellow hover:underline">
                Entra in community →
              </Link>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-zinc-800">
        Funkard © 2025 — Da collezionisti per collezionisti.
      </footer>
    </main>
  );
}