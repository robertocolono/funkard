'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import ShippingFormModal from './ShippingFormModal';

interface Address {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

export default function ShippingSection() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selected, setSelected] = useState<Address | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (data: Address) => {
    setAddresses(prev => [...prev, { ...data, id: crypto.randomUUID() }]);
    setIsModalOpen(false);
  };

  const handleUpdate = (updated: Address) => {
    setAddresses(prev =>
      prev.map(a => (a.id === updated.id ? updated : a))
    );
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Eliminare questo indirizzo?')) {
      setAddresses(prev => prev.filter(a => a.id !== id));
    }
  };

  const setDefault = (id: string) => {
    setAddresses(prev =>
      prev.map(a => ({ ...a, isDefault: a.id === id }))
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Indirizzi di spedizione</h2>
        <button
          onClick={() => { setSelected(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 bg-funkard-yellow text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
        >
          <Plus size={18} /> Aggiungi indirizzo
        </button>
      </div>

      {addresses.length === 0 ? (
        <p className="text-sm text-zinc-500">
          Nessun indirizzo salvato. Aggiungine uno per iniziare.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {addresses.map((addr) => (
              <motion.div
                key={addr.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`border rounded-xl p-4 transition-colors ${
                  addr.isDefault
                    ? 'border-funkard-yellow bg-yellow-50 dark:bg-yellow-950/10'
                    : 'border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{addr.fullName}</p>
                    <p className="text-sm text-zinc-500">
                      {addr.addressLine1}
                      {addr.addressLine2 && `, ${addr.addressLine2}`}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {addr.city}, {addr.postalCode}
                    </p>
                    <p className="text-sm text-zinc-500">{addr.country}</p>
                    {addr.isDefault && (
                      <p className="text-xs text-funkard-yellow font-medium mt-1">
                        Indirizzo predefinito
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 items-end">
                    <button
                      onClick={() => { setSelected(addr); setIsModalOpen(true); }}
                      className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(addr.id)}
                      className="text-zinc-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button
                      onClick={() => setDefault(addr.id)}
                      className={`text-zinc-400 hover:text-yellow-500 transition ${
                        addr.isDefault ? 'text-funkard-yellow' : ''
                      }`}
                    >
                      <Star size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {isModalOpen && (
        <ShippingFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={selected ? handleUpdate : handleAdd}
          defaultData={selected}
        />
      )}
    </div>
  );
}
