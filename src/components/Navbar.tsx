"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("funkard_token");
    setIsLoggedIn(!!token);
  }, []);

  // In questa versione semplificata non includiamo ancora il pulsante di logout.

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        {/* 👈 Sinistra: logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/smile-closed.png"
            alt="Funkard logo"
            width={40}
            height={40}
            className="hover:scale-105 transition-transform"
          />
          <span className="hidden sm:block font-extrabold text-xl">
            <span className="text-yellow-400">FUN</span>KARD
          </span>
        </div>

        {/* 👉 Destra: link principali */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {/* Centro: TCG (dropdown semplice) */}
          <div className="relative group">
            <button className="hover:text-yellow-400 transition-colors font-medium">TCG</button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-neutral-900 border border-neutral-800 rounded-xl p-3 w-64">
              <div className="grid grid-cols-1 gap-2 text-sm">
                {["Magic: The Gathering","Pokémon","Yu-Gi-Oh!","Disney Lorcana","One Piece","Flesh and Blood","Digimon","Dragon Ball Super","Cardfight!! Vanguard","My Hero Academia","Star Wars Unlimited","Union Arena"].map((g) => (
                  <button key={g} className="text-left hover:text-yellow-400 transition-colors" onClick={() => router.push(`/marketplace?game=${encodeURIComponent(g)}`)}>
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("/marketplace")}
            className="hover:text-yellow-400 transition-colors"
          >
            Marketplace
          </button>
          <button
            onClick={() => router.push("/collection")}
            className="hover:text-yellow-400 transition-colors"
          >
            Collezione
          </button>
          <button
            onClick={() => router.push("/gradelens")}
            className="hover:text-yellow-400 transition-colors"
          >
            GradeLens
          </button>

          {/* Destra: Grading (submenu) */}
          <div className="relative group">
            <button className="hover:text-yellow-400 transition-colors font-medium">Grading</button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-neutral-900 border border-neutral-800 rounded-xl p-3 w-64">
              <div className="flex flex-col text-sm">
                <button onClick={() => router.push("/grading/guide")} className="text-left hover:text-yellow-400">Guida alle condizioni</button>
                <button onClick={() => router.push("/grading/psa")} className="text-left hover:text-yellow-400">PSA</button>
                <button onClick={() => router.push("/grading/bgs")} className="text-left hover:text-yellow-400">BGS (subgrades)</button>
                <button onClick={() => router.push("/grading/cgc")} className="text-left hover:text-yellow-400">CGC</button>
              </div>
            </div>
          </div>

          {/* 🧠 Account */}
          {!isLoggedIn ? (
            <button
              onClick={() => router.push("/register")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1.5 rounded-md font-semibold"
            >
              Registrati
            </button>
          ) : (
            <button
              onClick={() => router.push("/profile")}
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-1.5 rounded-md font-semibold"
            >
              Profilo
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
