"use client";

import AddToCollectionTrigger from "@/components/AddToCollectionTrigger";
import GradeLensDisclaimer from "@/components/GradeLensDisclaimer";

export default function GradeLensResultPage() {
  const gradeResult = {
    cardName: "Charizard Base Set",
    numeric: 8.9,
    conditionLabel: "Mint 9",
  };

  return (
    <div className="p-8 text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">🎯 Risultato GradeLens</h1>
        <div className="flex items-center gap-2 mb-4 justify-center">
          <h2 className="text-3xl font-bold text-yellow-50">
            Grado stimato: {gradeResult.numeric.toFixed(1)} / 10
          </h2>
          <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full shadow-sm border border-yellow-300">
            Stima non ufficiale
          </span>
        </div>
        <p className="text-center text-zinc-300 mb-6">
          Valutazione qualitativa: <strong>{gradeResult.conditionLabel}</strong>
        </p>
        <div className="flex justify-center mb-8">
          <AddToCollectionTrigger
            cardName={gradeResult.cardName}
            condition={gradeResult.conditionLabel}
            source="gradelens"
          />
        </div>
        <GradeLensDisclaimer />
        <p className="text-xs text-gray-500 text-center mt-6">
          *Valutazione simulata non ufficiale. Le carte possono differire da grading professionali.
        </p>
      </div>
    </div>
  );
}
