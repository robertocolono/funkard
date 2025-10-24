"use client";
import { FunkardButton } from "@/components/ui/funkard-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-[Inter]">
      {/* 🌟 NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-md border-b border-[#FFCC00]/20">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Funkard" className="w-8 h-8" />
          <span className="text-[#FFCC00] font-semibold text-lg tracking-wide">
            FUNKARD
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center space-x-6 text-sm">
          <a href="#" className="hover:text-[#FFCC00] transition">Marketplace</a>
          <a href="#" className="hover:text-[#FFCC00] transition">Collezione</a>
          <a href="#" className="hover:text-[#FFCC00] transition">GradeLens</a>
          <a href="#" className="hover:text-[#FFCC00] transition">Supporto</a>
          <FunkardButton>Registrati</FunkardButton>
        </div>
      </nav>

      {/* 🦾 HERO SECTION */}
      <section className="pt-40 pb-24 text-center bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Esplora, compra, vendi e scambia in tutto il mondo{" "}
            <span className="text-[#FFCC00] drop-shadow-[0_0_8px_rgba(255,204,0,0.8)]">
              con un semplice click!
            </span>
          </h1>
          <p className="text-gray-400 mb-10 text-lg">
            Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
          </p>

          <div className="flex justify-center space-x-4">
            <FunkardButton variant="primary">Entra nel Marketplace</FunkardButton>
            <FunkardButton variant="secondary">Crea un Account</FunkardButton>
          </div>
        </div>

        {/* Divider Glow */}
        <div className="mt-16 h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent opacity-60" />
      </section>

      {/* 💎 FEATURES SECTION */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          Perché scegliere <span className="text-[#FFCC00]">Funkard</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-[#FFCC00]/10 hover:border-[#FFCC00]/30 backdrop-blur-md text-center transition hover:scale-[1.03] shadow-[0_0_15px_rgba(255,204,0,0.1)]">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">SafeTrade</h3>
            <p className="text-gray-400">
              Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-[#FFCC00]/10 hover:border-[#FFCC00]/30 backdrop-blur-md text-center transition hover:scale-[1.03] shadow-[0_0_15px_rgba(255,204,0,0.1)]">
            <div className="text-3xl mb-3">🧾</div>
            <h3 className="text-xl font-semibold mb-2">GradeLens</h3>
            <p className="text-gray-400">
              Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-[#FFCC00]/10 hover:border-[#FFCC00]/30 backdrop-blur-md text-center transition hover:scale-[1.03] shadow-[0_0_15px_rgba(255,204,0,0.1)]">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Marketplace Globale</h3>
            <p className="text-gray-400">
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