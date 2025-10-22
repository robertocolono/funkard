"use client";

import { useEffect, useState } from "react";
import SupportCommunity from "@/components/sections/SupportCommunity";

type Card = { 
  id: string; 
  title: string; 
  price: number; 
  image: string; 
  category?: string;
  trend?: string;
};

export default function HomeUser() {
  const [featured, setFeatured] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/market/featured?limit=8`, { 
          cache: "no-store" 
        });
        if (!res.ok) throw new Error("featured fail");
        const data = await res.json();
        setFeatured(data);
      } catch {
        // Fallback con carte mock
        setFeatured([
          { id: "1", title: "Charizard Base Set", price: 250, image: "/images/sample/charizard.jpg", category: "Pokémon", trend: "trending" },
          { id: "2", title: "Booster Box", price: 120, image: "/images/sample/booster-box.jpg", category: "Booster", trend: "new" },
          { id: "3", title: "Elite Trainer Box", price: 45, image: "/images/sample/etb.jpg", category: "Accessori", trend: "hot" },
          { id: "4", title: "Pikachu VMAX", price: 35, image: "/images/placeholder.svg", category: "Pokémon", trend: "rising" },
          { id: "5", title: "Lugia Neo Genesis", price: 180, image: "/images/placeholder.svg", category: "Pokémon", trend: "vintage" },
          { id: "6", title: "Magic Booster", price: 25, image: "/images/placeholder.svg", category: "Magic", trend: "new" },
          { id: "7", title: "Yu-Gi-Oh! Blue-Eyes", price: 65, image: "/images/placeholder.svg", category: "Yu-Gi-Oh!", trend: "classic" },
          { id: "8", title: "Flesh and Blood", price: 85, image: "/images/placeholder.svg", category: "FAB", trend: "modern" },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10">
      {/* CARTE IN EVIDENZA */}
      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Carte in evidenza dal Marketplace</h2>
          <p className="text-muted-foreground">Scopri le carte più richieste, rare e in crescita.</p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-card shadow-card" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
            {featured.map((c) => (
              <div key={c.id} className="rounded-xl bg-card p-4 shadow-card hover:scale-[1.02] transition-transform relative">
                <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
                <h3 className="font-semibold mb-1 text-sm">{c.title}</h3>
                <p className="text-funkard-yellow font-medium text-sm">€{c.price}</p>
                {c.category && (
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {c.category}
                  </span>
                )}
                {c.trend && (
                  <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
                    c.trend === 'trending' ? 'bg-green-500 text-white' :
                    c.trend === 'new' ? 'bg-blue-500 text-white' :
                    c.trend === 'hot' ? 'bg-red-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {c.trend}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6 text-center">
          <a 
            href="/marketplace" 
            className="text-funkard-yellow hover:opacity-80 transition font-medium"
          >
            Vedi tutte le carte →
          </a>
        </div>
      </section>

      {/* SUPPORTO & COMMUNITY */}
      <SupportCommunity />
    </main>
  );
}