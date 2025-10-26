"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Filters from "./components/Filters";
import MarketplaceGrid from "./components/MarketplaceGrid";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Ricerca:", search);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero con barra ricerca */}
      <section className="bg-white border-b py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Marketplace Funkard</h1>
          <p className="text-neutral-600 mb-6">Scopri, compra e vendi carte da collezione di ogni tipo.</p>

          {/* Barra di ricerca */}
          <div className="flex items-center justify-center gap-2 max-w-3xl mx-auto">
            <Input
              placeholder="Cerca una carta o un set..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-neutral-300"
            />
            <Button
              onClick={handleSearch}
              className="btn-funkard"
            >
              <Search className="w-4 h-4 mr-1" /> Cerca
            </Button>
          </div>
        </div>
      </section>

      {/* Filtri */}
      <section className="py-8 px-4 sm:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <Filters />
        </div>
      </section>

      {/* Griglia carte */}
      <section className="py-10 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold mb-6">Tutte le carte</h2>
          <MarketplaceGrid />
        </div>
      </section>
    </main>
  );
}