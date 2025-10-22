"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-funkard-black text-white min-h-screen">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-section">
        <img src="/logo.png" alt="Funkard Logo" className="w-28 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Esplora, compra, vendi e scambia la tua collezione con un semplice click!
        </h1>
        <p className="max-w-2xl text-gray-300 mb-6">
          Esplora collezioni leggendarie, scambia con la community e diventa un
          collezionista esperto o amatoriale con il nostro supporto.
        </p>
        <Link
          href="/marketplace"
          className="text-funkard-yellow font-medium hover:text-funkard-yellow/80 transition-colors"
        >
          Esplora il marketplace →
        </Link>
      </section>

      {/* FEATURE SECTION */}
      <section className="bg-funkard-gray py-section text-center">
        <h2 className="text-3xl font-bold text-funkard-yellow mb-4 drop-shadow-[0_0_15px_rgba(242,178,55,0.7)]">
          Diventa un collezionista e divertiti!
        </h2>
        <p className="text-gray-300 mb-12">
          Scopri tutte le funzionalità del mondo Funkard.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
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
              className="bg-funkard-black border border-gray-800 rounded-2xl p-6 shadow-dark-glow hover:scale-[1.02] transition-transform"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-funkard-yellow text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRADE LENS */}
      <section className="py-section bg-funkard-black text-center">
        <div className="max-w-3xl mx-auto border border-gray-800 rounded-2xl p-8 shadow-light-soft">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-funkard-yellow">GradeLens</span> – Scansione simulata
          </h2>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition">
            Analizza la carta
          </button>

          <div className="mt-6 border border-yellow-600/30 bg-yellow-500/10 rounded-md p-4 text-left text-sm">
            <p className="font-semibold text-yellow-400 mb-1">⚠️ Importante</p>
            <p className="text-gray-300">
              Il punteggio assegnato da GradeLens è una stima simulata basata su
              parametri tecnici e/o valutazione manuale. Non rappresenta una
              certificazione ufficiale di condizione o valore.
            </p>
            <p className="text-gray-400 mt-2">
              Le valutazioni possono differire da quelle di enti di grading
              professionali (PSA, BGS, CGC, ecc.).
            </p>
          </div>

          <p className="mt-4 text-xs text-gray-500 italic">
            *Valutazione simulata non ufficiale. Le carte possono differire da grading professionali.
          </p>
        </div>
      </section>

      {/* SUPPORT & COMMUNITY */}
      <footer className="py-section bg-funkard-gray border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left px-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Supporto</h3>
            <p className="text-gray-300 mb-2">
              Hai domande o problemi? Il nostro team è a disposizione.
            </p>
            <Link
              href="/support"
              className="text-funkard-yellow hover:text-funkard-yellow/80 font-medium"
            >
              Vai al supporto →
            </Link>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Community</h3>
            <p className="text-gray-300 mb-2">
              Scopri guide, consigli e novità dal mondo del collezionismo.
            </p>
            <Link
              href="/community"
              className="text-funkard-yellow hover:text-funkard-yellow/80 font-medium"
            >
              Entra in community →
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/register"
            className="bg-funkard-yellow text-black font-semibold px-5 py-2 rounded-md hover:brightness-110 transition"
          >
            Registrati ora
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            Funkard © 2025 — Da collezionisti per collezionisti.
          </p>
        </div>
      </footer>
    </main>
  );
}