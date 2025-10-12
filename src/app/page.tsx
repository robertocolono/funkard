"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-center text-white px-6">
      {/* Titolo superiore */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide">
        Benvenuto su <span className="text-[#f2b237]">Funkard!</span>
      </h2>

      {/* Logo del sorriso */}
      <Image
        src="/smile-closed.png"
        alt="Funkard Smile"
        width={288}
        height={288}
        sizes="(min-width: 768px) 288px, 208px"
        className="w-52 md:w-72 h-auto mb-10 select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        priority
      />

      {/* Sottotitolo */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wider">
        COLLEZIONA. SCAMBIA. VIVI LA PASSIONE.
      </h1>

      <p className="text-gray-400 max-w-2xl mb-10">
        Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community in un&apos;unica piattaforma.
      </p>

      {/* Bottoni */}
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/marketplace"
          className="px-8 py-3 border-[3px] border-[#f2b237] text-white font-bold text-lg rounded-md hover:bg-[#f2b237] hover:text-black transition-all duration-200 shadow-[0_0_10px_#f2b23740]"
        >
          Esplora il Marketplace
        </Link>
        <Link
          href="/gradelens"
          className="px-8 py-3 border-[3px] border-[#f2b237] text-white font-bold text-lg rounded-md hover:bg-[#f2b237] hover:text-black transition-all duration-200 shadow-[0_0_10px_#f2b23740]"
        >
          Scopri GradeLens AI
        </Link>
      </div>
    </main>
  );
}