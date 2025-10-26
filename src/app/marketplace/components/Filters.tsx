"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export interface Filters {
  category: "TCG" | "SPORT" | "";
  game: string;
  productType: string;
  condition: string;
  priceMin: string;
  priceMax: string;
  year: string;
  status: "available" | "sold" | "";
}

export default function Filters({
  filters,
  onFiltersChange,
}: {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}) {
  const handleChange = (key: keyof Filters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    onFiltersChange(newFilters);
  };

  return (
    <div className="w-full bg-white border rounded-2xl shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Filtri Marketplace</h3>

      {/* Categoria */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select onValueChange={(v: string) => handleChange("category", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria (TCG / Sport)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="TCG">TCG</SelectItem>
            <SelectItem value="SPORT">Sport</SelectItem>
          </SelectContent>
        </Select>

        {/* Gioco */}
        <Input
          placeholder="Gioco / Lega (es. Pokémon, NBA, One Piece)"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("game", e.target.value)}
        />

        {/* Tipo Prodotto */}
        <Select onValueChange={(v: string) => handleChange("productType", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo prodotto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="card">Carta singola</SelectItem>
            <SelectItem value="booster">Booster Pack</SelectItem>
            <SelectItem value="box">Box sigillata</SelectItem>
            <SelectItem value="etb">Elite Trainer Box (ETB)</SelectItem>
            <SelectItem value="deck">Mazzo / Starter Deck</SelectItem>
            <SelectItem value="accessory">Accessori (sleeves, binders...)</SelectItem>
          </SelectContent>
        </Select>

        {/* Condizione */}
        <Select onValueChange={(v: string) => handleChange("condition", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Condizione / Grado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="raw">Raw (non gradata)</SelectItem>
            <SelectItem value="psa10">Gradata PSA 10</SelectItem>
            <SelectItem value="psa9">Gradata PSA 9</SelectItem>
            <SelectItem value="bgs9.5">Gradata BGS 9.5</SelectItem>
            <SelectItem value="cgc9">Gradata CGC 9</SelectItem>
            <SelectItem value="mint">Mint (9/10)</SelectItem>
            <SelectItem value="near-mint">Near Mint (8/10)</SelectItem>
            <SelectItem value="light-play">Light Play (6-7/10)</SelectItem>
            <SelectItem value="moderate-play">Moderate Play (5/10)</SelectItem>
            <SelectItem value="damaged">Damaged (3/10 o inferiore)</SelectItem>
          </SelectContent>
        </Select>

        {/* Prezzo */}
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Prezzo minimo €"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("priceMin", e.target.value)}
          />
          <Input
            type="number"
            placeholder="Prezzo massimo €"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("priceMax", e.target.value)}
          />
        </div>

        {/* Anno */}
        <Input
          type="number"
          placeholder="Anno di rilascio (es. 1999)"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("year", e.target.value)}
        />

        {/* Stato */}
        <Select onValueChange={(v: string) => handleChange("status", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Stato" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Disponibile</SelectItem>
            <SelectItem value="sold">Venduta</SelectItem>
          </SelectContent>
        </Select>
      </div>

    </div>
  );
}