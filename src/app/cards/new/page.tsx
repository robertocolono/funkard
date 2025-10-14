"use client";
import { useState } from "react";
import CardImageUploader from "@/components/cards/CardImageUploader";

export default function AddCardPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Carica prima l'immagine della carta!");
      return;
    }

    const form = e.currentTarget as typeof e.currentTarget & {
      name: { value: string };
      description: { value: string };
      price: { value: string };
    };

    const data = {
      name: form.name.value,
      description: form.description.value,
      price: form.price.value,
      image: imageUrl,
    };

    const res = await fetch("/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Carta aggiunta con successo!");
      form.reset();
      setImageUrl(null);
    } else {
      alert("Errore nel salvataggio.");
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Aggiungi carta</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Nome della carta" required className="input-funkard" />
        <textarea name="description" placeholder="Descrizione" className="input-funkard" />
        <input name="price" type="number" placeholder="Prezzo (€)" className="input-funkard" />
        <CardImageUploader onUploadComplete={setImageUrl} />
        <button type="submit" className="btn-funkard">Pubblica carta</button>
      </form>
    </main>
  );
}
