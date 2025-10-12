"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white">
      {/* Glow radiale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_70%)] pointer-events-none" />

      {/* Contenuto */}
      <section className="relative z-10 flex flex-col items-center text-center gap-8 px-6 py-32 md:py-40">
        <p className="text-[#f2b237] text-lg md:text-xl font-semibold tracking-wide mb-2">
          Benvenuto su <span className="font-[Bungee]">FUNKARD!</span>
        </p>

        <Image
          src="/smile-closed.png"
          alt="Funkard Smile"
          width={400}
          height={400}
          priority
          className="w-64 md:w-80 lg:w-[420px] h-auto mx-auto select-none drop-shadow-[0_0_30px_#f2b23744]"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-6">
          COLLEZIONA. SCAMBIA. VIVI LA PASSIONE.
        </h1>

        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mt-2">
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community
          in un&apos;unica piattaforma.
        </p>

        <div className="flex flex-col items-center gap-5 mt-8">
          <Link
            href="/marketplace"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg 
                       border-4 border-[#f2b237] px-10 py-4 font-bold text-white text-lg
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#f2b237aa]"
          >
            <span className="absolute inset-0 bg-[#f2b237] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative group-hover:text-black">Esplora il Marketplace</span>
          </Link>

          <Link
            href="/gradelens"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg 
                       border-4 border-[#f2b237] px-10 py-4 font-bold text-white text-lg
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#f2b237aa]"
          >
            <span className="absolute inset-0 bg-[#f2b237] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative group-hover:text-black">Scopri GradeLens AI</span>
          </Link>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="absolute bottom-6 text-gray-400 text-sm opacity-80">
        © 2025 Funkard — Da collezionisti, per collezionisti.
      </footer>
    </main>
  );
}
