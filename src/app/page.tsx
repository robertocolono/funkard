"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center justify-center text-center px-6 sm:px-10 font-[Poppins]">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-[Bungee] font-extrabold mb-12 text-white">
          Benvenuto su
        </h1>

        <div className="w-[260px] sm:w-[350px] md:w-[420px] lg:w-[500px] mb-14">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={500}
            height={500}
            className="mx-auto object-contain"
            priority
          />
        </div>

        <Link
          href="/marketplace"
          className="bg-[#f2b237] text-black font-semibold text-xl sm:text-2xl md:text-3xl px-10 sm:px-16 py-5 sm:py-6 rounded-lg hover:bg-[#ffca47] transition-all shadow-md hover:shadow-lg"
        >
          Esplora il Marketplace
        </Link>
      </div>
    </main>
  );
}
