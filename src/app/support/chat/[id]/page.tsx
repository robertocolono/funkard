'use client';

import { useEffect, useState } from 'react';
import { fetchTicketById, sendSupportMessage } from '@/lib/funkardApi';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function TicketChatPage() {
  const { id } = useParams() as { id: string };
  const [ticket, setTicket] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const load = async () => {
    try {
      const data = await fetchTicketById(id);
      setTicket(data);
    } catch (err) {
      console.error('Errore caricamento ticket:', err);
      alert('Errore caricamento ticket');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  const handleSend = async () => {
    if (!message.trim()) return;
    setSending(true);
    try {
      await sendSupportMessage(id, message, ticket.email);
      setMessage('');
      await load(); // Ricarica per vedere il nuovo messaggio
    } catch (err) {
      console.error('Errore invio messaggio:', err);
      alert('Errore nell\'invio del messaggio');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Caricamento chat...</div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-red-400">Ticket non trovato</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 py-6 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <Link 
              href="/support" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors mb-2 inline-block"
            >
              ← Torna ai ticket
            </Link>
            <h1 className="text-2xl font-bold text-white">{ticket.subject}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                ticket.status === 'NEW' ? 'bg-red-500/20 text-red-400' :
                ticket.status === 'IN_PROGRESS' ? 'bg-yellow-500/20 text-yellow-400' :
                ticket.status === 'RESOLVED' ? 'bg-green-500/20 text-green-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {ticket.status}
              </span>
              <span className="text-sm text-gray-400">
                Creato il {new Date(ticket.createdAt).toLocaleDateString("it-IT")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-[500px] overflow-y-auto mb-4">
          {ticket.messages?.length ? (
            <div className="space-y-4">
              {ticket.messages.map((msg: any, i: number) => (
                <div key={i} className={`flex ${msg.sender === ticket.email ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${
                    msg.sender === ticket.email
                      ? 'bg-yellow-500 text-black'
                      : 'bg-zinc-800 text-white'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date(msg.createdAt).toLocaleString('it-IT')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400">
              <div className="text-2xl mb-2">💬</div>
              <p>Nessun messaggio in questa conversazione</p>
            </div>
          )}
        </div>

        {/* INPUT MESSAGGIO */}
        {ticket.status !== 'CLOSED' && (
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={sending || !message.trim()}
              className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {sending ? 'Invio...' : 'Invia'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
