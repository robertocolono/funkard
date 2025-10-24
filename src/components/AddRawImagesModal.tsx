"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AddRawImagesModalProps {
  cardId: string;
  onSuccess?: () => void;
}

export default function AddRawImagesModal({ cardId, onSuccess }: AddRawImagesModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState({} as { [key: string]: File | null });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fields = [
    { name: "topLeftImage", label: "Angolo Superiore Sinistro" },
    { name: "topRightImage", label: "Angolo Superiore Destro" },
    { name: "bottomLeftImage", label: "Angolo Inferiore Sinistro" },
    { name: "bottomRightImage", label: "Angolo Inferiore Destro" },
    { name: "edgeTopImage", label: "Bordo Superiore" },
    { name: "edgeBottomImage", label: "Bordo Inferiore" },
    { name: "edgeLeftImage", label: "Bordo Sinistro" },
    { name: "edgeRightImage", label: "Bordo Destro" },
  ];

  const handleFileChange = (field: string, file: File | null) => {
    setFiles((prev: any) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    try {
      const formData = new FormData();
      Object.entries(files).forEach(([key, file]: [string, any]) => {
        if (file) formData.append(key, file);
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://funkard-api.onrender.com"}/api/usercards/${cardId}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setMessage("✅ Immagini RAW aggiunte con successo!");
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setMessage("❌ Errore durante il caricamento delle immagini RAW.");
    } finally {
      setLoading(false);
      setTimeout(() => setIsOpen(false), 1500);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
      >
        + Aggiungi Dettagli RAW
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-lg text-white relative">
            <h2 className="text-xl font-bold mb-4 text-center">📸 Aggiungi Dettagli RAW</h2>
            <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-1">
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col">
                  <label className="text-sm mb-1 text-zinc-400">{f.label}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(f.name, e.target.files?.[0] || null)}
                    className="bg-zinc-800 border border-zinc-700 rounded-md p-2 text-sm file:mr-3 file:py-1 file:px-2 file:border-0 file:rounded-md file:bg-zinc-700 file:text-zinc-200 hover:file:bg-zinc-600"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 gap-3">
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-zinc-700 hover:bg-zinc-600 flex-1"
                type="button"
              >
                Chiudi
              </Button>
              <Button
                disabled={loading}
                onClick={handleSubmit}
                className="bg-yellow-500 hover:bg-yellow-600 text-black flex-1"
                type="button"
              >
                {loading ? "Caricamento..." : "Salva"}
              </Button>
            </div>
            {message && (
              <p className="text-center mt-4 text-sm text-zinc-400 min-h-[20px]">{message}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
