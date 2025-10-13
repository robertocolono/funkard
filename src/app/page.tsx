"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white font-inter">
      {/* Effetto glow radiale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_70%)] pointer-events-none" />

      {/* --- Hero Section (nuova) --- */}
      <section className="flex flex-col items-center justify-start text-center min-h-[85vh] pt-24 bg-[#0b0b0b]">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Image
            src="/smile-closed.png"
            alt="Funkard Logo"
            width={112}
            height={112}
            priority
            className="w-28 h-28"
          />
          <h1 className="text-5xl font-bold">
            <span className="text-[#f2b237]">Benvenuto su </span>
            <span className="text-white">FUNKARD</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Il nuovo ecosistema digitale per i collezionisti moderni.<br />
            Marketplace, AI e community in un&apos;unica piattaforma.
          </p>

          <Link
            href="/marketplace"
            className="mt-4 inline-block bg-[#f2b237] text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#ffcb4d] transition-all duration-200"
          >
            Esplora il Marketplace
          </Link>
        </div>
      </section>
    </main>
  );
}
