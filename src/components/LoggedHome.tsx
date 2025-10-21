'use client';

import { useRouter } from "next/navigation";
import Features from "@/components/Features";
import GradeLensMock from "@/components/GradeLensMock";
import { ProductCard } from "@/components/Marketplace/ProductCard";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import Image from "next/image";

// Mock data per prodotti in evidenza
const featuredProducts = [
  {
    id: "1",
    title: "Charizard Base Set",
    imageUrl: "/images/sample/charizard.jpg",
    tcg: "Pokémon",
    setName: "Base Set",
    releaseYear: 1999,
    rarity: "Rare Holo",
    edition: "1st Edition",
    condition: "MINT",
    isSealed: false,
    priceEUR: 250000, // €2,500.00
    description: "Charizard raro in condizioni eccellenti",
    seller: {
      handle: "pokemon_master",
      paese: "Italia",
      verified: true,
      tipoUtente: "BUSINESS"
    }
  },
  {
    id: "2", 
    title: "Black Lotus",
    imageUrl: "/images/placeholder.svg",
    tcg: "Magic",
    setName: "Alpha",
    releaseYear: 1993,
    rarity: "Rare",
    edition: "Alpha",
    condition: "GEM MINT",
    isSealed: false,
    priceEUR: 1500000, // €15,000.00
    description: "La carta più iconica di Magic: The Gathering",
    seller: {
      handle: "mtg_collector",
      paese: "USA",
      verified: true,
      tipoUtente: "BUSINESS"
    }
  }
];

export default function LoggedHome() {
  const router = useRouter();
  const { theme } = useTheme();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const email = localStorage.getItem("funkard_email");
    if (email) setUserEmail(email);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section Personalizzata */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-sm">
            👋 Bentornato, {userEmail.split('@')[0]}!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Continua a <span className="text-yellow-400 font-semibold">esplorare</span> e 
            <span className="text-yellow-400 font-semibold"> gestire</span> la tua collezione.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button 
              onClick={() => router.push("/marketplace")} 
              className="btn-funkard text-lg px-8 py-4"
            >
              🔥 Esplora Marketplace
            </button>
            <button 
              onClick={() => router.push("/collection")} 
              className="btn-funkard text-lg px-8 py-4"
            >
              📚 La Mia Collezione
            </button>
            <button 
              onClick={() => router.push("/gradelens")} 
              className="btn-funkard text-lg px-8 py-4"
            >
              🔍 GradeLens AI
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* GradeLens Showcase */}
      <section className="bg-[#0C0C0C] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB300] mb-3 drop-shadow-[0_0_15px_#FFB300]">
              🔍 GradeLens AI
            </h2>
            <p className="text-gray-400 text-lg">
              Analizza e valuta le tue carte con intelligenza artificiale
            </p>
          </div>
          
          <div className="bg-[#111] rounded-2xl p-8 shadow-[0_0_20px_#FFB30040] border border-[#FFB30020]">
            <GradeLensMock />
          </div>
        </div>
      </section>

      {/* Prodotti in Evidenza */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB300] mb-3 drop-shadow-[0_0_15px_#FFB300]">
              ⭐ Prodotti in Evidenza
            </h2>
            <p className="text-gray-400 text-lg">
              Scopri le carte più rare e preziose del marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => router.push("/marketplace")}
              className="btn-funkard text-lg px-8 py-4"
            >
              🛒 Vedi Tutti i Prodotti
            </button>
          </div>
        </div>
      </section>

      {/* Supporto & Community */}
      <section className="bg-[#0C0C0C] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB300] mb-3 drop-shadow-[0_0_15px_#FFB300]">
            💬 Supporto & Community
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Hai bisogno di aiuto? Il nostro team è sempre disponibile
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#111] p-8 rounded-2xl shadow-[0_0_20px_#FFB30040] border border-[#FFB30020] hover:shadow-[0_0_40px_#FFB30080] hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold mb-2 text-[#FFB300]">Supporto Live</h3>
              <p className="text-gray-400 mb-4">Chat in tempo reale con il nostro team</p>
              <button 
                onClick={() => router.push("/support")}
                className="btn-funkard w-full"
              >
                Apri Ticket
              </button>
            </div>
            
            <div className="bg-[#111] p-8 rounded-2xl shadow-[0_0_20px_#FFB30040] border border-[#FFB30020] hover:shadow-[0_0_40px_#FFB30080] hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2 text-[#FFB300]">Guida</h3>
              <p className="text-gray-400 mb-4">Tutorial e guide per utilizzare Funkard</p>
              <button 
                onClick={() => router.push("/about")}
                className="btn-funkard w-full"
              >
                Scopri di Più
              </button>
            </div>
            
            <div className="bg-[#111] p-8 rounded-2xl shadow-[0_0_20px_#FFB30040] border border-[#FFB30020] hover:shadow-[0_0_40px_#FFB30080] hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-2 text-[#FFB300]">Community</h3>
              <p className="text-gray-400 mb-4">Connettiti con altri collezionisti</p>
              <button 
                onClick={() => router.push("/marketplace")}
                className="btn-funkard w-full"
              >
                Esplora
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
