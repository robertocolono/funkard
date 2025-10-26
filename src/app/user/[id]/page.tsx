"use client";

import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const mockUsers = [
  {
    id: "user_001",
    username: "pokemaster99",
    displayName: "Pokemaster99",
    avatar: "/mock/avatar_pokemaster.jpg",
    verified: true,
    joinDate: "2021-06-12",
    totalSales: 128,
    rating: 4.9,
    bio: "Collezionista e venditore di carte Pokémon da oltre 10 anni. Specializzato in PSA e vintage set.",
  },
  {
    id: "user_002",
    username: "cardinvest_it",
    displayName: "CardInvest IT",
    avatar: "/mock/avatar_cardinvest.jpg",
    verified: false,
    joinDate: "2023-02-01",
    totalSales: 32,
    rating: 4.6,
    bio: "Marketplace italiano per carte sportive e TCG moderni. Puntiamo sulla trasparenza e sicurezza.",
  },
  {
    id: "user_003",
    username: "mtg_legend",
    displayName: "MTG Legend",
    avatar: "/mock/avatar_mtg_legend.jpg",
    verified: true,
    joinDate: "2020-03-15",
    totalSales: 89,
    rating: 4.8,
    bio: "Esperto di Magic: The Gathering con focus su carte rare e vintage. Grading professionale e autenticità garantita.",
  },
  {
    id: "user_004",
    username: "modern_cards",
    displayName: "Modern Cards",
    avatar: "/mock/avatar_modern_cards.jpg",
    verified: false,
    joinDate: "2022-08-20",
    totalSales: 45,
    rating: 4.7,
    bio: "Specializzato in carte moderne e set recenti. Spedizione veloce e imballaggio professionale.",
  },
  {
    id: "user_005",
    username: "yugioh_collector",
    displayName: "Yu-Gi-Oh! Collector",
    avatar: "/mock/avatar_yugioh.jpg",
    verified: true,
    joinDate: "2019-11-08",
    totalSales: 156,
    rating: 4.9,
    bio: "Collezionista Yu-Gi-Oh! dal 2002. Vendo solo carte autentiche con certificato di autenticità.",
  },
  {
    id: "user_006",
    username: "anime_cards",
    displayName: "Anime Cards",
    avatar: "/mock/avatar_anime.jpg",
    verified: false,
    joinDate: "2023-01-10",
    totalSales: 23,
    rating: 4.5,
    bio: "Passionato di carte anime e manga. One Piece, Dragon Ball, Naruto e molto altro.",
  },
  {
    id: "user_007",
    username: "sport_cards_pro",
    displayName: "Sport Cards Pro",
    avatar: "/mock/avatar_sport.jpg",
    verified: true,
    joinDate: "2020-09-14",
    totalSales: 203,
    rating: 4.9,
    bio: "Dealer professionale di carte sportive. Calcio, basket, baseball. Grading PSA e BGS.",
  },
  {
    id: "user_008",
    username: "classic_yugioh",
    displayName: "Classic Yu-Gi-Oh!",
    avatar: "/mock/avatar_classic.jpg",
    verified: false,
    joinDate: "2021-12-03",
    totalSales: 67,
    rating: 4.6,
    bio: "Specializzato in carte Yu-Gi-Oh! classiche e rare. Set originali e prime edizioni.",
  },
];

export default function UserPage() {
  const { id } = useParams();
  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Venditore non trovato.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl shadow-sm p-8">
        {/* 👤 Header venditore */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={user.avatar}
              alt={user.displayName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              {user.displayName}
              {user.verified && (
                <Badge className="bg-violet-600 text-white text-xs">Verificato</Badge>
              )}
            </h1>
            <p className="text-gray-500 text-sm">@{user.username}</p>
            <p className="text-gray-600 text-sm mt-1">
              Membro dal {new Date(user.joinDate).toLocaleDateString("it-IT")}
            </p>
          </div>
        </div>

        {/* 📊 Dati rapidi */}
        <div className="grid grid-cols-3 gap-6 text-center border-y border-gray-200 py-6 mb-8">
          <div>
            <p className="text-lg font-bold text-gray-900">{user.totalSales}</p>
            <p className="text-sm text-gray-500">Vendite</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{user.rating}/5</p>
            <p className="text-sm text-gray-500">Valutazione</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">⚡️</p>
            <p className="text-sm text-gray-500">Attività recente</p>
          </div>
        </div>

        {/* 🧾 Bio */}
        <p className="text-gray-700 leading-relaxed mb-8">{user.bio}</p>

        {/* 🃏 Placeholder carte */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Carte in vendita</h2>
          <div className="text-sm text-gray-500">
            Nessuna carta caricata. (Mock)
          </div>
        </div>
      </div>
    </main>
  );
}
