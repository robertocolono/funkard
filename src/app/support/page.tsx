'use client';

import { useState, useEffect } from 'react';
import { createSupportTicket, fetchUserTickets } from '@/lib/funkardApi';
import Link from 'next/link';

const STATUS_COLOR: Record<string, string> = {
  NEW: 'bg-red-600/20 text-red-400',
  IN_PROGRESS: 'bg-orange-500/20 text-orange-400',
  RESOLVED: 'bg-green-500/20 text-green-400',
  ARCHIVED: 'bg-neutral-600/20 text-neutral-400',
};

export default function SupportPage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTickets = async () => {
    if (!email) return;
    try {
      const data = await fetchUserTickets(email);
      setTickets(data);
    } catch (e) {
      console.error(e);
      setError('Errore nel caricamento dei ticket');
    }
  };

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
      alert('Errore durante l\'invio');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email.length > 5) loadTickets();
  }, [email]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">💬 Supporto Funkard</h1>
          <p className="text-gray-400">
            Hai bisogno di aiuto? Apri un ticket e il nostro team ti risponderà al più presto.
          </p>
        </div>

        {/* Form nuovo ticket */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Apri un nuovo ticket</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Oggetto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Descrivi il problema o la richiesta..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
        {tickets.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">I tuoi ticket</h2>
            {tickets.map((ticket) => (
              <Link key={ticket.id} href={`/support/chat/${ticket.id}`}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-yellow-500/40 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1">{ticket.subject}</h3>
                      <p className="text-sm text-gray-400 mb-2 line-clamp-2">{ticket.message}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(ticket.createdAt).toLocaleString('it-IT')}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLOR[ticket.status] || 'bg-gray-500/20 text-gray-400'}`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Link allo storico */}
        <div className="mt-8 text-center">
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