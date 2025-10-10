"use client";

import { useState } from "react";
import Image from "next/image";
import type { GradeLensAd, GradeLensResult } from "@/types/gradelens";

export default function GradeLensPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GradeLensResult | null>(null);
  const [ad, setAd] = useState<GradeLensAd | null>(null);
  const [error, setError] = useState("");

  const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://funkard-api.onrender.com";

  const handleAnalyze = async () => {
    if (!imageUrl.trim()) {
      setError("Inserisci l’URL di un’immagine di carta valida.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

  try {
      // 1️⃣ Mostra banner pubblicitario
  const adRes = await fetch(`${apiBase}/api/ads/gradelens`);
  const adJson = (await adRes.json()) as GradeLensAd;
  setAd(adJson);

      // 2️⃣ Chiamata al backend per l’analisi
      const res = await fetch(`${apiBase}/api/gradelens`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl, adShown: true }),
      });

      if (!res.ok) throw new Error("Errore durante l’analisi");
      const data = (await res.json()) as GradeLensResult;
      setResult(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Errore imprevisto";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-funkard-black text-white p-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-funkard-yellow">GradeLens (Beta)</h1>
        <p className="text-white/70">
          Analizza la tua carta in pochi secondi con l’AI gratuita. 
          L’analisi rimane disponibile per 48 ore.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="text"
            placeholder="URL immagine della carta"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-white/10 text-white w-full"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-5 py-2 bg-funkard-yellow text-black font-bold rounded-lg hover:opacity-90 disabled:opacity-40 transition"
          >
            {loading ? "Analisi in corso..." : "Analizza"}
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {result && (
          <div className="mt-8 bg-neutral-900 border border-white/10 rounded-xl p-6 space-y-4 text-left">
            <h2 className="text-xl font-semibold text-funkard-yellow">Risultato Analisi</h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Image
                src={result.imageUrl}
                alt="Card"
                width={192}
                height={256}
                className="w-48 h-64 object-cover rounded-lg border border-white/10"
              />
              <div className="flex-1 space-y-2">
                <p><b>Grade complessivo:</b> {result.grade.toFixed(1)} / 10</p>
                <p><b>Centratura:</b> {result.centering}</p>
                <p><b>Bordi:</b> {result.edges}</p>
                <p><b>Angoli:</b> {result.corners}</p>
                <p><b>Superficie:</b> {result.surface}</p>
                <p><b>Valore stimato:</b> {result.valueLow}–{result.valueHigh} {result.currency}</p>
                <p className="text-xs text-white/60 italic">{result.notes}</p>
                <p className="text-xs text-white/40">Analisi valida fino al: {new Date(result.expiresAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        {ad && (
          <div className="mt-8 bg-neutral-800 rounded-xl p-4 text-left border border-white/10">
            <h3 className="text-sm text-white/60 mb-2">Pubblicità sponsorizzata</h3>
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ad.imageUrl} alt="ad" className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <p className="font-semibold">{ad.title}</p>
                <a
                  href={ad.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-funkard-yellow hover:underline text-sm"
                >
                  {ad.ctaText} →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
