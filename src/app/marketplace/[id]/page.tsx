"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockCards = [
  {
    id: "1",
    title: "Charizard Base Set 1999",
    imageFront: "/mock/charizard_front.jpg",
    imageBack: "/mock/charizard_back.jpg",
    game: "Pokémon",
    condition: "PSA 9 Mint",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 4500,
    status: "available",
    year: 1999,
    productType: "Carta singola",
    description:
      "Iconica carta Charizard del Base Set del 1999, una delle più ricercate dai collezionisti Pokémon. Esemplare in condizioni PSA 9 Mint, con ottimi bordi e centratura.",
    seller: {
      username: "pokemaster99",
      displayName: "Pokemaster99",
      id: "user_001",
    },
  },
  {
    id: "2",
    title: "Cristiano Ronaldo Rookie 2003",
    imageFront: "/mock/ronaldo_rookie.jpg",
    imageBack: "/mock/ronaldo_rookie_back.jpg",
    game: "Calcio (Panini)",
    condition: "PSA 9 Mint",
    gradeCompany: "PSA",
    gradeValue: 9,
    price: 2700,
    status: "sold",
    year: 2003,
    productType: "Carta sportiva",
    description:
      "Rookie card di Cristiano Ronaldo, una delle più iconiche della storia del calcio moderno. Esemplare in condizioni PSA 9.",
    seller: {
      username: "cardinvest_it",
      displayName: "CardInvest IT",
      id: "user_002",
    },
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
    status: "available",
    year: 1993,
    productType: "Carta singola",
    description:
      "La leggendaria Black Lotus di Magic: The Gathering, una delle carte più rare e costose del mondo. Esemplare in condizioni Excellent con grading CGC 7.",
    seller: {
      username: "mtg_legend",
      displayName: "MTG Legend",
      id: "user_003",
    },
  },
  {
    id: "4",
    title: "Pikachu VMAX Rainbow Rare",
    imageFront: "/mock/pikachu_vmax_front.jpg",
    imageBack: "/mock/pikachu_vmax_back.jpg",
    game: "Pokémon",
    condition: "Raw - Near Mint",
    price: 180,
    status: "available",
    year: 2020,
    productType: "Carta singola",
    description:
      "Pikachu VMAX Rainbow Rare in condizioni Raw Near Mint. Carta moderna con design accattivante e grande richiesta tra i collezionisti.",
    seller: {
      username: "modern_cards",
      displayName: "Modern Cards",
      id: "user_004",
    },
  },
  {
    id: "5",
    title: "Blue-Eyes White Dragon SDK-001",
    imageFront: "/mock/blueeyes_front.jpg",
    imageBack: "/mock/blueeyes_back.jpg",
    game: "Yu-Gi-Oh!",
    condition: "Near Mint 8/10",
    gradeCompany: "BGS",
    gradeValue: 8,
    price: 1500,
    status: "sold",
    year: 2002,
    productType: "Carta singola",
    description:
      "Blue-Eyes White Dragon dalla Starter Deck Kaiba, una delle carte più iconiche di Yu-Gi-Oh!. Esemplare in condizioni Near Mint con grading BGS 8.",
    seller: {
      username: "yugioh_collector",
      displayName: "Yu-Gi-Oh! Collector",
      id: "user_005",
    },
  },
  {
    id: "6",
    title: "One Piece OP-05 Booster Box",
    imageFront: "/mock/onepiece_box.jpg",
    imageBack: "/mock/onepiece_box_back.jpg",
    game: "One Piece",
    condition: "Sealed",
    price: 180,
    status: "available",
    year: 2023,
    productType: "Box sigillato",
    description:
      "Booster Box One Piece OP-05 sigillato, perfetto per collezionisti e giocatori. Contiene 24 booster pack con carte rare e super rare.",
    seller: {
      username: "anime_cards",
      displayName: "Anime Cards",
      id: "user_006",
    },
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
    status: "sold",
    year: 2004,
    productType: "Carta sportiva",
    description:
      "Rookie card di Lionel Messi in condizioni PSA 10 Gem Mint, una delle carte più ricercate del calcio moderno. Esemplare perfetto.",
    seller: {
      username: "sport_cards_pro",
      displayName: "Sport Cards Pro",
      id: "user_007",
    },
  },
  {
    id: "8",
    title: "Yu-Gi-Oh! Dark Magician",
    imageFront: "/mock/dark_magician.jpg",
    imageBack: "/mock/dark_magician_back.jpg",
    game: "Yu-Gi-Oh!",
    condition: "Raw - Excellent",
    price: 45,
    status: "available",
    year: 2002,
    productType: "Carta singola",
    description:
      "Dark Magician in condizioni Raw Excellent, una delle carte più iconiche di Yu-Gi-Oh!. Perfetta per collezionisti e giocatori.",
    seller: {
      username: "classic_yugioh",
      displayName: "Classic Yu-Gi-Oh!",
      id: "user_008",
    },
  },
];

export default function CardDetailPage() {
  const params = useParams();
  const { id } = params;
  const card = mockCards.find((c) => c.id === id);

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Carta non trovata.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🖼️ Immagine principale */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-md h-[480px] border border-gray-200 rounded-xl overflow-hidden">
            <Image
              src={card.imageFront}
              alt={card.title}
              fill
              className="object-contain bg-gray-50"
            />
          </div>

          {/* 🔁 Retro */}
          {card.imageBack && (
            <div className="mt-4 relative w-full max-w-md h-[480px] border border-gray-200 rounded-xl overflow-hidden">
              <Image
                src={card.imageBack}
                alt={`${card.title} back`}
                fill
                className="object-contain bg-gray-50"
              />
            </div>
          )}
        </div>

        {/* 📋 Info carta */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge
                className={`${
                  card.status === "sold"
                    ? "bg-gray-400 text-white"
                    : "bg-violet-600 text-white"
                }`}
              >
                {card.status === "sold" ? "Venduta" : "Disponibile"}
              </Badge>

              {card.gradeCompany && (
                <Badge className="bg-gray-100 text-gray-800 border border-gray-200">
                  {card.gradeCompany} {card.gradeValue}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {card.title}
            </h1>

            {/* 🧑‍💼 Venditore */}
            <p className="text-sm text-gray-500 mb-3">
              {card.status === "sold" ? "Venduta da " : "In vendita da "}
              <Link
                href={`/user/${card.seller.id}`}
                className="text-violet-700 font-medium hover:underline"
              >
                @{card.seller.displayName}
              </Link>
            </p>

            <p className="text-gray-600 text-sm mb-1">{card.game}</p>
            <p className="text-gray-600 text-sm mb-4">{card.condition}</p>

            <p className="text-xl font-semibold text-violet-700 mb-4">
              €{card.price.toLocaleString()}
            </p>

            <p className="text-gray-700 leading-relaxed">{card.description}</p>
          </div>

          {/* 📦 Dettagli extra */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-700 space-y-2">
            <p>
              <span className="font-medium text-gray-900">Anno:</span>{" "}
              {card.year}
            </p>
            <p>
              <span className="font-medium text-gray-900">Tipo prodotto:</span>{" "}
              {card.productType}
            </p>
          </div>

          {/* 🛒 Pulsante azione */}
          <div className="mt-6">
            {card.status === "available" ? (
              <Button className="bg-violet-600 hover:bg-violet-700 text-white w-full">
                Acquista
              </Button>
            ) : (
              <Button disabled className="w-full bg-gray-300 text-gray-600">
                Non disponibile
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
