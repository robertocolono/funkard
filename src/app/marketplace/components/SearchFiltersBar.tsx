"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function SearchFiltersBar() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      {/* 🔍 Barra di ricerca */}
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Cerca carte, set o collezioni..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border-gray-200 focus:border-violet-500 focus:ring-violet-500"
        />
        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-300 hover:bg-violet-50"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-4 h-4 text-violet-600" />
          <span className="hidden sm:inline text-gray-700">Filtri</span>
        </Button>
      </div>

      {/* ⚙️ Pannello filtri */}
      {showFilters && (
        <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* 🔸 TCG */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">TCG</label>
            <select className="border border-gray-300 rounded-md p-2 text-sm">
              <option>Tutti</option>
              <option>Pokémon</option>
              <option>Yu-Gi-Oh!</option>
              <option>Magic: The Gathering</option>
              <option>One Piece</option>
              <option>Dragon Ball Super</option>
              <option>Digimon</option>
              <option>Flesh and Blood</option>
              <option>MetaZoo</option>
              <option>Disney Lorcana</option>
              <option>Star Wars Unlimited</option>
              <option>Sports Cards</option>
            </select>
          </div>

          {/* 🔸 Condizione */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Condizione
            </label>
            <select className="border border-gray-300 rounded-md p-2 text-sm">
              <option>Tutte</option>
              <option>PSA 10 Gem Mint 10/10</option>
              <option>PSA 9 Mint 9/10</option>
              <option>PSA 8 Near Mint 8/10</option>
              <option>BGS 10 Black Label</option>
              <option>BGS 9.5 Gem Mint</option>
              <option>Raw - Near Mint</option>
              <option>Raw - Excellent</option>
              <option>Raw - Played</option>
            </select>
          </div>

          {/* 🔸 Prezzo minimo e massimo */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Prezzo minimo (€)
            </label>
            <input
              type="number"
              placeholder="0"
              className="border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Prezzo massimo (€)
            </label>
            <input
              type="number"
              placeholder="10000"
              className="border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>

          {/* 🔸 Gradata o Raw */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select className="border border-gray-300 rounded-md p-2 text-sm">
              <option>Tutti</option>
              <option>Gradate</option>
              <option>Raw</option>
            </select>
          </div>

          {/* 🔸 Anno */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Anno</label>
            <input
              type="number"
              placeholder="1999"
              className="border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>

          {/* 🔸 Tipo prodotto */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Prodotto
            </label>
            <select className="border border-gray-300 rounded-md p-2 text-sm">
              <option>Tutti</option>
              <option>Carta singola</option>
              <option>Box sigillato</option>
              <option>ETB (Elite Trainer Box)</option>
              <option>Booster Pack</option>
              <option>Bundle / Set</option>
              <option>Altro</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
