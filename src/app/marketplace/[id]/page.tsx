import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mockCard = {
  id: "1",
  title: "Charizard Base Set 1999",
  game: "Pokémon",
  productType: "Card",
  condition: "PSA 9 Mint 9/10",
  gradeCompany: "PSA",
  gradeValue: 9,
  price: 4500,
  currency: "EUR",
  year: 1999,
  description:
    "Iconica carta Charizard del Base Set 1999, in condizioni eccellenti con valutazione PSA 9. Conservata in teca rigida.",
  images: {
    front: "/mock/charizard_front.jpg",
    back: "/mock/charizard_back.jpg",
  },
  seller: {
    username: "RareVault",
    verified: true,
    type: "business",
  },
  status: "available",
  createdAt: "2025-10-22",
};

export default function CardDetailPage() {
  const card = mockCard;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* 🧭 Breadcrumb - visibile solo su desktop */}
      <div className="hidden md:flex text-sm text-gray-500 mb-6">
        <span className="hover:text-violet-600 cursor-pointer">Marketplace</span>
        <span className="mx-2">›</span>
        <span className="hover:text-violet-600 cursor-pointer">{card.game}</span>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{card.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 📸 Immagini */}
        <div className="flex flex-col gap-4">
          <Card className="overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={card.images.front}
              alt={`${card.title} front`}
              width={600}
              height={600}
              className="object-cover w-full h-auto"
            />
          </Card>
          <Card className="overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={card.images.back}
              alt={`${card.title} back`}
              width={600}
              height={600}
              className="object-cover w-full h-auto"
            />
          </Card>
        </div>

        {/* 📋 Info carta */}
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {card.title}
            </h1>
            <p className="text-gray-500">{card.year} • {card.game}</p>
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-violet-100 text-violet-700">{card.condition}</Badge>
            {card.seller.type === "business" && (
              <Badge className="bg-blue-100 text-blue-700">Business</Badge>
            )}
            {card.seller.verified && (
              <span className="text-green-600 font-medium text-sm">✓ Verified</span>
            )}
          </div>

          <div className="text-3xl font-bold text-violet-600">
            €{card.price.toLocaleString()}
          </div>

          <div className="flex gap-3">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">
              Acquista
            </Button>
            <Button variant="outline" className="border-gray-300">
              Contatta venditore
            </Button>
          </div>

          {/* 📜 Descrizione */}
          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-2">Descrizione</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* 🧑‍💼 Venditore */}
          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-2">Venditore</h2>
            <div className="text-sm text-gray-700">
              {card.seller.username}{" "}
              {card.seller.verified && (
                <span className="text-green-600 font-medium">✓</span>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {card.seller.type === "business"
                  ? "Venditore professionale"
                  : "Utente privato"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
