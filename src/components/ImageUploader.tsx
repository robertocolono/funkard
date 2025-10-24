"use client";
import { useState } from "react";
import { uploadImage } from "@/lib/uploadImage";

interface ImageUploaderProps {
  label?: string;
  onUpload?: (url: string) => void;
}

export default function ImageUploader({ label, onUpload }: ImageUploaderProps) {
  const [preview, setPreview] = useState(null as string | null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as string | null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    try {
      const url = await uploadImage(file);
      setPreview(url);
      onUpload?.(url);
      console.log("✅ File caricato:", url);
    } catch (err: unknown) {
      console.error("❌ Errore upload:", err);
      setError(err instanceof Error ? err.message : "Errore durante l'upload");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border border-white/10 rounded-xl bg-[#111] text-white w-full">
      {label && <p className="text-sm text-gray-300 self-start">{label}</p>}
      <input type="file" onChange={handleFileChange} accept="image/*" capture="environment" className="input-funkard" />
      {loading && <p>Caricamento in corso...</p>}
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="Anteprima"
          className="w-48 h-48 object-cover rounded-lg border border-white/10"
        />
      )}
    </div>
  );
}
