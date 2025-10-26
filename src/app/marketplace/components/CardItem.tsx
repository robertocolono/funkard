"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface CardItemProps {
  id: string;
  title: string;
  imageFront: string;
  game: string;
  condition: string;
  gradeCompany?: string;
  gradeValue?: number;
  price: number;
  currency?: string;
  status: "available" | "sold";
}

export default function CardItem({
  id,
  title,
  imageFront,
  game,
  condition,
  gradeCompany,
  gradeValue,
  price,
  currency = "€",
  status,
}: CardItemProps) {
  return (
    <Link href={`/marketplace/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] cursor-pointer">
        {/* 🖼️ Immagine */}
        <div className="relative w-full aspect-[3/4] bg-gray-50">
          <Image
            src={imageFront}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {status === "sold" && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="text-gray-800 font-semibold text-lg">Venduto</span>
            </div>
          )}
        </div>

        {/* 📋 Info */}
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-900 truncate">{title}</h3>
          <p className="text-xs text-gray-500">{game}</p>

          {/* Condizione */}
          <div className="flex items-center gap-2">
            <Badge className="bg-violet-100 text-violet-700 text-xs">
              {gradeCompany
                ? `${gradeCompany} ${gradeValue} (${condition})`
                : condition}
            </Badge>
          </div>

          {/* Prezzo */}
          <div className="flex items-center justify-between mt-1">
            <span className="text-base font-semibold text-violet-600">
              {currency}
              {price.toLocaleString()}
            </span>
            {status === "available" && (
              <Badge className="bg-green-100 text-green-700 text-xs">Disponibile</Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}