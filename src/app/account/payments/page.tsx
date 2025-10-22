'use client';

import { useState } from 'react';
import { usePayments } from '@/lib/hooks/usePayments';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { CreditCard, Trash2, Edit2, Loader2 } from 'lucide-react';

export default function PaymentsPage() {
  const { payments, loading, addPayment, updatePayment, deletePayment } = usePayments();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ cardType: '', cardNumber: '', name: '', expiry: '', country: '' });

  const handleSave = async () => {
    if (!form.cardNumber || !form.expiry || !form.name) return alert('Compila tutti i campi');
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(form.expiry)) return alert('Formato scadenza non valido (MM/YY)');
    if (editId) await updatePayment(editId, form);
    else await addPayment(form);
    setOpen(false);
    setForm({ cardType: '', cardNumber: '', name: '', expiry: '', country: '' });
    setEditId(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <CreditCard className="h-5 w-5" /> Metodi di pagamento
        </h1>
        <Button onClick={() => setOpen(true)}>Aggiungi metodo</Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10 text-gray-400">
          <Loader2 className="h-5 w-5 animate-spin mr-2" /> Caricamento...
        </div>
      ) : payments.length === 0 ? (
        <p className="text-gray-400">Nessun metodo di pagamento salvato.</p>
      ) : (
        <div className="grid gap-4">
          {payments.map((p) => (
            <div key={p.id} className="border border-zinc-800 rounded-lg p-4 bg-zinc-900 flex justify-between items-center">
              <div>
                <p className="font-medium">{p.cardType} **** {p.last4}</p>
                <p className="text-gray-400 text-sm">{p.name} — Scadenza {p.expiry} — {p.country}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => { setForm(p as any); setEditId(p.id); setOpen(true); }}>
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => deletePayment(p.id)}>
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
            <DialogTitle>{editId ? 'Modifica metodo' : 'Nuovo metodo di pagamento'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <Input placeholder="Tipo carta (es. Visa, Mastercard)" value={form.cardType} onChange={(e) => setForm({ ...form, cardType: e.target.value })} />
            <Input placeholder="Numero carta" value={form.cardNumber} onChange={(e) => setForm({ ...form, cardNumber: e.target.value })} />
            <Input placeholder="Nome sulla carta" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Scadenza (MM/YY)" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} />
            <Input placeholder="Paese" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
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
