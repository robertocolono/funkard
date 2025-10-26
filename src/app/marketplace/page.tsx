"use client";

import { useState } from "react";
import SearchFiltersBar from "./components/SearchFiltersBar";
import MarketplaceGrid from "./components/MarketplaceGrid";
import { Filters as FiltersType } from "./components/Filters";

export default function MarketplacePage() {
  const [filters, setFilters] = useState<FiltersType & { searchTerm: string }>({
    category: "",
    game: "",
    productType: "",
    condition: "",
    priceMin: "",
    priceMax: "",
    year: "",
    status: "",
    searchTerm: "",
  });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 📍 Contenitore principale */}
      <section className="pt-8 pb-20">
        {/* 🔍 Barra ricerca + filtri */}
        <SearchFiltersBar onApplyFilters={(newFilters) => setFilters(newFilters)} />

        {/* 🃏 Griglia carte */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <MarketplaceGrid filters={filters} />
        </div>
      </section>
    </main>
  );
}