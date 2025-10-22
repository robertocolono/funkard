"use client";

import React from "react";

interface GradeInfoBoxProps {
  service: "PSA" | "BGS" | "CGC";
  grade: number;
  estimatedValue?: number;
  subgrades?: {
    centering?: number;
    corners?: number;
    edges?: number;
    surface?: number;
  };
}

export default function GradeInfoBox({
  service,
  grade,
  estimatedValue,
  subgrades,
}: GradeInfoBoxProps) {
  const getLabel = (value: number): string => {
    if (value >= 9.5) return "Gem Mint";
    if (value >= 9) return "Mint";
    if (value >= 8.5) return "Near Mint+";
    if (value >= 8) return "Near Mint";
    return "Played";
  };

  const getServiceInfo = () => {
    switch (service) {
      case "PSA":
        return {
          color: "text-red-400",
          price: "~ US$ 25",
          time: "30–60 giorni",
          desc:
            "PSA è il riferimento mondiale per l’autenticazione e la classificazione delle carte. Punteggio da 1 a 10 basato su centratura, bordi, angoli e superficie.",
        };
      case "BGS":
        return {
          color: "text-blue-400",
          price: "~ US$ 35",
          time: "20–40 giorni",
          desc:
            "Beckett è noto per la precisione delle subgrades (Centering, Corners, Edges, Surface) e per la trasparenza nel punteggio. Scala 1–10 con step da 0.5.",
        };
      case "CGC":
        return {
          color: "text-green-400",
          price: "~ US$ 30",
          time: "25–45 giorni",
          desc:
            "CGC utilizza un sistema a incrementi di 0.5 punti, con 9.5 e 10 riservati alle carte quasi perfette. Ottimo equilibrio tra velocità e affidabilità.",
        };
      default:
        return { color: "text-gray-400", price: "-", time: "-", desc: "" };
    }
  };

  const info = getServiceInfo();
  const label = getLabel(grade);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-gray-200 w-full max-w-md mx-auto shadow-md transition-all hover:border-funkard-yellow/50">
      <h3 className={`text-2xl font-bold mb-2 ${info.color}`}>
        {service} {grade.toFixed(1)}{" "}
        <span className="text-gray-400 font-medium">/ {label}</span>
      </h3>

      {typeof estimatedValue === "number" && !Number.isNaN(estimatedValue) && (
        <p className="text-yellow-400 font-semibold mb-3">
          💰 Valore stimato: €{estimatedValue.toLocaleString("it-IT")}
        </p>
      )}

      <p className="text-sm mb-2">{info.desc}</p>

      {service === "BGS" && subgrades && (
        <div className="mt-3 text-sm text-gray-300 border border-neutral-800 rounded-lg p-3 bg-neutral-950/60">
          <p className="font-semibold text-blue-400 mb-1">Subgrades</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <span>
              Centering: <strong>{subgrades.centering ?? "-"}</strong>
            </span>
            <span>
              Corners: <strong>{subgrades.corners ?? "-"}</strong>
            </span>
            <span>
              Edges: <strong>{subgrades.edges ?? "-"}</strong>
            </span>
            <span>
              Surface: <strong>{subgrades.surface ?? "-"}</strong>
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-neutral-800 pt-2 mt-3">
        <span>🕒 Tempi: {info.time}</span>
        <span>💵 Costo stimato: {info.price}</span>
      </div>

      <p className="text-[11px] text-gray-500 italic mt-3">
        *Questo punteggio si basa sul sistema interno Funkard e non rappresenta una valutazione ufficiale PSA/BGS/CGC.
      </p>
    </div>
  );
}
