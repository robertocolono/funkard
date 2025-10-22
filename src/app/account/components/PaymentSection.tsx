'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Star, CreditCard } from 'lucide-react';
import PaymentFormModal from './PaymentFormModal';
import { 
  fetchPaymentMethods, 
  addPaymentMethod, 
  deletePaymentMethod, 
  setDefaultPaymentMethod 
} from '@/lib/funkardApi';

interface PaymentMethod {
  id: string;
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  brand: 'VISA' | 'MASTERCARD' | 'AMEX' | 'ALTRO';
  isDefault?: boolean;
}

export default function PaymentSection() {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carica metodi al mount
  useEffect(() => {
    loadMethods();
  }, []);

  const loadMethods = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPaymentMethods();
      setMethods(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel caricamento');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (data: PaymentMethod) => {
    try {
      const newMethod = await addPaymentMethod(data);
      setMethods(prev => [...prev, newMethod]);
      setIsModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'aggiunta');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Eliminare questo metodo di pagamento?')) {
      try {
        await deletePaymentMethod(id);
        setMethods(prev => prev.filter(m => m.id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore nell\'eliminazione');
      }
    }
  };

  const setDefault = async (id: string) => {
    try {
      await setDefaultPaymentMethod(id);
      setMethods(prev =>
        prev.map(m => ({ ...m, isDefault: m.id === id }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'impostazione predefinito');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Metodi di pagamento</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-funkard-yellow text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
        >
          <Plus size={18} /> Aggiungi metodo
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
          {error}
          <button 
            onClick={loadMethods}
            className="ml-2 underline hover:no-underline"
          >
            Riprova
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-funkard-yellow"></div>
          <span className="ml-2 text-zinc-500">Caricamento metodi...</span>
        </div>
      ) : methods.length === 0 ? (
        <p className="text-sm text-zinc-500">
          Nessun metodo salvato. Aggiungine uno per iniziare.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {methods.map((method) => (
              <motion.div
                key={method.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`border rounded-xl p-4 flex justify-between items-center transition-colors ${
                  method.isDefault
                    ? 'border-funkard-yellow bg-yellow-50 dark:bg-yellow-950/10'
                    : 'border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard className="text-zinc-400" size={18} />
                    <span className="font-semibold">{method.brand}</span>
                  </div>
                  <p className="text-sm text-zinc-500">
                    •••• •••• •••• {method.cardNumber.slice(-4)}
                  </p>
                  <p className="text-xs text-zinc-500">
                    Scadenza: {method.expiryDate}
                  </p>
                  {method.isDefault && (
                    <p className="text-xs text-funkard-yellow font-medium mt-1">
                      Metodo predefinito
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <button
                    onClick={() => handleDelete(method.id)}
                    className="text-zinc-400 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button
                    onClick={() => setDefault(method.id)}
                    className={`text-zinc-400 hover:text-yellow-500 transition ${
                      method.isDefault ? 'text-funkard-yellow' : ''
                    }`}
                  >
                    <Star size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {isModalOpen && (
        <PaymentFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAdd}
        />
      )}
    </div>
  );
}
