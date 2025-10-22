"use client";
import { useState } from "react";
import { updateUserProfile } from "@/lib/funkardApi";

export default function ProfileTab({ user }: { user: any }) {
  const [form, setForm] = useState(user || {});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateUserProfile(form);
      alert("Profilo aggiornato con successo!");
    } catch {
      alert("Errore durante il salvataggio");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p>Caricamento profilo...</p>;

  return (
    <div className="space-y-4">
      <input
        name="name"
        value={form.name || ""}
        onChange={handleChange}
        placeholder="Nome completo"
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white"
      />
      <input
        name="email"
        value={form.email || ""}
        onChange={handleChange}
        placeholder="Email"
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white"
        disabled
      />
      <select
        name="currency"
        value={form.currency || "EUR"}
        onChange={handleChange}
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white"
      >
        <option value="EUR">Euro (€)</option>
        <option value="USD">Dollaro ($)</option>
        <option value="GBP">Sterlina (£)</option>
        <option value="JPY">Yen (¥)</option>
      </select>

      <select
        name="theme"
        value={form.theme || "dark"}
        onChange={handleChange}
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white"
      >
        <option value="dark">Tema Scuro</option>
        <option value="light">Tema Chiaro</option>
      </select>

      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {loading ? "Salvataggio..." : "Salva modifiche"}
      </button>
    </div>
  );
}
