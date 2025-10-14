"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AddToCollectionModal from "@/components/AddToCollectionModal";

type UserCard = {
  id: string;
  userId: string;
  name: string;
  setName: string;
  condition: string;
  estimatedValue: number;
  frontImage?: string;
  backImage?: string;
  createdAt: string;
  source: string;
};

export default function CollectionPage() {
  const [cards, setCards] = useState<UserCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // 🔹 Temporaneo: userId statico fino a JWT
  const userId = "seed_user";

  const fetchCards = async () => {
    try {
      const res = await fetch(`https://funkard-api.onrender.com/api/collection/${userId}`);
      if (!res.ok) throw new Error("Errore nel caricamento delle carte");
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.error(err);
      setError("Impossibile caricare la collezione");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Caricamento...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 py-10">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">📚 La Mia Collezione</h1>
      </header>

      {cards.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 text-center text-gray-400">
          <p className="text-lg">Nessuna carta ancora nella tua collezione.</p>
          <p className="text-sm text-gray-500 mt-1">Aggiungine una per iniziare!</p>
        </div>
      ) : (
        <div
          className="
            grid gap-6
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            transition-all
          "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg
                hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-200
                cursor-pointer
              "
              onClick={() => (window.location.href = `/collection/${card.id}`)}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={card.frontImage || "/placeholder-card.png"}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{card.name}</h2>
                <p className="text-sm text-gray-400 truncate">{card.setName}</p>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="text-yellow-400 font-medium">{card.condition}</span>
                  <span className="text-gray-300">
                    €{card.estimatedValue?.toFixed(2) || "—"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔘 Bottone "Aggiungi carta" in basso a destra */}
      <button
        onClick={() => setShowModal(true)}
        className="
          fixed bottom-6 right-6 w-14 h-14 rounded-full
          bg-yellow-500 hover:bg-yellow-600 text-black text-3xl font-bold
          flex items-center justify-center shadow-lg hover:shadow-yellow-500/30
          transition-all duration-200
        "
        title="Aggiungi carta"
      >
        +
      </button>

      {showModal && (
        <AddToCollectionModal
          open={showModal}
          onOpenChange={(open) => {
            setShowModal(open);
            if (!open) fetchCards();
          }}
        />
      )}
    </div>
  );
}
