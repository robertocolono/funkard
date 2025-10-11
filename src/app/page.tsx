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
      <nav className="sticky top-0 w-full h-24 flex items-center justify-between px-10 lg:px-20 bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        {/* LOGO TEXT */}
        <Link
          href="/"
          className="flex items-center space-x-2 group no-underline select-none"
        >
          <span
            className="text-[#f2b237] font-black text-4xl tracking-wide leading-none transition-all group-hover:drop-shadow-[0_0_8px_#f2b237] font-[Bungee]"
          >
            FUN
          </span>
          <span
            className="text-white font-black text-4xl tracking-wide leading-none font-[Bungee]"
          >
            KARD
          </span>
        </Link>

        {/* LOGIN / REGISTRAZIONE */}
        {!isLoggedIn ? (
          <Link
            href="/register"
            className="bg-[#f2b237] text-black font-bold text-2xl px-10 py-4 rounded-xl hover:shadow-[0_0_30px_#f2b237] hover:scale-105 transition-all flex items-center justify-center no-underline"
          >
            Registrati
          </Link>
        ) : (
          <Link
            href="/profile"
            className="bg-white/10 border border-[#f2b237] text-[#f2b237] font-bold text-2xl px-10 py-4 rounded-xl hover:bg-[#f2b237] hover:text-black hover:shadow-[0_0_25px_#f2b237] transition-all flex items-center justify-center no-underline"
          >
            Ciao, {username}
          </Link>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-24">
        {/* TITOLO */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-12 animate-fade-in font-[Bungee]">
          Benvenuto su
        </h1>

        {/* LOGO CENTRALE */}
        <div className="w-[300px] md:w-[420px] lg:w-[480px] mb-16 animate-bounce-slow">
          <Image
            src="/logo.png"
            alt="Logo Funkard"
            width={480}
            height={480}
            className="drop-shadow-[0_0_40px_#f2b237] mx-auto"
            priority
          />
        </div>

        {/* BOTTONE CTA */}
        <Link
          href="/marketplace"
          className="bg-[#f2b237] text-black font-bold text-3xl px-14 py-6 rounded-xl hover:shadow-[0_0_40px_#f2b237] hover:scale-105 transition-all no-underline"
        >
          Esplora il Marketplace
        </Link>
      </section>
    </main>
  );
}
