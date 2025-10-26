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
  status,
}: CardItemProps) {
  return (
    <Link
      href={`/marketplace/${id}`}
      className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Immagine */}
      <div className="relative w-full aspect-[3/4] bg-gray-50">
        <Image
          src={imageFront}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {status === "sold" && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Venduta
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-gray-900 font-semibold text-base line-clamp-1 group-hover:text-violet-700 transition">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">{game}</p>

        <p className="text-gray-700 text-sm mt-1">
          {condition}
          {gradeCompany && gradeValue ? ` • ${gradeCompany} ${gradeValue}` : ""}
        </p>

        <p className="text-violet-700 font-semibold mt-2">
          €{price.toLocaleString("it-IT")}
        </p>
      </div>
    </Link>
  );
}