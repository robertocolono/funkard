"use client";
import Image from "next/image";
import type { UserCard } from "@/types/usercard";
import { motion } from "framer-motion";

interface Props {
  card: UserCard;
  onClick?: () => void;
}

export default function CollectionCard({ card, onClick }: Props) {
  const price =
    typeof card.estimatedValue === "number"
      ? `€${card.estimatedValue.toFixed(2)}`
      : "—";

  const sourceLabel =
    card.source === "purchase"
      ? "Da acquisto"
      : card.source === "gradelens"
      ? "Da GradeLens"
      : "Aggiunta manualmente";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="bg-neutral-900 border border-neutral-800 hover:border-funkard-yellow/60 transition-all rounded-2xl overflow-hidden">
        <div className="p-3">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
            <Image
              src={card.frontImage || "/mock/placeholder.png"}
              alt={card.name}
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-2">
            <p className="text-xs text-zinc-400">{card.setName}</p>
            <h3 className="font-semibold text-white truncate">{card.name}</h3>
            <div className="flex items-center justify-between mt-1 text-sm">
              <span className="text-zinc-400">{card.condition || "-"}</span>
              <span className="text-yellow-400 font-medium">{price}</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1 italic">{sourceLabel}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
