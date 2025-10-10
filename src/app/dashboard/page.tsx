"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Listing {
  id: string;
  title: string;
  description?: string;
  price: number;
  condition: string;
  imageUrl?: string;
  seller?: {
    name: string;
  };
}

export default function Dashboard() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("Near Mint");

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      if (res.ok) {
        const data = await res.json();
        setListings(data);
      }
    } catch (error) {
      console.error("Errore nel caricamento listing:", error);
    }
  };

  const createListing = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Devi essere loggato per creare un annuncio");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ 
        title, 
        description, 
        price: parseFloat(price), 
        condition,
        imageUrl: "https://images.pokemontcg.io/base2/4_hires.png" // Mock image
      })
    });

    if (res.ok) {
      alert("Annuncio creato ✅");
      setTitle("");
      setDescription("");
      setPrice("");
      loadListings(); // Ricarica la lista
    } else {
      alert("Errore nella creazione dell'annuncio");
    }
  };

  const buyListing = (listingId: string) => {
    alert(`Pagamento simulato per listing ${listingId} ✅`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard Funkard</h1>

      {/* Form per creare nuovo listing */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Crea nuovo annuncio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            className="p-2 text-black rounded" 
            placeholder="Titolo carta" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          <input 
            className="p-2 text-black rounded" 
            placeholder="Prezzo (€)" 
            type="number" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
          />
          <textarea 
            className="p-2 text-black rounded md:col-span-2" 
            placeholder="Descrizione" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
          <select 
            className="p-2 text-black rounded" 
            value={condition} 
            onChange={e => setCondition(e.target.value)}
          >
            <option>Near Mint</option>
            <option>Lightly Played</option>
            <option>Moderately Played</option>
            <option>Heavily Played</option>
          </select>
        </div>
        <button 
          className="bg-yellow-500 text-black px-6 py-2 rounded mt-4 font-bold"
          onClick={createListing}
        >
          Crea Annuncio
        </button>
      </div>

      {/* Lista degli annunci */}
      <div>
        <h2 className="text-xl font-bold mb-4">Tutti gli annunci</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-gray-800 p-4 rounded-lg">
              <Image 
                src={listing.imageUrl || "https://images.pokemontcg.io/base2/4_hires.png"} 
                alt={listing.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="font-bold text-lg">{listing.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{listing.description}</p>
              <p className="text-yellow-500 font-bold text-xl">€{listing.price}</p>
              <p className="text-gray-400 text-sm">Condizione: {listing.condition}</p>
              {listing.seller && (
                <p className="text-gray-400 text-sm">Venditore: {listing.seller.name}</p>
              )}
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
                onClick={() => buyListing(listing.id)}
              >
                Compra Ora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}