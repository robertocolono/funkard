"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white overflow-hidden">
      {/* --- Effetto luce centrale soft --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,178,55,0.15)_0%,_rgba(11,11,11,1)_70%)] pointer-events-none" />

      {/* --- Navbar semplice --- */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-transparent z-20">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-[#f2b237]">FUN</span>
          <span className="text-white">KARD</span>
        </h1>

        <Link
          href="/register"
          className="text-[#f2b237] font-semibold text-base hover:text-white transition-colors"
        >
          Registrati
        </Link>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative z-10 flex flex-col items-center text-center mt-32 px-6">
        {/* Logo Smile */}
        <div className="flex justify-center mb-8">
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={260}
            height={260}
            priority
            className="drop-shadow-[0_0_35px_rgba(242,178,55,0.4)] select-none"
          />
        </div>

        {/* Titolo */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="text-[#f2b237]">Benvenuto su</span>{" "}
          <span className="text-white">FUNKARD</span>
        </h1>

        {/* Sottotitolo */}
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
          L’ecosistema moderno per collezionisti. Scopri, scambia e vivi la tua
          passione con stile.
        </p>

        {/* Bottone principale */}
        <Link
          href="/marketplace"
          className="relative group inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-lg
                     border-2 border-[#f2b237] text-white overflow-hidden tracking-wide
                     transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-[#f2b237] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative group-hover:text-black">Esplora il Marketplace</span>
          <span className="absolute -inset-px rounded-lg shadow-[0_0_30px_#f2b23755] group-hover:shadow-[0_0_50px_#f2b237aa] transition-shadow duration-300"></span>
        </Link>
      </section>

      {/* --- Footer minimal --- */}
      <footer className="absolute bottom-8 text-gray-500 text-sm">
        © 2025 Funkard — Da collezionisti, per collezionisti.
      </footer>
    </main>
  );
}
 