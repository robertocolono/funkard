"use client";
import Image from "next/image";
import { useState } from "react";

export default function FunkardLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center text-center mt-24 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-center items-center">
        {/* Smile (aperto/chiuso) */}
        <Image
          src={isHovered ? "/smile-open.png" : "/smile-closed.png"}
          alt="Funkard smile"
          width={400}
          height={400}
          className={`transition-all duration-700 ease-in-out ${
            isHovered ? "scale-105 translate-y-1" : "scale-100"
          }`}
        />

        {/* Bottone al centro della bocca */}
        {isHovered && (
          <a
            href="/marketplace"
            className="absolute bottom-[105px] bg-gradient-to-r from-[#FFB300] to-[#FF7A00] text-black font-bold py-2 px-5 rounded-full shadow-[0_0_15px_#FF7A00] hover:shadow-[0_0_25px_#FFB300] transition-all duration-300"
          >
            Esplora il Marketplace
          </a>
        )}
      </div>

      {/* Testo brand */}
      <h1 className="mt-8 text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_15px_#FFB300]">
        FUNKARD
      </h1>
      <p className="text-gray-300 mt-3 text-lg">Collect. Connect. Play.</p>
    </div>
  );
}
