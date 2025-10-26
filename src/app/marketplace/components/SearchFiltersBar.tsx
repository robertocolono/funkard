"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Filters, { Filters as FiltersType } from "./Filters";

export default function SearchFiltersBar({
  onApplyFilters,
}: {
  onApplyFilters?: (filters: FiltersType & { searchTerm: string }) => void;
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FiltersType>({
    category: "",
    game: "",
    productType: "",
    condition: "",
    priceMin: "",
    priceMax: "",
    year: "",
    status: "",
  });

  const handleApply = () => {
    if (onApplyFilters) onApplyFilters({ ...filters, searchTerm });
    setShowFilters(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      {/* 🔍 Barra di ricerca */}
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Cerca carte, set o collezioni..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="flex-1 border-gray-200 focus:border-violet-500 focus:ring-violet-500"
        />
        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-300 hover:bg-violet-50"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-4 h-4 text-violet-600" />
          <span className="hidden sm:inline text-gray-700">Filtri</span>
        </Button>
      </div>

      {/* ⚙️ Pannello filtri */}
      {showFilters && (
        <div className="mt-4">
          <Filters 
            filters={filters} 
            onFiltersChange={setFilters} 
          />
          <div className="flex justify-end mt-4">
            <Button
              onClick={handleApply}
              className="bg-violet-600 hover:bg-violet-700 text-white px-6"
            >
              Applica filtri
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
