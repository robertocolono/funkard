"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white overflow-hidden">
      {/* Glow radiale centrale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,178,55,0.12)_0%,_rgba(11,11,11,1)_70%)] pointer-events-none" />

      {/* --- Hero Section --- */}
      <section className="relative z-10 flex flex-col items-center text-center mt-40 px-6">
        {/* Logo Smile */}
        <div className="flex justify-center mb-10">
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={320}
            height={320}
            priority
            className="drop-shadow-[0_0_60px_rgba(242,178,55,0.35)] select-none"
          />
        </div>

        {/* Titolo */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="text-[#f2b237]">Benvenuto su</span>{" "}
          <span className="text-white">FUNKARD</span>
        </h1>

        {/* Sottotitolo */}
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-12">
          Il nuovo ecosistema digitale per i collezionisti moderni.<br />
          Marketplace, AI e community in un&apos;unica piattaforma.
        </p>

        {/* Bottone principale */}
        <Link
          href="/marketplace"
          className="group relative inline-flex items-center justify-center px-14 py-5 text-xl font-bold rounded-full
                     border-2 border-[#f2b237] text-white overflow-hidden tracking-wide
                     transition-all duration-300 hover:scale-110 hover:shadow-[0_0_45px_#f2b237aa]"
        >
          <span className="absolute inset-0 bg-[#f2b237] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative group-hover:text-black">Esplora il Marketplace</span>
        </Link>
      </section>

      {/* Footer minimal */}
      <footer className="absolute bottom-6 text-gray-500 text-sm text-center w-full">
        © 2025 Funkard — Da collezionisti, per collezionisti.
      </footer>
    </main>
  );
}
