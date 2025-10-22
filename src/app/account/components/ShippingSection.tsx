'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import ShippingFormModal from './ShippingFormModal';
import { 
  getShippingAddresses, 
  addShippingAddress, 
  updateShippingAddress, 
  deleteShippingAddress, 
  setDefaultShippingAddress,
  type ShippingAddress 
} from '@/lib/funkardApi';

export default function ShippingSection() {
  const [addresses, setAddresses] = useState<ShippingAddress[]>([]);
  const [selected, setSelected] = useState<ShippingAddress | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carica indirizzi al mount
  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getShippingAddresses();
      setAddresses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel caricamento');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (data: Omit<ShippingAddress, 'id'>) => {
    try {
      const newAddress = await addShippingAddress(data);
      setAddresses(prev => [...prev, newAddress]);
      setIsModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'aggiunta');
    }
  };

  const handleUpdate = async (updated: ShippingAddress) => {
    try {
      const { id, ...updateData } = updated;
      const updatedAddress = await updateShippingAddress(id, updateData);
      setAddresses(prev =>
        prev.map(a => (a.id === updated.id ? updatedAddress : a))
      );
      setIsModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'aggiornamento');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Eliminare questo indirizzo?')) {
      try {
        await deleteShippingAddress(id);
        setAddresses(prev => prev.filter(a => a.id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore nell\'eliminazione');
      }
    }
  };

  const setDefault = async (id: string) => {
    try {
      await setDefaultShippingAddress(id);
      setAddresses(prev =>
        prev.map(a => ({ ...a, isDefault: a.id === id }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'impostazione predefinito');
    }
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

      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
          {error}
          <button 
            onClick={loadAddresses}
            className="ml-2 underline hover:no-underline"
          >
            Riprova
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-funkard-yellow"></div>
          <span className="ml-2 text-zinc-500">Caricamento indirizzi...</span>
        </div>
      ) : addresses.length === 0 ? (
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
