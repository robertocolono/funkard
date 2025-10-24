"use client";
import { Layers, Search, Mail, User } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur border-b border-zinc-800">
        <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <a href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-yellow-400">FUN</span>KARD
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="/marketplace" className="hover:text-yellow-400 transition">Marketplace</a>
            <a href="/collection"   className="hover:text-yellow-400 transition">Collezione</a>
            <a href="/gradelens"    className="hover:text-yellow-400 transition">GradeLens</a>
            <a href="/support"      className="hover:text-yellow-400 transition">Support</a>
            <a href="/signup" className="bg-yellow-400 text-black font-semibold rounded-xl px-5 py-2 hover:bg-yellow-300 transition">
              Registrati
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENUTO */}
      <main className="bg-black text-white">
        {/* HERO = sezione a sé, NON centrare tutta la pagina */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-20 text-center">
          {/* usa il nome reale del file nel /public (es. /logo.png) */}
          <img src="/logo.png" alt="Funkard Logo" className="mx-auto w-36 h-36 mb-6" />

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Esplora, compra, vendi e scambia in tutto il mondo!
          </h1>

          <a
            href="/marketplace"
            className="inline-block bg-yellow-400 text-black font-semibold rounded-xl px-6 py-3 hover:bg-yellow-300 transition"
          >
            Esplora il Marketplace
          </a>
        </section>

        {/* FEATURE GRID — sezione indipendente, con il SUO wrapper grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-12 pb-16 text-center">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">Gestisci la tua collezione</h3>
            <p className="text-zinc-400 text-sm">Tieni traccia delle tue carte in modo semplice e visivo.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">Valuta le tue carte</h3>
            <p className="text-zinc-400 text-sm">Scopri il valore reale grazie alla tecnologia GradeLens.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">Connettiti con tutto il mondo</h3>
            <p className="text-zinc-400 text-sm">Compra e vendi in sicurezza con collezionisti globali.</p>
          </div>
        </section>

        {/* FOOTER DESKTOP */}
        <footer className="hidden md:block border-t border-zinc-800 text-center text-sm text-zinc-500 py-8">
          Funkard © 2025 — Da collezionisti per collezionisti ·{" "}
          <a href="/privacy" className="hover:text-yellow-400">Privacy</a> ·{" "}
          <a href="/cookie" className="hover:text-yellow-400">Cookie</a> ·{" "}
          <a href="/terms" className="hover:text-yellow-400">Termini</a>
        </footer>
      </main>

      {/* NAVBAR MOBILE IN BASSO (fuori dal main) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-black/90 backdrop-blur border-t border-zinc-800">
        <div className="flex justify-around items-center py-2">
          <a href="/marketplace" className="flex flex-col items-center text-[10px] text-zinc-400 hover:text-yellow-400">
            <Layers className="h-5 w-5 mb-1" /> Market
          </a>
          <a href="/collection" className="flex flex-col items-center text-[10px] text-zinc-400 hover:text-yellow-400">
            <Layers className="h-5 w-5 mb-1" /> Collezione
          </a>
          <a href="/gradelens" className="flex flex-col items-center text-[10px] text-zinc-400 hover:text-yellow-400">
            <Search className="h-5 w-5 mb-1" /> GradeLens
          </a>
          <a href="/support" className="flex flex-col items-center text-[10px] text-zinc-400 hover:text-yellow-400">
            <Mail className="h-5 w-5 mb-1" /> Supporto
          </a>
          <a href="/profile" className="flex flex-col items-center text-[10px] text-zinc-400 hover:text-yellow-400">
            <User className="h-5 w-5 mb-1" /> Profilo
          </a>
        </div>
      </nav>
    </>
  );
}