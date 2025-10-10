"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function GradeLensDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://funkard-api.onrender.com";

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiBase}/api/gradelens/${id}`);
        if (res.status === 410) {
          setError("Questa analisi è scaduta dopo 48 ore.");
          return;
        }
        if (!res.ok) throw new Error("Errore nel recupero dell’analisi.");
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Errore imprevisto.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Caricamento analisi...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white text-center p-6">
        <h1 className="text-2xl font-bold text-funkard-yellow mb-3">⚠️ Analisi non disponibile</h1>
        <p className="text-white/70 mb-6">{error}</p>
        <button
          onClick={() => router.push("/gradelens")}
          className="px-5 py-2 bg-funkard-yellow text-black font-bold rounded-lg hover:opacity-90 transition"
        >
          Nuova Analisi
        </button>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-funkard-black text-white p-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-funkard-yellow">Analisi GradeLens</h1>
        <p className="text-white/70">Risultato generato il {new Date(data.createdAt).toLocaleString()}</p>

        <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 space-y-4 text-left">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={data.imageUrl}
              alt="Card"
              className="w-48 h-64 object-cover rounded-lg border border-white/10"
            />
            <div className="flex-1 space-y-2">
              <p><b>Grade complessivo:</b> {data.grade.toFixed(1)} / 10</p>
              <p><b>Centratura:</b> {data.centering}</p>
              <p><b>Bordi:</b> {data.edges}</p>
              <p><b>Angoli:</b> {data.corners}</p>
              <p><b>Superficie:</b> {data.surface}</p>
              <p><b>Valore stimato:</b> {data.valueLow}–{data.valueHigh} {data.currency}</p>
              <p className="text-xs text-white/60 italic">{data.notes}</p>
              <p className="text-xs text-white/40">Analisi valida fino al: {new Date(data.expiresAt).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => router.push("/gradelens")}
            className="px-5 py-2 bg-funkard-yellow text-black font-bold rounded-lg hover:opacity-90 transition"
          >
            Nuova Analisi
          </button>
        </div>
      </div>
    </div>
  );
}
