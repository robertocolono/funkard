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
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 w-full h-16 flex items-center justify-between px-6 lg:px-12 bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 group">
          <span className="text-[#f2b237] font-extrabold text-xl tracking-wide group-hover:drop-shadow-[0_0_5px_#f2b237] transition-all">
            FUN
          </span>
          <span className="text-white font-extrabold text-xl tracking-wide">
            KARD
          </span>
        </Link>

        {/* Bottone Login/Registrati */}
        <div>
          {!isLoggedIn ? (
            <Link
              href="/register"
              className="bg-[#f2b237] text-black font-semibold px-5 py-2 rounded-full hover:shadow-[0_0_10px_#f2b237] transition-all"
            >
              Registrati
            </Link>
          ) : (
            <Link
              href="/profile"
              className="text-white font-medium hover:text-[#f2b237] transition-all"
            >
              Bentornato, {username}
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 animate-fade-in">
          Benvenuto su <span className="text-[#f2b237] font-bold">Funkard</span>
        </h1>

        {/* Smile Logo */}
        <div className="w-40 md:w-56 mb-8 animate-bounce-slow">
          <Image
            src="/smile_closed.svg"
            alt="Funkard Smile"
            width={200}
            height={200}
            className="drop-shadow-[0_0_10px_#f2b237]"
            priority
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/register"
            className="bg-[#f2b237] text-black font-semibold text-lg px-8 py-3 rounded-full hover:shadow-[0_0_15px_#f2b237] transition-all"
          >
            Unisciti a noi
          </Link>

          <Link
            href="/marketplace"
            className="border border-[#f2b237] text-white font-medium text-lg px-8 py-3 rounded-full hover:bg-[#f2b237] hover:text-black transition-all"
          >
            Esplora il Marketplace
          </Link>
        </div>
      </section>
    </main>
  );
}
