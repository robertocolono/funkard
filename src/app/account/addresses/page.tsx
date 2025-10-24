'use client';

import { useState } from 'react';
import { useAddresses } from '@/lib/hooks/useAddresses';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Loader2, Trash2, Edit2, MapPin } from 'lucide-react';

export default function AddressesPage() {
  const { addresses, loading, addAddress, updateAddress, deleteAddress } = useAddresses();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null as string | null);
  const [form, setForm] = useState({ name: '', street: '', city: '', zip: '', country: '' });

  const handleSave = async () => {
    if (!form.street || !form.city || !form.zip || !form.country) return alert('Compila tutti i campi');
    const zipRegex = /^[A-Za-z0-9\- ]{3,10}$/;
    if (!zipRegex.test(form.zip)) return alert('CAP non valido');
    if (editId) await updateAddress(editId, form);
    else await addAddress(form);
    setOpen(false);
    setForm({ name: '', street: '', city: '', zip: '', country: '' });
    setEditId(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2"><MapPin className="h-5 w-5" /> Indirizzi di spedizione</h1>
        <Button onClick={() => setOpen(true)}>Aggiungi indirizzo</Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10 text-gray-400">
          <Loader2 className="h-5 w-5 animate-spin mr-2" /> Caricamento...
        </div>
      ) : addresses.length === 0 ? (
        <p className="text-gray-400">Nessun indirizzo salvato.</p>
      ) : (
        <div className="grid gap-4">
          {addresses.map((a: any) => (
            <div key={a.id} className="border border-zinc-800 rounded-lg p-4 bg-zinc-900 flex justify-between items-center">
              <div>
                <p className="font-medium">{a.name || 'Senza nome'}</p>
                <p className="text-gray-400 text-sm">{a.street}, {a.city} ({a.zip}) - {a.country}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => { setForm(a); setEditId(a.id); setOpen(true); }}>
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => deleteAddress(a.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-zinc-950 text-white border border-zinc-800">
          <DialogHeader>
            <DialogTitle>{editId ? 'Modifica indirizzo' : 'Nuovo indirizzo'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <Input placeholder="Nome (opzionale)" value={form.name} onChange={(e: any) => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Via e numero civico" value={form.street} onChange={(e: any) => setForm({ ...form, street: e.target.value })} />
            <Input placeholder="Città" value={form.city} onChange={(e: any) => setForm({ ...form, city: e.target.value })} />
            <Input placeholder="CAP" value={form.zip} onChange={(e: any) => setForm({ ...form, zip: e.target.value })} />
            <Input placeholder="Paese" value={form.country} onChange={(e: any) => setForm({ ...form, country: e.target.value })} />
          </div>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setOpen(false)}>Annulla</Button>
            <Button onClick={handleSave}>{editId ? 'Salva modifiche' : 'Aggiungi'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
