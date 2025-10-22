"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-background text-foreground">
        {/* Hero */}
        <section className="pt-24 pb-16">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Funkard Logo"
              width={180}
              height={180}
              className="drop-shadow-[0_0_25px_rgba(242,178,55,0.6)] mb-6"
            />
            <h1 className="text-4xl sm:text-5xl font-display text-funkard-yellow mb-4">
              Colleziona. Scambia. Divertiti.
            </h1>
            <p className="max-w-2xl text-sm sm:text-base opacity-80 mb-8">
              Il marketplace moderno per carte da collezione. Sicuro, trasparente e divertente.
            </p>
            <Link href="/register">
              <button className="bg-funkard-yellow text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
                Registrati ora
              </button>
            </Link>
          </div>
        </section>

        {/* Sezione: Diventa un collezionista */}
        <section className="w-full py-section bg-funkard-black text-white">
          <h2 className="text-3xl font-bold text-funkard-yellow mb-8 drop-shadow-[0_0_15px_rgba(242,178,55,0.7)]">
            Diventa un collezionista e divertiti!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            <div className="rounded-2xl bg-funkard-gray p-6 shadow-dark-glow hover:scale-[1.02] transition-transform border border-gray-800">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="text-lg font-semibold text-funkard-yellow mb-1">
                Marketplace intuitivo
              </h3>
              <p className="opacity-80 text-gray-300">Compra e vendi carte in modo semplice, sicuro e moderno.</p>
            </div>

            <div className="rounded-2xl bg-funkard-gray p-6 shadow-dark-glow hover:scale-[1.02] transition-transform border border-gray-800">
              <div className="text-4xl mb-3">🔎</div>
              <h3 className="text-lg font-semibold text-funkard-yellow mb-1">
                GradeLens AI
              </h3>
              <p className="opacity-80 text-gray-300">Analizza e valuta le tue carte con intelligenza artificiale.</p>
            </div>

            <div className="rounded-2xl bg-funkard-gray p-6 shadow-dark-glow hover:scale-[1.02] transition-transform border border-gray-800">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-funkard-yellow mb-1">
                La tua collezione
              </h3>
              <p className="opacity-80 text-gray-300">Gestisci e mostra le tue carte come un vero collezionista.</p>
            </div>
          </div>
        </section>

        {/* Sezione: GradeLens */}
        <section className="w-full py-section bg-funkard-gray text-white text-center">
          <h2 className="text-3xl font-bold text-funkard-yellow mb-4 drop-shadow-[0_0_15px_rgba(242,178,55,0.7)]">
            GradeLens – Scansione simulata
          </h2>
          <p className="opacity-80 mb-6 max-w-xl mx-auto text-gray-300">
            Scansiona le tue carte per simulare una valutazione visiva. <br />
            <span className="text-funkard-yellow font-semibold">AI in sviluppo</span> – funzionalità disponibile presto!
          </p>
          <div className="max-w-lg mx-auto p-6 border border-gray-700 rounded-2xl bg-funkard-black shadow-dark-glow">
            <p className="text-sm opacity-75">
              🔍 Carica un'immagine della tua carta per provare la scansione simulata.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-10 bg-funkard-black text-sm text-center opacity-80 border-t border-gray-800">
          <p className="text-gray-400">© {new Date().getFullYear()} Funkard. Tutti i diritti riservati.</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="/support" className="hover:text-funkard-yellow transition text-gray-300">
              Supporto
            </Link>
            <Link href="/community" className="hover:text-funkard-yellow transition text-gray-300">
              Community
            </Link>
            <Link href="/register" className="hover:text-funkard-yellow transition text-gray-300">
              Registrati
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}