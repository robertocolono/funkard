"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AddRawImagesModal from "@/components/AddRawImagesModal";
import TrendChart from "@/components/TrendChart";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://funkard-api.onrender.com";

const conditionMap: Record<string, string> = {
  "GEM MINT": "10/10",
  "MINT": "9/10",
  "NM": "8/10",
  "EX": "7/10",
  "LP": "5/10",
  "PL": "3/10",
  "DAMAGED": "1/10",
};

interface UserCard {
  id: string;
  userId: string;
  name: string;
  setName: string;
  condition: string;
  tcg?: string;
  estimatedValue?: number;
  frontImage?: string;
  backImage?: string;
  type?: "RAW" | "GRADED";
  source?: "manual" | "purchase" | "gradelens";
  createdAt?: string;
  // RAW EXTRA IMAGES
  topLeftImage?: string;
  topRightImage?: string;
  bottomLeftImage?: string;
  bottomRightImage?: string;
  edgeTopImage?: string;
  edgeBottomImage?: string;
  edgeLeftImage?: string;
  edgeRightImage?: string;
}

export default function CardDetailPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [card, setCard] = useState(null as UserCard | null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as string | null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/usercards/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCard(data);
      } catch (e) {
        setError("Impossibile caricare i dettagli della carta.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCard();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-zinc-400">Caricamento...</p>
      </div>
    );

  if (error || !card)
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">
        <p className="text-red-400 mb-4">{error}</p>
        <Button
          onClick={() => router.push("/collection")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          Torna alla collezione
        </Button>
      </div>
    );

  const date = card.createdAt
    ? new Date(card.createdAt).toLocaleDateString("it-IT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  const value =
    typeof card.estimatedValue === "number"
      ? `€${card.estimatedValue.toFixed(2)}`
      : "—";

  const sourceMap = {
    manual: "Aggiunta manualmente",
    purchase: "Da acquisto",
    gradelens: "Da GradeLens",
  } as const;

  // rilevamento immagini RAW
  const hasRawImages =
    card.type === "RAW" ||
    card.topLeftImage ||
    card.topRightImage ||
    card.bottomLeftImage ||
    card.bottomRightImage ||
    card.edgeTopImage ||
    card.edgeBottomImage ||
    card.edgeLeftImage ||
    card.edgeRightImage;

  const rawImages = [
    { label: "Angolo Superiore Sinistro", src: card.topLeftImage },
    { label: "Angolo Superiore Destro", src: card.topRightImage },
    { label: "Angolo Inferiore Sinistro", src: card.bottomLeftImage },
    { label: "Angolo Inferiore Destro", src: card.bottomRightImage },
    { label: "Bordo Superiore", src: card.edgeTopImage },
    { label: "Bordo Inferiore", src: card.edgeBottomImage },
    { label: "Bordo Sinistro", src: card.edgeLeftImage },
    { label: "Bordo Destro", src: card.edgeRightImage },
  ].filter((i) => i.src);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-6 border-b border-zinc-800 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{card.name}</h1>
          <p className="text-zinc-400 text-sm">{card.setName}</p>
        </div>
        <Button
          onClick={() => router.push("/collection")}
          className="bg-zinc-800 hover:bg-zinc-700 text-white"
        >
          ← Torna alla collezione
        </Button>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        {/* IMMAGINI */}
        <div className="flex-1">
          <div className="hidden sm:flex gap-4 justify-center">
            <div className="w-1/2">
              <Image
                src={card.frontImage || "/mock/placeholder.png"}
                alt={`${card.name} fronte`}
                width={800}
                height={1000}
                className="rounded-xl border border-zinc-800 w-full object-cover"
              />
              <p className="text-center text-zinc-400 text-sm mt-2">Fronte</p>
            </div>
            <div className="w-1/2">
              <Image
                src={card.backImage || "/mock/placeholder.png"}
                alt={`${card.name} retro`}
                width={800}
                height={1000}
                className="rounded-xl border border-zinc-800 w-full object-cover"
              />
              <p className="text-center text-zinc-400 text-sm mt-2">Retro</p>
            </div>
          </div>

          {/* MOBILE SWITCH */}
            <div className="sm:hidden">
              <Tabs defaultValue="front">
                <TabsList className="bg-zinc-900 border border-zinc-800 mb-4">
                  <TabsTrigger value="front">Fronte</TabsTrigger>
                  <TabsTrigger value="back">Retro</TabsTrigger>
                </TabsList>
                <TabsContent value="front">
                  <Image
                    src={card.frontImage || "/mock/placeholder.png"}
                    alt="Fronte"
                    width={800}
                    height={1000}
                    className="rounded-xl border border-zinc-800 w-full object-cover"
                  />
                </TabsContent>
                <TabsContent value="back">
                  <Image
                    src={card.backImage || "/mock/placeholder.png"}
                    alt="Retro"
                    width={800}
                    height={1000}
                    className="rounded-xl border border-zinc-800 w-full object-cover"
                  />
                </TabsContent>
              </Tabs>
            </div>

          {/* SEZIONE RAW */}
          {hasRawImages && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Dettagli fisici (RAW)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {rawImages.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="relative border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.src || "/mock/placeholder.png"}
                      alt={img.label}
                      width={400}
                      height={400}
                      className="object-cover w-full h-40"
                    />
                    <p className="text-xs text-center text-zinc-400 mt-1 pb-1">
                      {img.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <AddRawImagesModal
                cardId={card.id}
                onSuccess={() => {
                  // ricarica i dati della carta senza refresh totale potenzialmente
                  // per semplicità: reload hard, in futuro trasformare fetch in funzione riutilizzabile
                  window.location.reload();
                }}
              />
            </div>
          )}
        </div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex flex-col gap-4"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-2">Dettagli</h2>
            <div className="flex flex-col gap-2 text-sm text-zinc-300">
              <p>
                <span className="text-zinc-500">Condizione:</span>{" "}
                {card.condition}{" "}
                {conditionMap[card.condition] && (
                  <span className="text-gray-400">({conditionMap[card.condition]})</span>
                )}
              </p>
              <p>
                <span className="text-zinc-500">Tipo:</span> {card.type || "—"}
              </p>
              <p>
                <span className="text-zinc-500">Gioco:</span> {card.tcg || "—"}
              </p>
              <p>
                <span className="text-zinc-500">Valore stimato:</span> {value}
              </p>
              <p>
                <span className="text-zinc-500">Origine:</span> {sourceMap[card.source as keyof typeof sourceMap ?? "manual"]}
              </p>
              <p>
                <span className="text-zinc-500">Aggiunta il:</span> {date}
              </p>
            </div>
          </div>

          {/* TREND CHART */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-4">Trend Prezzi</h2>
            <TrendChart itemName={card.name} category="card" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button disabled className="flex-1 bg-zinc-800 text-zinc-500 cursor-not-allowed">
              Modifica (in arrivo)
            </Button>
            <Button
              disabled
              className="flex-1 bg-zinc-900 border border-zinc-800 text-zinc-500 cursor-not-allowed"
            >
              Elimina (in arrivo)
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
