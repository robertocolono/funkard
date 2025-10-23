import Link from "next/link";
import { Features } from "@/components/Features";
import CTA from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative pt-56 pb-48 text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/15 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-[0_0_30px_#FFB300]">
            Esplora, compra, vendi e scambia la tua collezione con un semplice click!
          </h1>
          <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Scopri collezioni leggendarie, scambia con la community e diventa un vero collezionista.
          </p>
          <Link
            href="/marketplace"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg py-5 px-12 rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-500 hover:scale-110 shadow-[0_0_40px_#FFB300]/60 hover:shadow-[0_0_50px_#FFB300]/80 transform hover:-translate-y-1"
          >
            🛒 Esplora il marketplace →
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <Features />

      {/* SPACER */}
      <div className="h-20 bg-gradient-to-b from-neutral-950 to-black" />

      {/* CTA */}
      <CTA />

      {/* SPACER */}
      <div className="h-20 bg-gradient-to-b from-black to-neutral-950" />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}