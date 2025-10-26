"use client";

import SearchFiltersBar from "./components/SearchFiltersBar";
import MarketplaceGrid from "./components/MarketplaceGrid";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 📍 Contenitore principale */}
      <section className="pt-8 pb-20">
        {/* 🔍 Barra ricerca + filtri */}
        <SearchFiltersBar />

        {/* 🃏 Griglia carte */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <MarketplaceGrid />
        </div>
      </section>
    </main>
  );
}