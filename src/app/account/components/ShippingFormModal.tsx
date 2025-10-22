'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Address {
  id?: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

export default function ShippingFormModal({
  isOpen,
  onClose,
  onSubmit,
  defaultData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Address) => void;
  defaultData?: Address | null;
}) {
  const [form, setForm] = useState<Address>(
    defaultData || {
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      postalCode: '',
      country: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 w-full max-w-md shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {defaultData ? 'Modifica indirizzo' : 'Aggiungi indirizzo'}
          </h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-700">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="fullName"
            placeholder="Nome completo"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
          />
          <input
            name="addressLine1"
            placeholder="Indirizzo"
            value={form.addressLine1}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
          />
          <input
            name="addressLine2"
            placeholder="Seconda linea (opzionale)"
            value={form.addressLine2}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              name="city"
              placeholder="Città"
              value={form.city}
              onChange={handleChange}
              required
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
            />
            <input
              name="postalCode"
              placeholder="CAP"
              value={form.postalCode}
              onChange={handleChange}
              required
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
            />
          </div>
          <input
            name="country"
            placeholder="Paese"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
          />

          <button
            type="submit"
            className="w-full bg-funkard-yellow text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            {defaultData ? 'Salva modifiche' : 'Aggiungi indirizzo'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
