"use client";

import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white font-inter">
      {/* Effetto glow radiale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_70%)] pointer-events-none" />

      {/* --- Hero Section --- */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-24 md:pt-32 pb-40">
        {/* Logo Smile */}
        <div className="flex justify-center mb-12">
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={340}
            height={340}
            priority
            className="drop-shadow-[0_0_70px_rgba(242,178,55,0.4)] select-none"
          />
        </div>

        {/* Titolo */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          <span className="text-[#f2b237]">Benvenuto su</span>{" "}
          <span className="text-white">FUNKARD</span>
        </h1>

        {/* Sottotitolo */}
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-14">
          Il nuovo ecosistema digitale per i collezionisti moderni.<br />
          Marketplace, AI e community in un&apos;unica piattaforma.
        </p>

        {/* Bottone principale */}
        <Link
  href="/marketplace"
  className="inline-flex items-center justify-center rounded-md transition-transform duration-200 hover:scale-105"
  style={{
    backgroundColor: '#f2b237',
    color: '#000000',
    fontWeight: 800,
    fontSize: '22px',
    padding: '18px 25px',
    borderRadius: '10px',
    boxShadow: '0 4px 25px rgba(0,0,0,0.3)',
  }}
>
  Esplora il Marketplace
</Link>

      </section>
    </main>
  );
}
