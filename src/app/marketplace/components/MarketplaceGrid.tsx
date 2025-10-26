"use client";

import CardItem from "./CardItem";
import { Filters as FiltersType } from "./Filters";

interface Props {
  filters?: FiltersType & { searchTerm?: string };
}

const mockCards = [
  {
    id: "1",
    title: "Charizard Base Set 1999",
    imageFront: "/mock/charizard_front.jpg",
    imageBack: "/mock/charizard_back.jpg",
    game: "Pokémon",
    condition: "Mint 9/10",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 4500,
    status: "available" as const,
    year: 1999,
    productType: "card",
  },
  {
    id: "2",
    title: "Blue-Eyes White Dragon SDK-001",
    imageFront: "/mock/blueeyes_front.jpg",
    imageBack: "/mock/blueeyes_back.jpg",
    game: "Yu-Gi-Oh!",
    condition: "Near Mint 8/10",
    gradeCompany: "BGS",
    gradeValue: 8,
    price: 1500,
    status: "sold" as const,
    year: 2002,
    productType: "card",
  },
  {
    id: "3",
    title: "Black Lotus Unlimited",
    imageFront: "/mock/blacklotus_front.jpg",
    imageBack: "/mock/blacklotus_back.jpg",
    game: "Magic: The Gathering",
    condition: "Excellent 7/10",
    gradeCompany: "CGC",
    gradeValue: 7,
    price: 18500,
    status: "available" as const,
    year: 1993,
    productType: "card",
  },
  {
    id: "4",
    title: "Pikachu VMAX Rainbow Rare",
    imageFront: "/mock/pikachu_vmax_front.jpg",
    imageBack: "/mock/pikachu_vmax_back.jpg",
    game: "Pokémon",
    condition: "Raw - Near Mint",
    price: 180,
    status: "available" as const,
    year: 2020,
    productType: "card",
  },
  {
    id: "5",
    title: "Cristiano Ronaldo Rookie 2003",
    imageFront: "/mock/ronaldo_rookie.jpg",
    imageBack: "/mock/ronaldo_rookie_back.jpg",
    game: "Calcio (Panini)",
    condition: "PSA 9 Mint",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 2700,
    status: "available" as const,
    year: 2003,
    productType: "card",
  },
  {
    id: "6",
    title: "One Piece OP-05 Booster Box",
    imageFront: "/mock/onepiece_box.jpg",
    imageBack: "/mock/onepiece_box_back.jpg",
    game: "One Piece",
    condition: "Sealed",
    price: 180,
    status: "available" as const,
    year: 2023,
    productType: "box",
  },
  {
    id: "7",
    title: "Lionel Messi Rookie 2004",
    imageFront: "/mock/messi_rookie.jpg",
    imageBack: "/mock/messi_rookie_back.jpg",
    game: "Calcio (Panini)",
    condition: "PSA 10 Gem Mint",
    gradeCompany: "PSA",
    gradeValue: 10,
    price: 8500,
    status: "sold" as const,
    year: 2004,
    productType: "card",
  },
  {
    id: "8",
    title: "Yu-Gi-Oh! Dark Magician",
    imageFront: "/mock/dark_magician.jpg",
    imageBack: "/mock/dark_magician_back.jpg",
    game: "Yu-Gi-Oh!",
    condition: "Raw - Excellent",
    price: 45,
    status: "available" as const,
    year: 2002,
    productType: "card",
  },
];

export default function MarketplaceGrid({ filters }: Props) {
  let filtered = mockCards;

  if (filters) {
    const { searchTerm, game, condition, priceMin, priceMax, year, status, productType } = filters;

    filtered = mockCards.filter((c) => {
      // Filtro per termine di ricerca
      if (searchTerm && !c.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      // Filtro per gioco
      if (game && !c.game.toLowerCase().includes(game.toLowerCase())) return false;
      
      // Filtro per condizione
      if (condition && !c.condition.toLowerCase().includes(condition.toLowerCase())) return false;
      
      // Filtro per status
      if (status && c.status !== status) return false;
      
      // Filtro per tipo prodotto
      if (productType && c.productType !== productType) return false;
      
      // Filtro per prezzo minimo
      if (priceMin && c.price < Number(priceMin)) return false;
      
      // Filtro per prezzo massimo
      if (priceMax && c.price > Number(priceMax)) return false;
      
      // Filtro per anno
      if (year && c.year !== Number(year)) return false;
      
      return true;
    });
  }

  if (filtered.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        <div className="text-lg font-medium mb-2">Nessuna carta trovata</div>
        <div className="text-sm">Prova a modificare i filtri o la ricerca</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filtered.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </div>
  );
}