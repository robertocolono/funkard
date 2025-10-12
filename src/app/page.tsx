"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white pt-24">
      {/* Glow radiale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_80%)] pointer-events-none" />

      {/* Contenuto */}
      <section className="relative z-10 flex flex-col items-center text-center gap-8 px-6">
        {/* Benvenuto */}
        <p className="text-[#f2b237] text-lg md:text-xl font-semibold tracking-wide mb-2">
          Benvenuto su <span className="font-[Bungee]">FUNKARD!</span>
        </p>

        {/* Smile */}
        <Image
          src="/smile-closed.png"
          alt="Funkard Smile"
          width={420}
          height={420}
          priority
          className="w-64 md:w-80 lg:w-[420px] h-auto mx-auto select-none drop-shadow-[0_0_40px_#f2b23733]"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-6 max-w-4xl">
          COLLEZIONA. SCAMBIA. VIVI LA PASSIONE.
        </h1>

        {/* Descrizione */}
        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mt-2">
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community
          in un&apos;unica piattaforma.
        </p>

        {/* Bottoni */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <Link
            href="/marketplace"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg 
                       border-[3px] border-[#f2b237] px-10 py-4 font-bold text-lg text-white
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#f2b23799]"
          >
            <span className="absolute inset-0 bg-[#f2b237] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative group-hover:text-black">Esplora il Marketplace</span>
          </Link>

          <Link
            href="/gradelens"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg 
                       border-[3px] border-[#f2b237] px-10 py-4 font-bold text-lg text-white
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#f2b23799]"
          >
            <span className="absolute inset-0 bg-[#f2b237] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative group-hover:text-black">Scopri GradeLens AI</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-400 text-sm opacity-80">
        © 2025 Funkard — Da collezionisti, per collezionisti.
      </footer>
    </main>
  );
}
