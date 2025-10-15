"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AddToCollectionModal from "@/components/AddToCollectionModal";
import type { UserCard } from "@/types/usercard";
import { updateUserCard } from "@/lib/funkardApi";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
export default function CollectionPage() {
  const router = useRouter();
  const [hasToken, setHasToken] = useState<boolean | null>(null);
  const [cards, setCards] = useState<UserCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);


  // 🔹 Temporaneo: userId statico fino a JWT
  const userId = "7"; // TODO: sostituire con userId reale da auth

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("funkard_token");
      setHasToken(!!token);
    }
  }, []);

  // Funzione fetch globale
  const fetchCards = async () => {
    try {
      if (!userId) throw new Error("User ID mancante");
      const url = `https://funkard-api.onrender.com/api/collection/${userId}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Errore nel caricamento delle carte");
      const data = await res.json();
      setCards(data);
    } catch {
      setError("Impossibile caricare la collezione");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasToken) {
      fetchCards();
    }
  }, [hasToken]);

  function daysLeft(gradedAt: string): number {
    const diff = new Date(gradedAt).getTime() - new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  const updatePermanent = async (cardId: string) => {
    try {
      const res = await fetch("https://funkard-api.onrender.com/api/usercards/updatePermanent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: cardId, permanent: true }),
      });
      if (!res.ok) throw new Error("Aggiornamento non riuscito");
      // Aggiorna stato locale
      setCards((prev) => prev.map((c) => (c.id === cardId ? { ...c, permanent: true } : c)));
      // Feedback utente
      alert("✅ Carta salvata in modo permanente nella tua collezione.");
    } catch (e) {
      console.error(e);
      alert("❌ Impossibile salvare la carta in modo permanente. Riprova.");
    }
  };

  if (hasToken === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400">
          🔒 Accedi per vedere la tua collezione
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Per visualizzare e gestire le tue carte, devi avere un account Funkard.
          <br /> È veloce e gratuito!
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            🔑 Accedi
          </button>
          <button
            onClick={() => router.push("/register")}
            className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            🧩 Registrati
          </button>
        </div>
      </div>
    );
  }

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
                relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg
                hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-200
                cursor-pointer
              "
              onClick={() => (window.location.href = `/collection/${card.id}`)}
            >
              {/* Badge temporaneo se non permanente e con gradedAt */}
              {!card.permanent && card.gradedAt && (
                <div className="absolute top-2 right-2 flex items-center gap-2">
                  <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-md shadow">
                    ⏳ Scade tra {daysLeft(card.gradedAt)} giorni
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updatePermanent(card.id);
                    }}
                    className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black text-xs px-2 py-1 rounded-md"
                    title="Rendi permanente"
                  >
                    Salva
                  </button>
                </div>
              )}
              {/* Badge GRADED se proviene da GradeLens */}
              {card.source === "gradelens" && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] px-2 py-[1px] rounded-full z-10">
                  GRADED
                </span>
              )}
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
                {/* Overall grade, se disponibile */}
                { (card as UserCard & { overallGrade?: number }).overallGrade !== undefined && (
                  <p className="text-sm mt-2 text-yellow-400 font-bold">
                    Grade {(card as UserCard & { overallGrade?: number }).overallGrade!.toFixed(2)}
                  </p>
                )}

                {/* Selector condizione con update via API */}
                <div className="mt-3">
                  <label className="text-xs text-gray-400 mr-2">Condizione:</label>
                  <select
                    value={card.condition}
                    onClick={(e) => e.stopPropagation()}
                    onChange={async (e) => {
                      const newCondition = e.target.value;
                      try {
                        await updateUserCard(card.id, { condition: newCondition });
                        setCards((prev) => prev.map((c) => (c.id === card.id ? { ...c, condition: newCondition } : c)));
                        toast.success(`Condizione aggiornata a ${newCondition}`);
                      } catch {
                        toast.error("Errore durante l'aggiornamento");
                      }
                    }}
                    className="bg-gray-800 text-white text-xs rounded px-2 py-1 border border-gray-600"
                  >
                    <option value="MINT">MINT</option>
                    <option value="NM">NM</option>
                    <option value="LP">LP</option>
                    <option value="MP">MP</option>
                    <option value="HP">HP</option>
                    <option value="DAMAGED">DAMAGED</option>
                  </select>
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
          userId={userId}
          onCardAdded={() => {
            fetchCards();
            setShowModal(false);
          }}
          onOpenChange={(open) => {
            setShowModal(open);
            if (!open) fetchCards();
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
