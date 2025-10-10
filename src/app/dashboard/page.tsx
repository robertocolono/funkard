"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [listings, setListings] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const load = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`);
    const data = await res.json();
    setListings(data);
  };

  const create = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, condition: "Mint" }),
    });
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4 font-bold">Dashboard</h1>
      <div className="mb-6 flex gap-2">
        <input className="p-2 text-black" placeholder="Titolo" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="p-2 text-black" placeholder="Prezzo" value={price} onChange={e => setPrice(e.target.value)} />
        <button className="bg-yellow-500 px-4 py-2 rounded" onClick={create}>Aggiungi</button>
      </div>
      <ul>
        {listings.map((l: any) => (
          <li key={l.id} className="border-b border-white/10 py-2">
            {l.title} — €{l.price}
          </li>
        ))}
      </ul>
    </div>
  );
}