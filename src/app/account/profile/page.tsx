'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Loader2, User } from 'lucide-react';
import { toast } from 'sonner';

const CURRENCIES = [
  { code: 'EUR', label: 'Euro (€)' },
  { code: 'USD', label: 'US Dollar ($)' },
  { code: 'GBP', label: 'Pound (£)' },
  { code: 'JPY', label: 'Yen (¥)' },
  { code: 'CHF', label: 'Swiss Franc (CHF)' },
];

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', currency: 'EUR' });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('funkard_token')}` },
        });
        const data = await res.json();
        setForm({
          name: data.name || '',
          email: data.email || '',
          currency: data.currency || 'EUR',
        });
      } catch (err) {
        console.error('Errore caricamento profilo:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const handleSave = async () => {
    if (!form.name || !form.email) return toast.error('Compila tutti i campi');
    setSaving(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('funkard_token')}`,
        },
        body: JSON.stringify(form),
      });
      toast.success('Profilo aggiornato ✅');
    } catch (err) {
      console.error(err);
      toast.error('Errore durante il salvataggio');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <Loader2 className="animate-spin h-5 w-5 mr-2" /> Caricamento profilo...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-white">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <User className="h-5 w-5" /> Impostazioni Account
      </h1>

      <div className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div>
          <label className="text-sm text-gray-400">Nome</label>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Il tuo nome"
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Email</label>
          <Input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Indirizzo email"
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Valuta preferita</label>
          <Select
            value={form.currency}
            onValueChange={(value) => setForm({ ...form, currency: value })}
          >
            <SelectTrigger className="mt-1 bg-zinc-800 border-zinc-700">
              <SelectValue placeholder="Seleziona valuta" />
            </SelectTrigger>
            <SelectContent>
              {CURRENCIES.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="mt-6 w-full"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Salvataggio...' : 'Salva modifiche'}
        </Button>
      </div>
    </div>
  );
}
