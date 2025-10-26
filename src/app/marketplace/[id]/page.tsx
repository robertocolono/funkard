import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketCard } from "@/types/marketcard";

// Mock data - in futuro sarà una chiamata API
const mockCard: MarketCard = {
  id: "1",
  title: "Charizard Base Set 1999",
  game: "Pokémon",
  tcgType: "TCG",
  productType: "card",
  condition: "PSA 9 Mint 9/10",
  gradeCompany: "PSA",
  gradeValue: 9,
  price: 4500,
  currency: "EUR",
  year: 1999,
  description: "Iconica carta Charizard del Base Set 1999, in condizioni eccellenti con valutazione PSA 9. Conservata in teca rigida PSA. Questa carta rappresenta uno dei pezzi più ricercati della collezione Pokémon originale.",
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
};

export default function CardDetailPage() {
  const card = mockCard;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Immagini */}
          <div className="flex flex-col gap-4">
            <Card className="overflow-hidden">
              <Image
                src={card.images.front}
                alt={`${card.title} front`}
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
            </Card>
            <Card className="overflow-hidden">
              <Image
                src={card.images.back}
                alt={`${card.title} back`}
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
            </Card>
          </div>

          {/* Info carta */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">{card.title}</h1>
              <p className="text-neutral-600 text-lg">{card.game}</p>
              {card.year && (
                <p className="text-neutral-500">Anno: {card.year}</p>
              )}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="bg-primary/10 text-primary px-3 py-1">
                {card.condition}
              </Badge>
              {card.seller.type === "business" && (
                <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Business</Badge>
              )}
              {card.seller.verified && (
                <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                  ✓ Verified
                </span>
              )}
            </div>

            <div className="text-4xl font-bold text-primary">
              €{card.price.toLocaleString()}
            </div>

            <div className="flex gap-4">
              <Button className="btn-funkard text-lg px-8 py-3">
                Acquista
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3">
                Contatta venditore
              </Button>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <h2 className="text-xl font-semibold mb-3">Descrizione</h2>
              <p className="text-neutral-700 leading-relaxed">{card.description}</p>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <h2 className="text-xl font-semibold mb-3">Venditore</h2>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium text-lg">
                    {card.seller.username}
                    {card.seller.verified && (
                      <span className="text-green-600 ml-2">✓</span>
                    )}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {card.seller.type === "business" ? "Venditore Business" : "Venditore Privato"}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Visita profilo
                </Button>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <h2 className="text-xl font-semibold mb-3">Dettagli</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neutral-500">Tipo:</span>
                  <p className="font-medium capitalize">{card.productType}</p>
                </div>
                <div>
                  <span className="text-neutral-500">Categoria:</span>
                  <p className="font-medium">{card.tcgType}</p>
                </div>
                <div>
                  <span className="text-neutral-500">Stato:</span>
                  <p className="font-medium capitalize">{card.status === "available" ? "Disponibile" : "Venduta"}</p>
                </div>
                <div>
                  <span className="text-neutral-500">Inserita:</span>
                  <p className="font-medium">{new Date(card.createdAt).toLocaleDateString('it-IT')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
