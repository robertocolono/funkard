"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MarketCard } from "@/types/marketcard";

const mockCards: MarketCard[] = [
  {
    id: "1",
    title: "Charizard Base Set",
    game: "Pokémon",
    tcgType: "TCG",
    productType: "card",
    condition: "PSA 9 Mint 9/10",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 4500,
    currency: "EUR",
    year: 1999,
    images: {
      front: "/mock/charizard_front.jpg",
      back: "/mock/charizard_back.jpg",
    },
    seller: {
      id: "u1",
      username: "RareVault",
      verified: true,
      type: "business",
    },
    status: "available",
    createdAt: "2025-10-22",
  },
  {
    id: "2",
    title: "Kobe Bryant Rookie 1996",
    game: "NBA",
    tcgType: "SPORT",
    productType: "card",
    condition: "BGS 9.5 Gem Mint",
    gradeCompany: "BGS",
    gradeValue: 9.5,
    price: 1200,
    currency: "EUR",
    year: 1996,
    images: {
      front: "/mock/kobe_front.jpg",
      back: "/mock/kobe_back.jpg",
    },
    seller: {
      id: "u2",
      username: "TopCollector",
      verified: false,
      type: "user",
    },
    status: "sold",
    createdAt: "2025-10-20",
  },
  {
    id: "3",
    title: "One Piece OP-05 Box",
    game: "One Piece",
    tcgType: "TCG",
    productType: "box",
    condition: "Sealed",
    price: 180,
    currency: "EUR",
    year: 2023,
    images: {
      front: "/mock/onepiece_box.jpg",
      back: "/mock/onepiece_back.jpg",
    },
    seller: {
      id: "u3",
      username: "EastBlueCards",
      verified: true,
      type: "business",
    },
    status: "available",
    createdAt: "2025-10-21",
  },
  {
    id: "4",
    title: "Pikachu Illustrator",
    game: "Pokémon",
    tcgType: "TCG",
    productType: "card",
    condition: "PSA 10 Gem Mint",
    gradeCompany: "PSA",
    gradeValue: 10,
    price: 15000,
    currency: "EUR",
    year: 1998,
    images: {
      front: "/mock/pikachu_illustrator.jpg",
      back: "/mock/pikachu_back.jpg",
    },
    seller: {
      id: "u4",
      username: "LegendaryCards",
      verified: true,
      type: "business",
    },
    status: "available",
    createdAt: "2025-10-23",
  },
  {
    id: "5",
    title: "Magic: The Gathering Black Lotus",
    game: "Magic: The Gathering",
    tcgType: "TCG",
    productType: "card",
    condition: "Near Mint",
    price: 25000,
    currency: "EUR",
    year: 1993,
    images: {
      front: "/mock/black_lotus.jpg",
      back: "/mock/black_lotus_back.jpg",
    },
    seller: {
      id: "u5",
      username: "MTGCollector",
      verified: false,
      type: "user",
    },
    status: "available",
    createdAt: "2025-10-24",
  },
  {
    id: "6",
    title: "Yu-Gi-Oh! Blue-Eyes White Dragon",
    game: "Yu-Gi-Oh!",
    tcgType: "TCG",
    productType: "card",
    condition: "Light Play",
    price: 120,
    currency: "EUR",
    year: 2002,
    images: {
      front: "/mock/blue_eyes.jpg",
      back: "/mock/blue_eyes_back.jpg",
    },
    seller: {
      id: "u6",
      username: "DuelMaster",
      verified: true,
      type: "user",
    },
    status: "sold",
    createdAt: "2025-10-19",
  },
];

export default function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {mockCards.map((card) => (
        <Link key={card.id} href={`/marketplace/${card.id}`}>
          <Card className="relative overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all bg-white cursor-pointer group">
            {/* Stato */}
            {card.status === "sold" && (
              <div className="absolute top-2 right-2 bg-neutral-700 text-white text-xs px-2 py-1 rounded-md z-10">
                Venduta
              </div>
            )}

            {/* Immagine */}
            <div className="relative w-full h-44">
              <Image
                src={card.images.front}
                alt={card.title}
                fill
                className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Contenuto */}
            <div className="p-3 flex flex-col gap-1">
              <h3 className="font-semibold text-sm line-clamp-1">{card.title}</h3>
              <p className="text-xs text-neutral-500">{card.game}</p>

              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-bold text-primary">
                  €{card.price.toLocaleString()}
                </span>
                <span className="text-[11px] text-neutral-500">
                  {card.condition}
                </span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-xs text-neutral-700">
                  <span>{card.seller.username}</span>
                  {card.seller.type === "business" && (
                    <Badge className="bg-primary/10 text-primary text-[10px] px-1 py-0">
                      Business
                    </Badge>
                  )}
                </div>
                {card.seller.verified && (
                  <span className="text-[11px] text-green-600 font-medium">✓ Verified</span>
                )}
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}