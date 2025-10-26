"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface CardItemProps {
  id: string;
  title: string;
  imageFront: string;
  imageBack?: string;
  game: string;
  condition: string;
  gradeCompany?: string;
  gradeValue?: number;
  price: number;
  status: "available" | "sold";
}

export default function CardItem({
  id,
  title,
  imageFront,
  imageBack,
  game,
  condition,
  gradeCompany,
  gradeValue,
  price,
  status,
}: CardItemProps) {
  const [showBack, setShowBack] = useState(false);

  return (
    <Link href={`/marketplace/${id}`}>
      <div
        className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onMouseEnter={() => setShowBack(true)}
        onMouseLeave={() => setShowBack(false)}
      >
        {/* 📸 Immagine carta */}
        <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
          <Image
            src={showBack && imageBack ? imageBack : imageFront}
            alt={title}
            fill
            className="object-contain bg-gray-50"
          />

          {/* 🔘 Stato */}
          <Badge
            className={`absolute top-2 left-2 text-xs ${
              status === "sold"
                ? "bg-gray-400 text-white"
                : "bg-violet-600 text-white"
            }`}
          >
            {status === "sold" ? "Venduta" : "Disponibile"}
          </Badge>
        </div>

        {/* 📋 Dettagli */}
        <div className="p-4 space-y-1">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>

          <p className="text-sm text-gray-600">{game}</p>

          <p className="text-sm text-gray-600">
            {condition}
            {gradeCompany && gradeValue && (
              <>
                {" "}
                · <span className="font-medium">{gradeCompany} {gradeValue}</span>
              </>
            )}
          </p>

          <div className="pt-1 flex items-center justify-between">
            <span className="text-lg font-bold text-violet-700">
              €{price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400 group-hover:text-violet-600">
              {showBack ? "← Fronte" : "Retro →"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}