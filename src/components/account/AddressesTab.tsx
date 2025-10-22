"use client";

import { useEffect, useState } from "react";
import { getUserAddresses, addUserAddress, deleteUserAddress } from "@/lib/funkardApi";

export default function AddressesTab() {
  const [addresses, setAddresses] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await getUserAddresses();
      setAddresses(data);
    } catch {
      alert("Errore nel caricamento degli indirizzi");
    }
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      await addUserAddress(form);
      setForm({});
      await load();
    } catch {
      alert("Errore durante il salvataggio");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Eliminare questo indirizzo?")) return;
    await deleteUserAddress(id);
    await load();
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-3">
        <input placeholder="Nome completo" onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
        <input placeholder="Via" onChange={(e) => setForm({ ...form, street: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
        <input placeholder="Città" onChange={(e) => setForm({ ...form, city: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
        <input placeholder="Provincia" onChange={(e) => setForm({ ...form, state: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
        <input placeholder="CAP" onChange={(e) => setForm({ ...form, postalCode: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
        <input placeholder="Paese" onChange={(e) => setForm({ ...form, country: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
        <input placeholder="Telefono" onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 text-white" />
      </div>
      <button onClick={handleAdd} disabled={loading} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
        {loading ? "Salvataggio..." : "Aggiungi indirizzo"}
      </button>

      <div className="space-y-3">
        {addresses.map((a) => (
          <div key={a.id} className="p-4 bg-zinc-900 border border-zinc-700 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-medium">{a.fullName}</p>
              <p className="text-gray-400 text-sm">{a.street}, {a.city} ({a.postalCode})</p>
            </div>
            <button onClick={() => handleDelete(a.id)} className="text-red-400 hover:text-red-300">Elimina</button>
          </div>
        ))}
      </div>
    </div>
  );
}
