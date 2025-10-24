"use client";
import { useEffect, useState } from "react";

interface Card {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  image: string;
}

export default function CardGrid() {
  const [cards, setCards] = useState([] as Card[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/cards");
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error("Errore nel caricamento carte:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) return <p className="text-center text-gray-500 mt-10">Caricamento...</p>;
  if (cards.length === 0) return <p className="text-center text-gray-500 mt-10">Nessuna carta disponibile</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card: any) => (
        <div
          key={card.id}
          className="border rounded-xl shadow-sm hover:shadow-md transition p-3 flex flex-col bg-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-56 object-cover rounded-lg mb-3"
          />
          <h3 className="font-semibold text-lg truncate">{card.name}</h3>
          {card.description && (
            <p className="text-sm text-gray-600 line-clamp-2">{card.description}</p>
          )}
          <p className="mt-auto text-lg font-bold text-blue-600">{card.price.toFixed(2)} €</p>
        </div>
      ))}
    </div>
  );
}
