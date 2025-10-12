"use client";
import { useEffect, useState } from "react";
import { Product, User } from "@prisma/client";

import { ProductCard } from "@/components/Marketplace/ProductCard";

interface ProductWithSeller extends Product {
  seller?: Pick<User, "handle" | "rating" | "country">;
}

export default function MarketplacePage() {
  const [items, setItems] = useState<ProductWithSeller[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white p-10">Caricamento…</p>;

  return (
    <main className="mx-auto max-w-6xl p-4 text-white">
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      {items.length === 0 ? (
        <p>Nessun prodotto trovato.</p>
      ) : (
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      )}
    </main>
  );
}