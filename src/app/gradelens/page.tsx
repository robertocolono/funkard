"use client";

import { useState } from "react";
import { calculateGrade, type GradeResult } from "@/lib/gradeUtils";

export default function GradeLensMock() {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [subGrades, setSubGrades] = useState<GradeResult["subGrades"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // TODO: sostituire con user reale quando il login sarà attivo
  const userId = "7";

  const handleAnalyze = async () => {
    if (!frontImage || !backImage) {
      setMessage("⚠️ Carica entrambe le immagini prima di procedere.");
      return;
    }

    setLoading(true);
    setMessage("");
    setGrade(null);

    try {
      // 1️⃣ Calcolo locale (TypeScript)
      const result = await calculateGrade(frontImage, backImage);
      setGrade(result.grade);
      setCategory(result.category);
      setSubGrades(result.subGrades);

      // 2️⃣ Invio dati al backend (Render)
      const response = await fetch("https://funkard-api.onrender.com/api/gradelens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          ...result.subGrades,
          grade: result.grade,
          category: result.category,
          source: "gradelens",
        }),
      });

      if (response.ok) {
        setMessage("✅ Grading completato e salvato!");
      } else {
        setMessage("❌ Errore nel salvataggio su Funkard API.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Errore durante l'analisi della carta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-4">🧠 GradeLens (Mock)</h1>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Carica fronte e retro della carta per ottenere una valutazione simulata. 
        I dati vengono calcolati localmente e salvati su Funkard API.
      </p>

      {/* Upload immagini */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <label className="font-semibold">Fronte:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
          className="border border-gray-300 rounded-md p-2"
        />

        <label className="font-semibold">Retro:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBackImage(e.target.files?.[0] || null)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Bottone */}
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md shadow"
      >
        {loading ? "Analisi in corso..." : "Analizza con GradeLens"}
      </button>

      {/* Messaggi */}
      {message && <p className="mt-4 text-center">{message}</p>}

      {/* Risultato */}
      {grade && (
        <div className="mt-10 bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center border border-gray-200">
          <h2 className="text-2xl font-bold mb-2">
            Risultato: <span className="text-yellow-600">{grade.toFixed(1)}</span> / 10
          </h2>
          <p className="text-gray-700 font-medium mb-4">Categoria: {category}</p>

          {subGrades && (
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>Centering: <span className="font-semibold">{subGrades.centering.toFixed(1)}</span></p>
              <p>Surface: <span className="font-semibold">{subGrades.surface.toFixed(1)}</span></p>
              <p>Edges: <span className="font-semibold">{subGrades.edges.toFixed(1)}</span></p>
              <p>Corners: <span className="font-semibold">{subGrades.corners.toFixed(1)}</span></p>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-6">
            *Valutazione simulata non ufficiale. Le carte possono differire da grading professionali.
          </p>
        </div>
      )}
    </div>
  );
}
