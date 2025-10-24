'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const CURRENCIES = [
  { code: 'EUR', label: 'Euro (€)' },
  { code: 'USD', label: 'US Dollar ($)' },
  { code: 'GBP', label: 'Pound (£)' },
  { code: 'JPY', label: 'Yen (¥)' },
  { code: 'CHF', label: 'Swiss Franc (CHF)' },
];

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    currency: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password || !form.currency) {
      toast.error('Compila tutti i campi, inclusa la valuta.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      toast.success('Registrazione completata ✅');
      router.push('/login');
    } catch {
      toast.error('Errore durante la registrazione');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Crea il tuo account</h1>

        <div className="space-y-4">
          <Input
            placeholder="Nome completo"
            value={form.name}
            onChange={(e: any) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e: any) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e: any) => setForm({ ...form, password: e.target.value })}
          />

          <div>
            <label className="text-sm text-gray-400 mb-1 block">Valuta preferita</label>
            <Select
              value={form.currency}
              onValueChange={(v: any) => setForm({ ...form, currency: v })}
            >
              <SelectTrigger className="bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Seleziona una valuta" />
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
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Registrati'}
          </Button>
        </div>
      </div>
    </div>
  );
}
