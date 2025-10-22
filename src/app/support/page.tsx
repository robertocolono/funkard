'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createSupportTicket, fetchUserTickets } from '@/lib/funkardApi';
import { useSession } from '@/lib/context/SessionContext';

const STATUS_COLOR = {
  NEW: 'bg-red-600/20 text-red-400',
  IN_PROGRESS: 'bg-orange-500/20 text-orange-400',
  RESOLVED: 'bg-green-500/20 text-green-400',
  ARCHIVED: 'bg-neutral-600/20 text-neutral-400',
};

function useDebouncedValue(value: string, delay = 350) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default function SupportPage() {
  const router = useRouter();
  const { user } = useSession();

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [tickets, setTickets] = useState<Array<{
    id: string;
    subject: string;
    message: string;
    status: string;
    createdAt: string;
  }>>([]);
  const [loading, setLoading] = useState(false);

  // ricerca + filtri + ordinamento
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 300);
  const [selectedStatuses, setSelectedStatuses] = useState(['NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED']);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'status'>('newest');
  const [expanded, setExpanded] = useState<string | null>(null);

  // 🔴 nuove risposte
  const [unreadTickets, setUnreadTickets] = useState<Record<string, boolean>>({});

  // Auto-compila email se utente loggato
  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  // 🔁 carica stato salvato
  useEffect(() => {
    const stored = localStorage.getItem('funkard_unreadTickets');
    if (stored) setUnreadTickets(JSON.parse(stored));
  }, []);

  // 💾 salva stato
  useEffect(() => {
    localStorage.setItem('funkard_unreadTickets', JSON.stringify(unreadTickets));
  }, [unreadTickets]);

  const loadTickets = useCallback(async () => {
    if (!email) return;
    try {
      const data = await fetchUserTickets(email);
      setTickets(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      alert('Errore nel caricamento dei ticket');
    }
  }, [email]);

  const handleSubmit = async () => {
    if (!email || !subject || !message) {
      alert('Compila tutti i campi');
      return;
    }
    setLoading(true);
    try {
      await createSupportTicket({ email, subject, message });
      alert('Ticket inviato ✅ Riceverai risposta a breve.');
      setSubject('');
      setMessage('');
      await loadTickets();
    } catch {
      alert("Errore durante l'invio");
    } finally {
      setLoading(false);
    }
  };

  // Auth

  // 🔄 Polling automatico (light)
  useEffect(() => {
    if (!email) return;
    const interval = setInterval(() => {
      loadTickets();
    }, 30000); // ogni 30 secondi
    return () => clearInterval(interval);
  }, [email, loadTickets]);

  useEffect(() => {
    if (email && email.length > 5 && email.includes('@')) loadTickets();
  }, [email, loadTickets]);

  // SSE gestito dal NotificationContext globale

  const filteredSorted = useMemo(() => {
    const text = debouncedSearch.trim().toLowerCase();
    let list = tickets.filter(t =>
      selectedStatuses.includes(t.status) &&
      (text.length === 0 ||
        t.subject?.toLowerCase().includes(text) ||
        t.message?.toLowerCase().includes(text))
    );

    if (sortBy === 'newest') {
      list = list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    } else if (sortBy === 'oldest') {
      list = list.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
    } else if (sortBy === 'status') {
      const order = ['NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED'];
      list = list.sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status));
    }
    return list;
  }, [tickets, debouncedSearch, selectedStatuses, sortBy]);

  const toggleStatus = (s: string) => {
    setSelectedStatuses(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };


  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">💬 Supporto Funkard</h1>
            <p className="text-gray-400">Apri un ticket o gestisci le tue richieste.</p>
          </div>
        </div>

        {/* Barra strumenti */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Cerca per oggetto o contenuto…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="flex flex-wrap gap-2">
              {['NEW','IN_PROGRESS','RESOLVED','ARCHIVED'].map(s => {
                const active = selectedStatuses.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggleStatus(s)}
                    className={`px-3 py-2 rounded-lg text-sm border transition
                      ${active ? 'border-yellow-500 text-yellow-300 bg-yellow-500/10' : 'border-zinc-700 text-gray-400 hover:text-gray-200'}`}
                    title={s}
                  >
                    {s.replace('_', ' ')}
                  </button>
                );
              })}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'status')}
              className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-sm"
            >
              <option value="newest">Più recenti</option>
              <option value="oldest">Meno recenti</option>
              <option value="status">Per stato</option>
            </select>
          </div>
        </div>

        {/* Form nuovo ticket */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Apri un nuovo ticket</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Oggetto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Descrivi il problema o la richiesta..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-gray-500 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {loading ? 'Invio...' : 'Invia richiesta'}
            </button>
          </div>
        </div>

        {/* Lista ticket */}
        {filteredSorted.length > 0 ? (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">I tuoi ticket</h2>
            {filteredSorted.map((t) => {
              const open = expanded === t.id;
              const unread = unreadTickets[t.id];

              return (
                <div key={t.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => {
                      setExpanded(open ? null : t.id);
                      setUnreadTickets(prev => ({ ...prev, [t.id]: false }));
                    }}
                    className="w-full text-left px-4 py-4 hover:bg-zinc-900/60 transition flex items-start gap-3"
                    aria-expanded={open}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-medium flex items-center gap-2">
                          {t.subject || '(Senza oggetto)'}
                          {unread && (
                            <span className="ml-1 inline-block w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" title="Nuova risposta" />
                          )}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLOR[t.status as keyof typeof STATUS_COLOR] || 'bg-gray-500/20 text-gray-400'}`}>
                          {t.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-1 mt-1">{t.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{new Date(t.createdAt).toLocaleString('it-IT')}</p>
                    </div>
                  </button>

                  {open && (
                    <div className="px-4 pb-4 pt-2 border-t border-zinc-800">
                      <div className="text-sm text-gray-300 whitespace-pre-line">{t.message}</div>
                      <div className="mt-4 flex items-center gap-3">
                        <Link
                          href={`/support/chat/${t.id}`}
                          className="px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-yellow-500/50 transition text-sm"
                        >
                          Apri chat / Dettagli →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-400">Nessun ticket trovato.</div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/support/history"
            className="text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Vedi storico ticket chiusi →
          </Link>
        </div>
      </div>
    </div>
  );
}