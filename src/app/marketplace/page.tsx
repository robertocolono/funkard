"use client";
import { useEffect, useState } from "react";

export default function MarketplacePage() {
  const [items, setItems] = useState<any[]>([]);
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
    <main className="mx-auto max-w-6xl p-10 text-white">
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      {items.length === 0 ? (
        <p>Nessun prodotto trovato.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <li key={p.id} className="border border-white/10 rounded-xl p-4">
              <p className="font-bold">{p.title}</p>
              <p className="text-sm text-white/70">{p.type}</p>
              <p className="mt-2 font-semibold text-[#f2b237]">
                € {(p.priceEUR / 100).toLocaleString("it-IT")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}