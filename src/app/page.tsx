"use client";
import { Home, LayoutGrid, Camera, HelpCircle, User } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 border-b border-zinc-800 bg-black">
        <h1 className="text-2xl font-bold text-white">FUNKARD</h1>
        <div className="hidden md:flex space-x-8 text-sm text-zinc-300">
          <a href="/marketplace" className="hover:text-yellow-400 transition">
            Marketplace
          </a>
          <a href="/collezione" className="hover:text-yellow-400 transition">
            Collezione
          </a>
          <a href="/gradelens" className="hover:text-yellow-400 transition">
            GradeLens
          </a>
          <a href="/supporto" className="hover:text-yellow-400 transition">
            Supporto
          </a>
          <a href="/profilo" className="hover:text-yellow-400 transition">
            Profilo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
        <img
          src="/funkard-logo.png"
          alt="Funkard Logo"
          className="w-32 h-32 mb-6"
        />
        <h1 className="text-4xl font-bold text-white mb-3">
          Esplora, compra, vendi e scambia in tutto il mondo!
        </h1>
        <a
          href="/marketplace"
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Esplora il Marketplace
        </a>

        {/* FEATURE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">
              Gestisci la tua collezione
            </h3>
            <p className="text-zinc-400 text-sm">
              Tieni traccia delle tue carte in modo semplice e visivo.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">
              Valuta le tue carte
            </h3>
            <p className="text-zinc-400 text-sm">
              Scopri il valore reale grazie alla tecnologia GradeLens.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">
              Connettiti con tutto il mondo
            </h3>
            <p className="text-zinc-400 text-sm">
              Compra e vendi in sicurezza con collezionisti globali.
            </p>
          </div>
        </section>

        <footer className="text-zinc-500 text-sm mt-20">
          Funkard © 2025 — Da collezionisti per collezionisti <br />
          <a href="/privacy" className="hover:text-yellow-400">Privacy</a> ·
          <a href="/cookie" className="hover:text-yellow-400">Cookie</a> ·
          <a href="/termini" className="hover:text-yellow-400">Termini</a>
        </footer>
      </main>

      {/* NAVBAR MOBILE */}
      <footer className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around items-center py-3 md:hidden">
        <a
          href="/marketplace"
          className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition"
        >
          <Home size={22} />
          <span className="text-xs mt-1">Market</span>
        </a>

        <a
          href="/collezione"
          className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition"
        >
          <LayoutGrid size={22} />
          <span className="text-xs mt-1">Collezione</span>
        </a>

        <a
          href="/gradelens"
          className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition"
        >
          <Camera size={22} />
          <span className="text-xs mt-1">GradeLens</span>
        </a>

        <a
          href="/supporto"
          className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition"
        >
          <HelpCircle size={22} />
          <span className="text-xs mt-1">Supporto</span>
        </a>

        <a
          href="/profilo"
          className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition"
        >
          <User size={22} />
          <span className="text-xs mt-1">Profilo</span>
        </a>
      </footer>
    </>
  );
}