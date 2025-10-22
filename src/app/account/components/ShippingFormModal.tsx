'use client';

import { useState, useEffect } from 'react';

export default function ShippingFormModal({
  isOpen,
  onClose,
  onSubmit,
  editData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  editData?: any;
}) {
  const [form, setForm] = useState({
    fullName: '',
    addressLine: '',
    city: '',
    postalCode: '',
    country: '',
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">
          {editData ? 'Modifica indirizzo' : 'Aggiungi indirizzo'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            placeholder="Nome completo"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 outline-none"
          />
          <input
            name="addressLine"
            placeholder="Indirizzo"
            value={form.addressLine}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg"
          />
          <input
            name="city"
            placeholder="Città"
            value={form.city}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg"
          />
          <input
            name="postalCode"
            placeholder="CAP"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg"
          />
          <input
            name="country"
            placeholder="Paese"
            value={form.country}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-funkard-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              {editData ? 'Aggiorna' : 'Salva'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
