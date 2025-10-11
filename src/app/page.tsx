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
      <nav className="sticky top-0 w-full h-20 flex items-center justify-between px-8 lg:px-16 bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center space-x-2 group no-underline select-none"
        >
          <span className="text-[#f2b237] font-black text-3xl tracking-wide leading-none transition-all group-hover:drop-shadow-[0_0_8px_#f2b237]">
            FUN
          </span>
          <span className="text-white font-black text-3xl tracking-wide leading-none">
            KARD
          </span>
        </Link>

        {/* BOTTONE LOGIN/REGISTRAZIONE */}
        {!isLoggedIn ? (
          <Link
            href="/register"
            className="bg-[#f2b237] text-black font-semibold text-xl px-8 py-3 rounded-xl hover:shadow-[0_0_25px_#f2b237] hover:scale-105 transition-all flex items-center justify-center no-underline"
          >
            Registrati
          </Link>
        ) : (
          <Link
            href="/profile"
            className="bg-white/10 border border-[#f2b237] text-[#f2b237] font-medium text-xl px-8 py-3 rounded-xl hover:bg-[#f2b237] hover:text-black hover:shadow-[0_0_20px_#f2b237] transition-all flex items-center justify-center no-underline"
          >
            Ciao, {username}
          </Link>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20">
        {/* TITOLO */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 animate-fade-in">
          Benvenuto su
        </h1>

        {/* LOGO PRINCIPALE */}
        <div className="w-[260px] md:w-[360px] mb-12 animate-bounce-slow">
          <Image
            src="/logo.png"
            alt="Logo Funkard"
            width={360}
            height={360}
            className="drop-shadow-[0_0_30px_#f2b237]"
            priority
          />
        </div>

        {/* BOTTONI CTA */}
        <div className="flex flex-col sm:flex-row gap-10 mt-6">
          <Link
            href="/register"
            className="bg-[#f2b237] text-black font-bold text-2xl px-12 py-5 rounded-xl hover:shadow-[0_0_30px_#f2b237] hover:scale-105 transition-all no-underline"
          >
            Unisciti a noi
          </Link>

          <Link
            href="/marketplace"
            className="bg-[#f2b237] text-black font-bold text-2xl px-12 py-5 rounded-xl hover:shadow-[0_0_30px_#f2b237] hover:scale-105 transition-all no-underline"
          >
            Esplora il Marketplace
          </Link>
        </div>
      </section>
    </main>
  );
}
