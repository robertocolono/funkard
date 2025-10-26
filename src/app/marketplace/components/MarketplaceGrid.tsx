"use client";

import CardItem from "./CardItem";

const mockCards = [
  {
    id: "1",
    title: "Charizard Base Set 1999",
    imageFront: "/mock/charizard_front.jpg",
    game: "Pokémon",
    condition: "Mint 9/10",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 4500,
    status: "available" as const,
  },
  {
    id: "2",
    title: "Blue-Eyes White Dragon SDK-001",
    imageFront: "/mock/blueeyes_front.jpg",
    game: "Yu-Gi-Oh!",
    condition: "Near Mint 8/10",
    gradeCompany: "BGS",
    gradeValue: 8,
    price: 1500,
    status: "sold" as const,
  },
  {
    id: "3",
    title: "Black Lotus Unlimited",
    imageFront: "/mock/blacklotus_front.jpg",
    game: "Magic: The Gathering",
    condition: "Excellent 7/10",
    gradeCompany: "CGC",
    gradeValue: 7,
    price: 18500,
    status: "available" as const,
  },
  {
    id: "4",
    title: "Pikachu VMAX Rainbow Rare",
    imageFront: "/mock/pikachu_vmax_front.jpg",
    game: "Pokémon",
    condition: "Raw - Near Mint",
    price: 180,
    status: "available" as const,
  },
  {
    id: "5",
    title: "Cristiano Ronaldo Rookie 2003",
    imageFront: "/mock/ronaldo_rookie.jpg",
    game: "Calcio (Panini)",
    condition: "PSA 9 Mint",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 2700,
    status: "available" as const,
  },
];

export default function MarketplaceGrid() {
  if (mockCards.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        Nessuna carta trovata. Prova a modificare i filtri.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10">
      {mockCards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </div>
  );
}