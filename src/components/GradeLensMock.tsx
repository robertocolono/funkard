"use client";

import { useState } from "react";
import Image from "next/image";
import AddToCollectionModal from "@/components/AddToCollectionModal";
import { calculateGrade, type GradeResult } from "@/lib/gradeUtils";

export default function GradeLensMock() {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [gradeResult, setGradeResult] = useState<GradeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAnalyze = async () => {
    if (!frontImage || !backImage) return alert("Carica entrambe le immagini.");
    setLoading(true);
    setGradeResult(null);
    try {
      const result = await calculateGrade(frontImage, backImage);
      setGradeResult(result);
    } catch (e) {
      console.error(e);
      alert("Errore durante il calcolo del grading");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        🧠 GradeLens – Scansione simulata
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        <div className="flex flex-col items-center">
          <label className="font-semibold mb-2">Fronte</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
            className="text-sm"
          />
          {frontImage && (
            <Image
              src={URL.createObjectURL(frontImage)}
              alt="fronte"
              width={300}
              height={400}
              className="mt-2 w-48 h-64 object-cover rounded-lg border border-gray-300"
            />
          )}
        </div>
        <div className="flex flex-col items-center">
          <label className="font-semibold mb-2">Retro</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBackImage(e.target.files?.[0] || null)}
              className="text-sm"
            />
            {backImage && (
              <Image
                src={URL.createObjectURL(backImage)}
                alt="retro"
                width={300}
                height={400}
                className="mt-2 w-48 h-64 object-cover rounded-lg border border-gray-300"
              />
            )}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleAnalyze}
          disabled={loading || !frontImage || !backImage}
          className={`px-6 py-2 font-bold rounded-md text-white transition ${
            loading || !frontImage || !backImage
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {loading ? "Scansione in corso..." : "Analizza la carta"}
        </button>
      </div>
      {gradeResult && (
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Grado stimato: {gradeResult.grade.toFixed(1)} / 10
            </h2>
            <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full shadow-sm border border-yellow-300">
              Stima non ufficiale
            </span>
          </div>
          <div className="h-3 w-64 bg-gray-200 rounded-full mx-auto mt-3">
            <div
              className="h-3 bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${(gradeResult.grade / 10) * 100}%` }}
            />
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Questo punteggio è una stima automatica basata su parametri tecnici
            e può differire da valutazioni professionali.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-gray-100 rounded-md p-2">
              <p className="text-gray-500">Centering</p>
              <p className="font-semibold text-gray-800">{gradeResult.subGrades.centering.toFixed(1)}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-2">
              <p className="text-gray-500">Surface</p>
              <p className="font-semibold text-gray-800">{gradeResult.subGrades.surface.toFixed(1)}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-2">
              <p className="text-gray-500">Edges</p>
              <p className="font-semibold text-gray-800">{gradeResult.subGrades.edges.toFixed(1)}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-2">
              <p className="text-gray-500">Corners</p>
              <p className="font-semibold text-gray-800">{gradeResult.subGrades.corners.toFixed(1)}</p>
            </div>
          </div>
          <p className="mt-3 text-sm font-medium text-gray-700">Categoria: {gradeResult.category}</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition"
          >
            ➕ Aggiungi alla mia collezione
          </button>
        </div>
      )}
      <div className="mt-8 bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-sm text-sm">
        <p className="font-semibold mb-1">⚠️ Importante</p>
        <p>
          Il punteggio assegnato da <span className="font-medium">GradeLens</span> è una
          <span className="font-semibold"> stima simulata</span> basata su parametri tecnici
          e/o valutazione manuale. Non rappresenta una certificazione ufficiale di condizione o valore.
        </p>
        <p className="mt-2">
          Le valutazioni possono {""}
          <span className="font-semibold">differire da quelle di enti di grading professionali</span>{" "}
          (PSA, BGS, CGC, ecc.).
        </p>
      </div>
      <p className="text-xs text-gray-500 text-center mt-6">
        *Valutazione simulata non ufficiale. Le carte possono differire da grading professionali.
      </p>
      {showModal && gradeResult && (
        <AddToCollectionModal
          defaultName="Carta scansionata"
          defaultCondition="RAW"
          defaultEstimatedValue={gradeResult.grade * 10}
          source="gradelens"
          onClose={() => setShowModal(false)}
          onOpenChange={(open) => !open && setShowModal(false)}
        />
      )}
    </div>
  );
}
