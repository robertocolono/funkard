import Link from "next/link";
import { Features } from "@/components/Features";
import CTA from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative pt-40 pb-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-black to-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6 leading-tight">
            Esplora, compra, vendi e scambia la tua collezione con un semplice click!
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Scopri collezioni leggendarie, scambia con la community e diventa un vero collezionista.
          </p>
          <Link
            href="/marketplace"
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors shadow-[0_0_25px_#FFB300]/50"
          >
            Esplora il marketplace →
          </Link>
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