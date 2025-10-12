"use client";
import { useState } from "react";

export default function SellPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        priceEUR: parseFloat(data.priceEUR as string),
        releaseYear: data.releaseYear ? parseInt(data.releaseYear as string) : null,
        quantity: data.quantity ? parseInt(data.quantity as string) : 1,
        isSealed: data.isSealed === "true",
        sellerId: "seed_user", // TEMP finché non c’è login
      }),
    });

    const json = await res.json();
    setLoading(false);

    if (json.success) {
      setMessage("✅ Prodotto pubblicato con successo!");
      e.currentTarget.reset();
    } else {
      setMessage("❌ Errore: " + (json.error || "Impossibile pubblicare."));
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 text-white">
      <h1 className="text-3xl font-black mb-6">Vendi un prodotto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Titolo del prodotto"
          required
          className="w-full rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
        />

        <div className="grid grid-cols-2 gap-4">
          <select name="tcg" required className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110">
            <option value="">Seleziona TCG</option>
            <option value="Pokémon">Pokémon</option>
            <option value="One Piece">One Piece</option>
            <option value="Magic">Magic</option>
            <option value="Yu-Gi-Oh!">Yu-Gi-Oh!</option>
          </select>

          <select name="type" required className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110">
            <option value="SINGLE">Carta Singola</option>
            <option value="BOX">Booster Box</option>
            <option value="ETB">Elite Trainer Box</option>
            <option value="BOOSTER">Booster Pack</option>
            <option value="TIN">Tin / Latta</option>
            <option value="DECK">Mazzo</option>
            <option value="ACCESSORY">Accessorio</option>
            <option value="PROMO">Promo</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="releaseYear" placeholder="Anno" className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110" />
          <input type="text" name="setName" placeholder="Espansione / Set" className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="rarity" placeholder="Rarità" className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110" />
          <input type="text" name="edition" placeholder="Edizione" className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select name="condition" required className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110">
            <option value="">Condizione</option>
            <option value="MINT">Mint</option>
            <option value="NEAR_MINT">Near Mint</option>
            <option value="LIGHT_PLAYED">Light Played</option>
            <option value="PLAYED">Played</option>
            <option value="POOR">Poor</option>
          </select>

          <select name="isSealed" className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110">
            <option value="false">Aperto</option>
            <option value="true">Sigillato</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="priceEUR"
            placeholder="Prezzo (€)"
            step="0.01"
            required
            className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
          />
          <input type="number" name="quantity" placeholder="Quantità" defaultValue={1} className="rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110" />
        </div>

        <input
          type="text"
          name="imageUrl"
          placeholder="URL immagine (temporaneo)"
          className="w-full rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
        />

        <textarea
          name="description"
          placeholder="Descrizione del prodotto..."
          rows={4}
          className="w-full rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-2 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="btn-funkard w-full"
        >
          {loading ? "Pubblicazione..." : "Pubblica prodotto"}
        </button>

        {message && <p className="text-sm mt-3">{message}</p>}
      </form>
    </main>
  );
}
