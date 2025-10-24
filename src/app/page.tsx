"use client";
import { Layers, Search, Mail, User } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* NAVBAR DESKTOP - Sticky Top */}
      <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur border-b border-zinc-800">
        <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo FUNKARD */}
          <a href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-yellow-400">FUN</span>KARD
          </a>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="/marketplace" className="hover:text-yellow-400 transition-colors">
              Marketplace
            </a>
            <a href="/collezione" className="hover:text-yellow-400 transition-colors">
              Collezione
            </a>
            <a href="/gradelens" className="hover:text-yellow-400 transition-colors">
              GradeLens
            </a>
            <a href="/support" className="hover:text-yellow-400 transition-colors">
              Support
            </a>
            <a 
              href="/registrati" 
              className="bg-yellow-400 text-black font-semibold rounded-xl px-5 py-2 hover:bg-yellow-300 transition-colors"
            >
              Registrati
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Centrata con spazio sopra */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          {/* Logo Funkard grande e centrato */}
          <img 
            src="/logo.png" 
            alt="Funkard Logo" 
            className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-8"
          />
          
          {/* Titolo principale */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Esplora, compra, vendi e scambia in tutto il mondo!
          </h1>
          
          {/* CTA Button */}
          <a
            href="/marketplace"
            className="inline-block bg-yellow-400 text-black font-semibold rounded-xl px-8 py-4 text-lg hover:bg-yellow-300 transition-colors"
          >
            Esplora il Marketplace
          </a>
        </div>
      </section>

      {/* FEATURES SECTION - 3 colonne su desktop, 1 su mobile */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">
                Gestisci la tua collezione
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Tieni traccia delle tue carte in modo semplice e visivo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">
                Valuta le tue carte
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Scopri il valore reale grazie alla tecnologia GradeLens.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">
                Connettiti con tutto il mondo
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Compra e vendi in sicurezza con collezionisti globali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DESKTOP */}
      <footer className="hidden md:block bg-black border-t border-zinc-800 text-center py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-zinc-500 text-sm">
            Funkard © 2025 — Da collezionisti per collezionisti
          </p>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVBAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-t border-zinc-800">
        <div className="flex justify-around items-center py-3">
          <a 
            href="/marketplace" 
            className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <Layers className="h-5 w-5 mb-1" />
            <span className="text-xs">Market</span>
          </a>
          
          <a 
            href="/collezione" 
            className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <Layers className="h-5 w-5 mb-1" />
            <span className="text-xs">Collezione</span>
          </a>
          
          <a 
            href="/gradelens" 
            className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <Search className="h-5 w-5 mb-1" />
            <span className="text-xs">GradeLens</span>
          </a>
          
          <a 
            href="/support" 
            className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <Mail className="h-5 w-5 mb-1" />
            <span className="text-xs">Supporto</span>
          </a>
          
          <a 
            href="/profilo" 
            className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs">Profilo</span>
          </a>
        </div>
      </nav>
    </>
  );
}