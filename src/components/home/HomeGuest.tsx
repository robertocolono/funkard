"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/Marketplace/ProductCard";
import Features from "@/components/Features"; // esiste già
import GradeLensMock from "@/components/GradeLensMock"; // showcase compatto o link
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
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10">
      {/* HERO */}
      <section className="mb-10 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">
            Esplora, compra, vendi e scambia la tua collezione con un semplice click!
          </h1>
          <p className="text-[var(--text-muted)]">
            Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
          </p>
        </div>
      </section>

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
      <section className="mb-12">
        <Features />
      </section>

      {/* GRADELENS SHOWCASE (compatto) */}
      <section className="mb-12 rounded-xl border bg-[var(--card)] p-6 shadow-card" style={{ borderColor: "var(--border)" }}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Valuta le tue carte (GradeLens)</h2>
          <Link href="/gradelens" className="text-[var(--accent)] hover:opacity-80">Prova ora →</Link>
        </div>
        <GradeLensMock />
      </section>

      {/* SUPPORTO & COMMUNITY */}
      <SupportCommunity />

      {/* CTA FINALE */}
      <section className="mt-12 text-center">
        <Link
          href="/register"
          className="rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-black shadow-sm hover:opacity-90"
        >
          Registrati ora
        </Link>
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Funkard © 2025 — Da collezionisti per collezionisti.
        </p>
      </section>
    </main>
  );
}
