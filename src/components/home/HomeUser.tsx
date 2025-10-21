"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/Marketplace/ProductCard";
import SupportCommunity from "@/components/sections/SupportCommunity";

type Card = {
  id: string;
  title: string;
  price: number;
  image: string;
  tcg: string;
  isSealed: boolean;
  priceEUR: number;
  seller?: {
    handle: string;
    paese?: string;
    verified?: boolean;
    tipoUtente?: "PRIVATO" | "BUSINESS";
  };
  condition?: string;
};

export default function HomeUser() {
  const [featured, setFeatured] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/market/featured?limit=8`, { cache: "no-store" });
        if (!res.ok) throw new Error("featured fail");
        const data = await res.json();
        setFeatured(data);
      } catch {
        setFeatured([]);
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
          <h2 className="text-xl font-semibold">Carte in evidenza</h2>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-[var(--card)] shadow-card" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
            {featured.map((c) => (
              <ProductCard key={c.id} product={c} />
            ))}
          </div>
        )}
      </section>

      {/* SUPPORTO & COMMUNITY */}
      <SupportCommunity />
    </main>
  );
}
