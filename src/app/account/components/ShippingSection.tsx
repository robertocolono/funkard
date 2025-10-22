'use client';

import { useState } from 'react';
import {
  fetchShippingAddresses,
  createShippingAddress,
  updateShippingAddress,
  deleteShippingAddress,
  setDefaultShippingAddress,
} from '@/lib/funkardApi';
import ShippingFormModal from './ShippingFormModal';

export default function ShippingSection({ data = [], onUpdate }: { data: any[]; onUpdate: () => void }) {
  const [addresses, setAddresses] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);

  const handleAddOrEdit = async (formData: any) => {
    if (editData) {
      await updateShippingAddress(editData.id, formData);
    } else {
      await createShippingAddress(formData);
    }
    await onUpdate();
    setIsModalOpen(false);
    setEditData(null);
  };

  const handleDelete = async (id: string) => {
    await deleteShippingAddress(id);
    await onUpdate();
  };

  const handleDefault = async (id: string) => {
    await setDefaultShippingAddress(id);
    await onUpdate();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Indirizzi di spedizione</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-funkard-yellow text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
        >
          Aggiungi indirizzo
        </button>
      </div>

      {addresses.length === 0 ? (
        <p className="text-sm text-zinc-500">Nessun indirizzo salvato.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {addresses.map((a) => (
            <div
              key={a.id}
              className={`border rounded-xl p-4 flex justify-between items-start ${
                a.isDefault ? 'border-funkard-yellow bg-yellow-50/10' : 'border-zinc-800'
              }`}
            >
              <div>
                <p className="font-semibold">{a.fullName}</p>
                <p className="text-sm text-zinc-400">{a.addressLine}</p>
                <p className="text-sm text-zinc-400">{a.city}, {a.postalCode}</p>
                <p className="text-sm text-zinc-400">{a.country}</p>
                {a.isDefault && (
                  <p className="text-xs text-funkard-yellow mt-1">Predefinito</p>
                )}
              </div>

              <div className="flex flex-col gap-2 text-right">
                <button
                  onClick={() => {
                    setEditData(a);
                    setIsModalOpen(true);
                  }}
                  className="text-zinc-400 hover:text-yellow-500 text-sm"
                >
                  Modifica
                </button>
                <button
                  onClick={() => handleDefault(a.id)}
                  className="text-zinc-400 hover:text-yellow-500 text-sm"
                >
                  Imposta
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="text-zinc-400 hover:text-red-500 text-sm"
                >
                  Elimina
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <ShippingFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditData(null);
          }}
          onSubmit={handleAddOrEdit}
          editData={editData}
        />
      )}
    </div>
  );
}
