"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white pt-28">
      {/* Glow radiale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_85%)] pointer-events-none" />

      {/* Contenuto */}
      <section className="relative z-10 flex flex-col items-center text-center gap-8 px-6 animate-fadeIn">
        {/* Benvenuto */}
        <p className="text-[#f2b237] text-lg md:text-xl font-semibold tracking-wide mb-8">
          Benvenuto su <span className="font-[Bungee]">FUNKARD!</span>
        </p>

        {/* Smile */}
        <Image
          src="/smile-closed.png"
          alt="Funkard Smile"
          width={420}
          height={420}
          priority
          className="w-64 md:w-80 lg:w-[420px] h-auto mx-auto select-none drop-shadow-[0_0_45px_#f2b23733] mb-10"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mt-2">
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
                       border-[2.5px] border-[#f2b237] px-10 py-4 font-bold text-lg text-white bg-[#141414]
                       transition-all duration-300 hover:scale-105 hover:bg-[#f2b237] hover:text-black hover:shadow-[0_0_25px_#f2b237aa]"
          >
            Esplora il Marketplace
          </Link>

          <Link
            href="/gradelens"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg 
                       border-[2.5px] border-[#f2b237] px-10 py-4 font-bold text-lg text-white bg-[#141414]
                       transition-all duration-300 hover:scale-105 hover:bg-[#f2b237] hover:text-black hover:shadow-[0_0_25px_#f2b237aa]"
          >
            Scopri GradeLens AI
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-400 text-sm opacity-80">
        © 2025 Funkard — Da collezionisti, per collezionisti.
      </footer>

      {/* Animazioni */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </main>
  );
}
