import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            FUNKARD
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="text-white hover:text-yellow-400 transition-colors">
              Esplora le collezioni
            </Link>
            <Link href="/collection" className="text-white hover:text-yellow-400 transition-colors">
              Gestisci la tua collezione
            </Link>
            <Link href="/gradelens" className="text-white hover:text-yellow-400 transition-colors">
              Valuta le tue carte
            </Link>
            <Link href="/support" className="text-white hover:text-yellow-400 transition-colors">
              Supporto
            </Link>
            <Link href="/faq" className="text-white hover:text-yellow-400 transition-colors">
              FAQ
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Registrati
            </Link>
            <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors">
              Light
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Esplora, compra, vendi e scambia la tua collezione con un semplice click!
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Dal marketplace</span>
            <Link href="/marketplace" className="text-white hover:text-yellow-400 transition-colors">
              Esplora il marketplace →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <Features />

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
