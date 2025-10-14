"use client";
import { useState } from "react";
import { uploadImage } from "@/lib/uploadImage";

interface Props {
  onUploadComplete: (url: string) => void;
}

export default function CardImageUploader({ onUploadComplete }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const url = await uploadImage(file);
      setPreview(url);
      onUploadComplete(url);
    } catch (err) {
      console.error("Errore durante l'upload:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-400 p-6 rounded-2xl">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="cursor-pointer"
      />
      {loading && <p className="text-sm text-gray-500">Caricamento...</p>}
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="Anteprima"
          className="mt-3 w-48 h-48 object-cover rounded-lg border"
        />
      )}
    </div>
  );
}
