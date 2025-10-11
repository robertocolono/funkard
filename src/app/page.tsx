"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  // Mock stato utente (da sostituire con auth reale in seguito)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Will");

  useEffect(() => {
    // Simulazione login
    const logged = localStorage.getItem("funkard_user");
    if (logged) {
      setIsLoggedIn(true);
      setUsername(logged);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-black text-white font-[Poppins]">
      {/* NAVBAR */}
      <nav className="sticky top-0 w-full h-24 flex items-center justify-between px-6 sm:px-10 lg:px-20 bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center space-x-1 group no-underline select-none"
        >
          <span className="text-[#f2b237] font-black text-3xl sm:text-4xl md:text-5xl tracking-wide leading-none transition-all font-[Bungee]">
            FUN
          </span>
          <span className="text-white font-black text-3xl sm:text-4xl md:text-5xl tracking-wide leading-none font-[Bungee]">
            KARD
          </span>
        </Link>

        {/* BOTTONE LOGIN / REGISTRAZIONE */}
        {!isLoggedIn ? (
          <Link
            href="/register"
            className="bg-[#f2b237] text-black font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl hover:scale-105 transition-all flex items-center justify-center no-underline"
          >
            Registrati
          </Link>
        ) : (
          <Link
            href="/profile"
            className="bg-white/10 border border-[#f2b237] text-[#f2b237] font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl hover:bg-[#f2b237] hover:text-black transition-all flex items-center justify-center no-underline"
          >
            Ciao, {username}
          </Link>
        )}
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-8 py-16 sm:py-24">
        {/* TITOLO */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-10 sm:mb-12 animate-fade-in font-[Bungee] leading-tight">
          Benvenuto su
        </h1>

        {/* LOGO */}
        <div className="w-[240px] sm:w-[320px] md:w-[420px] lg:w-[500px] mb-16 animate-bounce-slow">
          <Image
            src="/logo.png"
            alt="Logo Funkard"
            width={500}
            height={500}
            className="mx-auto"
            priority
          />
        </div>

        {/* CTA */}
        <Link
          href="/marketplace"
          className="bg-[#f2b237] text-black font-bold text-2xl sm:text-3xl px-10 sm:px-14 md:px-20 py-5 sm:py-6 md:py-7 rounded-xl hover:scale-105 transition-all no-underline"
        >
          Esplora il Marketplace
        </Link>
      </section>
    </main>
  );
}
