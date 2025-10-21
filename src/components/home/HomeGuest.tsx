"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/Marketplace/ProductCard";
import { Features } from "@/components/Features";
import { GradeLensShowcase } from "@/components/GradeLensShowcase";
import { Footer } from "@/components/Footer";

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

export default function HomeGuest() {
  const [featured, setFeatured] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // endpoint "carte in evidenza reali"
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/market/featured?limit=4`, { cache: "no-store" });
        if (!res.ok) throw new Error("featured fail");
        const data = await res.json();
        setFeatured(data);
      } catch {
        setFeatured([]); // fallback vuoto
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="mx-auto max-w-7xl pb-16 pt-10">

      {/* ANTEPRIMA MARKETPLACE */}
      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dal marketplace</h2>
          <Link href="/marketplace" className="text-[var(--accent)] hover:opacity-80">Esplora il marketplace →</Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-[var(--card)] shadow-card" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map((c) => (
              <ProductCard key={c.id} product={c} />
            ))}
          </div>
        )}
      </section>

      {/* FEATURES */}
      <Features />

      {/* GRADELENS SHOWCASE */}
      <GradeLensShowcase />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
