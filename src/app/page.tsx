"use client";
import { FunkardButton } from "@/components/ui/funkard-button";

export default function HomePage() {
  return (
    <main className="pt-6 bg-black min-h-screen">
      {/* 🦾 HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-28 bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">
          Esplora, compra, vendi e scambia in tutto il mondo{" "}
          <span className="text-yellow-500">con un semplice click!</span>
        </h1>

        <p className="text-gray-300 mb-8">
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </p>

        <div className="flex gap-4">
          <button className="funkard-btn">Entra nel Marketplace</button>
          <button className="funkard-btn">Crea un Account</button>
        </div>

        {/* Divider Glow */}
        <div className="mt-16 h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent opacity-60" />
      </section>

      {/* 💎 FEATURES SECTION */}
      <section className="py-12 bg-black text-center">
        <h2 className="text-2xl font-bold mb-10">
          Perché scegliere <span className="text-yellow-500">Funkard</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">SafeTrade</h3>
            <p className="text-gray-300 text-sm">
              Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-2">GradeLens</h3>
            <p className="text-gray-300 text-sm">
              Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Marketplace Globale</h3>
            <p className="text-gray-300 text-sm">
              Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.
            </p>
          </div>
        </div>
      </section>

      {/* 📈 TRENDING SECTION */}
      <section className="py-20 bg-black/95 text-center">
        <h2 className="text-3xl font-bold mb-12">Le carte più popolari del momento</h2>

        <div className="flex flex-wrap justify-center gap-6 px-6 max-w-6xl mx-auto">
          {["Carta #1", "Carta #2", "Carta #3", "Carta #4", "Carta #5", "Carta #6"].map((card, i) => (
            <div
              key={i}
              className="w-[160px] h-[120px] bg-zinc-900/70 border border-[#FFCC00]/10 rounded-xl flex flex-col justify-center items-center hover:border-[#FFCC00]/40 transition"
            >
              <p className="font-semibold">{card}</p>
              <span className="text-green-400 text-sm mt-1">Trend +{3 + i * 2}%</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <FunkardButton variant="primary">Scopri il Marketplace</FunkardButton>
        </div>
      </section>

      {/* 🧭 FOOTER */}
      <footer className="border-t border-[#FFCC00]/20 py-10 px-6 text-sm bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-[#FFCC00] mb-3">Navigazione</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Marketplace</li>
              <li>Collezione</li>
              <li>GradeLens</li>
              <li>Supporto</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FFCC00] mb-3">Legale</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Termini e Condizioni</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FFCC00] mb-3">Contatti</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Email: info@funkard.com</li>
              <li>Instagram: @funkard</li>
              <li>Telegram: @funkard</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-xs">
          © 2025 <span className="text-[#FFCC00]">Funkard</span> — made by collezionisti, per collezionisti.
        </div>
      </footer>
    </main>
  );
}