"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white font-inter">
      {/* --- Hero Section pulita e corretta --- */}
      <section className="flex flex-col items-center justify-start text-center min-h-[85vh] pt-24 bg-[#0b0b0b]">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Image
            src="/smile-closed.png"
            alt="Funkard Logo"
            width={140}
            height={140}
            priority
            className="drop-shadow-[0_0_20px_rgba(242,178,55,0.25)]"
          />

          <h1 className="text-5xl font-bold">
            <span className="text-[#f2b237]">Benvenuto su </span>
            <span className="text-white">FUNKARD</span>
          </h1>

          <p className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed">
            Il nuovo Marketplace digitale più sicuro per i collezionisti moderni.<br />
            Connettiti con tutto il mondo con un semplice click!
          </p>

          <Link
            href="/marketplace"
            className="mt-4 inline-block bg-[#f2b237] text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#ffcb4d] transition-all duration-200"
          >
            Esplora il Marketplace
          </Link>
        </div>
      </section>

      {/* --- Feature Sections --- */}
      <section className="w-full flex flex-col items-center justify-center gap-6 py-20 bg-[#0b0b0b] px-4 sm:px-8">

        {/* GradeLens Feature */}
        <Link
          href="/gradelens"
          className="w-full max-w-4xl border border-[#f2b23733] rounded-2xl p-8 hover:border-[#f2b237] hover:shadow-[0_0_20px_rgba(242,178,55,0.2)] transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-[#f2b237] mb-2">GradeLens</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Scansiona le tue carte e scopri il loro valore con l’intelligenza artificiale.
          </p>
        </Link>

        {/* Collezione Feature */}
        <Link
          href="/collection"
          className="w-full max-w-4xl border border-[#f2b23733] rounded-2xl p-8 hover:border-[#f2b237] hover:shadow-[0_0_20px_rgba(242,178,55,0.2)] transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-[#f2b237] mb-2">La tua Collezione</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Gestisci le tue carte, monitora i prezzi e rivendile in un click.
          </p>
        </Link>
      </section>
    </main>
  );
}
