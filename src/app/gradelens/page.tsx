"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import ImageUploader from "@/components/ImageUploader";
import { analyzeGradeLens, confirmGradeLens } from "@/lib/funkardApi";
import type { GradeLensResponse } from "@/types/gradelens";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import GradeBar from "@/components/GradeBar";
import { toast } from "sonner";

export default function GradeLensPage() {
  const [frontUrl, setFrontUrl] = useState<string | null>(null);
  const [backUrl, setBackUrl] = useState<string | null>(null);
  const [result, setResult] = useState<GradeLensResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [meta, setMeta] = useState({ setName: "", name: "", condition: "NM" });

  async function handleAnalyze() {
  if (!frontUrl || !backUrl) return toast.error("Carica entrambe le immagini");
    setLoading(true);
    try {
      const res: GradeLensResponse = await analyzeGradeLens(frontUrl, backUrl);
      setResult(res);
    } catch (err) {
      console.error(err);
  toast.error("Errore nell'analisi");
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirm() {
    if (!result || !frontUrl || !backUrl) return;
    const lsUserId = typeof window !== "undefined" ? localStorage.getItem("funkard_userId") : null;
    const userId = lsUserId || "7"; // TODO: sostituire con userId reale dal token/risposta login
    if (!lsUserId) {
      console.warn("funkard_userId non presente: uso fallback temporaneo '7'");
    }
    setSaving(true);
    try {
      await confirmGradeLens({
        userId,
        frontImageUrl: frontUrl,
        backImageUrl: backUrl,
        subgrades: result.subgrades,
        overallGrade: result.overall,
        analysisMeta: result.analysisMeta,
        diagnostics: result.diagnostics,
        setName: meta.setName || "N/A",
        name: meta.name || "Carta senza nome",
        condition: meta.condition || "NM",
      });
  toast.success("✅ Carta aggiunta con successo!");
      // opzionale: reset oppure redirect
      // router.push('/collection');
    } catch (e) {
  console.error(e);
  toast.error("Errore durante il salvataggio della carta.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-6 pb-20 pt-24 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-3">GradeLens 🔍</h1>
        <p className="text-gray-400 mb-8">
          Analizza automaticamente le tue carte fronte/retro e scopri la loro valutazione.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <ImageUploader label="Fronte" onUpload={setFrontUrl} />
          <ImageUploader label="Retro" onUpload={setBackUrl} />
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-2 rounded-xl"
        >
          {loading ? "Analisi in corso..." : "Avvia Analisi"}
        </Button>

        {result && (
          <Card className="bg-zinc-900 mt-8 p-6 w-full max-w-2xl mx-auto text-left">
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Risultato</h2>
            <p className="text-lg font-semibold">Overall: {result.overall.toFixed(2)}</p>

            <div className="mt-4">
              {(Object.entries(result.subgrades) as [string, number][])?.map(([key, val]) => (
                <GradeBar key={key} label={key} value={val} />
              ))}
            </div>

            <div className="mt-6 border-t border-gray-700 pt-4">
              <h3 className="text-lg font-bold text-yellow-400">
                Overall Grade: {result.overall.toFixed(2)}
              </h3>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400">Diagnostica:</p>
              {result.diagnostics.length > 0 ? (
                <ul className="list-disc ml-6 text-sm">
                  {result.diagnostics.map((d: string) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-green-400">Nessuna anomalia rilevata ✅</p>
              )}
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Sharpness: {result.analysisMeta.sharpness.toFixed(2)} | Glare: {result.analysisMeta.glare.toFixed(2)} | Skew: {result.analysisMeta.skew.toFixed(2)}
            </div>

            {/* Metadati carta per salvataggio */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Set (es. Base Set)"
                value={meta.setName}
                onChange={(e) => setMeta({ ...meta, setName: e.target.value })}
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white"
              />
              <input
                type="text"
                placeholder="Nome carta (es. Pikachu)"
                value={meta.name}
                onChange={(e) => setMeta({ ...meta, name: e.target.value })}
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white"
              />
              <select
                value={meta.condition}
                onChange={(e) => setMeta({ ...meta, condition: e.target.value })}
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white"
              >
                <option value="NM">NM</option>
                <option value="LP">LP</option>
                <option value="MP">MP</option>
                <option value="HP">HP</option>
                <option value="DMG">DMG</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                onClick={handleConfirm}
                disabled={saving}
                className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-xl"
              >
                {saving ? "Salvataggio..." : "Aggiungi alla collezione"}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
