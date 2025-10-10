"use client";
import Image from "next/image";
import { useState } from "react";

export default function FunkardLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center text-center mt-20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={isHovered ? "/smile-open.png" : "/smile-closed.png"}
          alt="Funkard smile"
          width={350}
          height={350}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
        {isHovered && (
          <a
            href="/marketplace"
            className="absolute inset-x-0 bottom-10 mx-auto bg-gradient-to-r from-[#FFB300] to-[#FF7A00] text-black font-bold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Esplora il Marketplace
          </a>
        )}
      </div>

      <h1 className="mt-6 text-4xl font-bold text-white drop-shadow-[0_0_15px_#FFB300]">
        FUNKARD
      </h1>
      <p className="text-gray-300 mt-2">Collect. Connect. Play.</p>
    </div>
  );
}
