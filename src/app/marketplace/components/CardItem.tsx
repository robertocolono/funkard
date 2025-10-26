"use client";

import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  id: string;
  title: string;
  imageFront: string;
  game: string;
  condition: string;
  gradeCompany?: string;
  gradeValue?: number;
  price: number;
  status: string;
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
  status,
}: CardItemProps) {
  const isSold = status === "sold";

  return (
    <Link
      href={`/marketplace/${id}`}
      className={`group block rounded-xl overflow-hidden border ${
        isSold ? "border-gray-200 opacity-70" : "border-gray-100"
      } bg-white shadow-sm hover:shadow-md hover:border-violet-400 transition`}
    >
      {/* 🖼️ Immagine principale */}
      <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center">
        <Image
          src={imageFront}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {isSold && (
          <div className="absolute top-2 right-2 bg-gray-900/70 text-white text-xs px-2 py-1 rounded-md">
            Venduta
          </div>
        )}
      </div>

      {/* 📋 Dettagli carta */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-violet-700 transition">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{game}</p>

        <p className="text-xs text-gray-600 mt-1">
          {condition}
          {gradeCompany && gradeValue && (
            <span> · {gradeCompany} {gradeValue}</span>
          )}
        </p>

        <p className="text-violet-700 font-bold mt-2">
          €{price.toLocaleString("it-IT")}
        </p>
      </div>
    </Link>
  );
}