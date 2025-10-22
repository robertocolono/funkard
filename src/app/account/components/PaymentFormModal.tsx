'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PaymentMethod {
  id?: string;
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  brand: 'VISA' | 'MASTERCARD' | 'AMEX' | 'ALTRO';
}

export default function PaymentFormModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PaymentMethod) => void;
}) {
  const [form, setForm] = useState<PaymentMethod>({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    brand: 'VISA',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.cardNumber.length < 12) return alert('Numero carta non valido');
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
          <h3 className="text-lg font-semibold">Aggiungi metodo di pagamento</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-700">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="cardHolder"
            placeholder="Nome intestatario"
            value={form.cardHolder}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
          />
          <input
            name="cardNumber"
            placeholder="Numero carta"
            value={form.cardNumber}
            onChange={handleChange}
            required
            maxLength={19}
            className="w-full p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              name="expiryDate"
              placeholder="MM/AA"
              value={form.expiryDate}
              onChange={handleChange}
              required
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
            />
            <select
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
            >
              <option value="VISA">VISA</option>
              <option value="MASTERCARD">MASTERCARD</option>
              <option value="AMEX">AMEX</option>
              <option value="ALTRO">ALTRO</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-funkard-yellow text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Salva metodo
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
