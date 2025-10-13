"use client";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white font-inter">
      {/* Effetto glow radiale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_70%)] pointer-events-none" />

      {/* --- Hero Section (aggiornata) --- */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] pt-16 bg-gradient-radial from-[#f2b237]/5 via-[#0b0b0b] to-black">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Image
            src="/logo-smile.svg"
            alt="Funkard Logo"
            width={112}
            height={112}
            priority
            className="drop-shadow-[0_0_25px_rgba(242,178,55,0.3)]"
          />
          <h1 className="text-5xl font-bold">
            <span className="text-[#f2b237]">Benvenuto su</span>{" "}
            <span className="text-white">FUNKARD</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Il nuovo ecosistema digitale per i collezionisti moderni.<br />
            Marketplace, AI e community in un&apos;unica piattaforma.
          </p>
        </div>
      </section>
    </main>
  );
}
