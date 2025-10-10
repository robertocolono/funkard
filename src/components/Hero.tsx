import type { SyntheticEvent } from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-[#0A0A0A] px-6">
      
      {/* Logo sorriso */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo_sorriso.png"
        alt="Funkard Smile"
        className="w-48 h-auto mb-8"
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
          const img = e.currentTarget;
          img.onerror = null;
          img.src = "/smile-open.png"; // fallback se il file non è presente
        }}
      />

      {/* Titolo */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-[#FFB300] mb-4 drop-shadow-[0_0_20px_#FFB300]">
        FUNKARD
      </h1>

      {/* Sottotitolo */}
      <h2 className="text-2xl text-gray-300 mb-8 font-medium">
        Costruito per tutti!
      </h2>

      {/* Descrizione breve */}
      <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
        Il marketplace moderno per i collezionisti di carte.  
        Colleziona, connetti e gioca in un ecosistema costruito per tutti.
      </p>

      {/* Bottone */}
      <a
        href="/marketplace"
        className="bg-gradient-to-r from-[#FFB300] to-[#FF7A00] text-black font-bold text-lg py-3 px-10 rounded-xl 
                  shadow-[0_0_25px_#FFB300] hover:shadow-[0_0_40px_#FF7A00] transition-all duration-300 hover:scale-105"
      >
        Esplora il Marketplace
      </a>

      {/* Footer piccolo */}
      <p className="text-sm text-gray-500 mt-16">
        © 2025 Funkard — Collect. Connect. Play.
      </p>
    </section>
  );
}
    
