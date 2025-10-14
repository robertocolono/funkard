"use client";

import { useState } from "react";

interface AddToCollectionModalProps {
  defaultName?: string;
  defaultCondition?: string;
  defaultEstimatedValue?: number; // nuovo: precompila il valore stimato
  source?: "purchase" | "gradelens" | "manual";
  onClose?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  userId?: string; // opzionale: permette invio esplicito
}

export default function AddToCollectionModal({
  defaultName = "",
  defaultCondition = "",
  defaultEstimatedValue,
  source = "manual",
  onClose,
  open,
  onOpenChange,
  userId,
}: AddToCollectionModalProps) {
  const [name, setName] = useState(defaultName);
  const [condition, setCondition] = useState(defaultCondition);
  const [estimatedValue, setEstimatedValue] = useState<string>(
    typeof defaultEstimatedValue === "number" && !isNaN(defaultEstimatedValue)
      ? String(defaultEstimatedValue)
      : ""
  );
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !condition || !image) {
      setMessage("⚠️ Inserisci tutti i campi.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("condition", condition);
      formData.append("source", source);
      if (estimatedValue) formData.append("estimatedValue", estimatedValue);
      formData.append("image", image);
      if (userId) formData.append("userId", userId);

      const res = await fetch("https://funkard-api.onrender.com/api/collection/add", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Errore nel salvataggio");

      setMessage("✅ Carta aggiunta alla tua collezione!");
      setTimeout(() => {
        onClose?.();
        onOpenChange?.(false);
      }, 1500);
    } catch {
      setMessage("❌ Errore durante l’upload. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  const isOpen = open ?? true;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl text-center text-black">
        <h2 className="text-xl font-bold mb-4">Aggiungi alla tua collezione</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
          <input
            type="text"
            placeholder="Nome della carta"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-2"
          />

          <input
            type="text"
            placeholder="Condizione (es. Mint, Near Mint)"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="border rounded-lg p-2"
          />

          <input
            type="number"
            step="0.01"
            placeholder="Valore stimato (€)"
            value={estimatedValue}
            onChange={(e) => setEstimatedValue(e.target.value)}
            className="border rounded-lg p-2"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="border rounded-lg p-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600"
          >
            {loading ? "Salvataggio..." : "Salva carta"}
          </button>
        </form>

        {message && <p className="mt-3 text-sm">{message}</p>}

        <button
          onClick={() => {
            onClose?.();
            onOpenChange?.(false);
          }}
          className="text-gray-500 mt-4 text-sm hover:underline"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}
