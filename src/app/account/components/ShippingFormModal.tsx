'use client';

import { useState, useEffect } from 'react';
import { validateAddressForm } from '@/lib/validateAddressForm';
import { getPostalCodePlaceholder } from '@/lib/getPostalCodePlaceholder';

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); // pulisce errore
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAddressForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // blocca invio se non valido
    }
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
          {['fullName', 'addressLine', 'city', 'postalCode', 'country'].map((field) => (
            <div key={field}>
              <input
                name={field}
                placeholder={
                  field === 'fullName'
                    ? 'Nome completo'
                    : field === 'addressLine'
                    ? 'Indirizzo'
                    : field === 'city'
                    ? 'Città'
                    : field === 'postalCode'
                    ? getPostalCodePlaceholder(form.country)
                    : 'Paese'
                }
                value={(form as any)[field]}
                onChange={handleChange}
                className={`w-full p-3 bg-zinc-800 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 outline-none ${
                  errors[field]
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-zinc-700'
                }`}
              />
              {errors[field] && (
                <p className="text-xs text-red-400 mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

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
