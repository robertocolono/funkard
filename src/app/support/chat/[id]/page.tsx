'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { fetchTicketById, sendSupportMessage, reopenTicket } from '@/lib/funkardApi';
import { ArrowLeft, Send, RefreshCw, WifiOff, Wifi } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function SupportChatPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [pollingActive, setPollingActive] = useState(true);

  // 🔄 Carica ticket
  const loadTicket = useCallback(async () => {
    if (!isOnline) return;
    try {
      const data = await fetchTicketById(id as string);
      setTicket(data);
      setMessages(data.messages || []);
    } catch (e) {
      console.error(e);
    }
  }, [id, isOnline]);

  // 🧠 Polling intelligente
  useEffect(() => {
    if (!pollingActive || !isOnline) return;

    const interval = setInterval(async () => {
      try {
        const data = await fetchTicketById(id as string);

        const newMessages = data.messages || [];
        const prevCount = messages.length;
        const newCount = newMessages.length;

        // Se è arrivato un nuovo messaggio
        if (newCount > prevCount) {
          const lastMessage = newMessages[newMessages.length - 1];
          const fromAdmin = lastMessage.fromAdmin;

          // ✅ Aggiorna stato
          setMessages(newMessages);
          setTicket(data);

          // 🔔 Mostra toast solo se è dell'admin
          if (fromAdmin) {
            toast.success("Nuovo messaggio dal supporto 💬", {
              style: { background: "#1c1c1c", color: "#fff" },
            });

            // 🔊 Suono (opzionale)
            try {
              const audio = new Audio("/sounds/notification.mp3");
              audio.volume = 0.4;
              audio.play().catch(() => {});
            } catch (e) {
              // Ignora errori audio
            }
          }
        } else if (data.status !== ticket?.status) {
          // Aggiorna solo se cambia stato
          setTicket(data);
        }

        // Ferma polling se chiuso
        if (['RESOLVED', 'CLOSED'].includes(data.status)) {
          clearInterval(interval);
          setPollingActive(false);
        }
      } catch (e) {
        console.error('Polling error', e);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [id, messages.length, ticket?.status, pollingActive, isOnline]);

  // 🌐 Rilevamento connessione
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setPollingActive(true);
      loadTicket();
    };
    const handleOffline = () => {
      setIsOnline(false);
      setPollingActive(false);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [loadTicket]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    setLoading(true);
    try {
      await sendSupportMessage(id as string, newMessage, 'user');
      setNewMessage('');
      await loadTicket();
    } catch (e) {
      console.error(e);
      alert('Errore nell\'invio del messaggio');
    } finally {
      setLoading(false);
    }
  };

  const handleReopen = async () => {
    try {
      await reopenTicket(id as string);
      toast.success('Ticket riaperto ✅');
      await loadTicket();
      setPollingActive(true);
    } catch {
      toast.error('Errore nella riapertura');
    }
  };

  if (!ticket)
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div>Caricamento...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-6 relative">
        {/* Stato connessione */}
        {!isOnline && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs">
            <WifiOff className="w-3 h-3" /> Offline – riconnessione automatica...
          </div>
        )}
        {isOnline && !pollingActive && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs">
            <Wifi className="w-3 h-3" /> Online
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/support" className="flex items-center text-gray-400 hover:text-yellow-400">
            <ArrowLeft className="w-4 h-4 mr-2" /> Indietro
          </Link>
          <div className="text-sm text-gray-500">
            Stato: <span className="font-medium text-yellow-400">{ticket.status}</span>
          </div>
        </div>

        {/* Titolo */}
        <h1 className="text-2xl font-semibold mb-2">{ticket.subject}</h1>
        <p className="text-gray-400 mb-6">Ticket ID: {ticket.id}</p>

        {/* Messaggi */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4 max-h-[60vh] overflow-y-auto space-y-3">
          {messages.length === 0 && (
            <p className="text-gray-500 text-center py-10">Nessun messaggio ancora</p>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg ${
                msg.fromAdmin
                  ? 'bg-zinc-800 text-gray-200 self-start'
                  : 'bg-yellow-500/20 text-yellow-300 self-end'
              }`}
            >
              <p className="text-sm">{msg.message}</p>
              <p className="text-[10px] text-gray-500 mt-1">
                {new Date(msg.createdAt).toLocaleString('it-IT')}
              </p>
            </div>
          ))}
        </div>

        {/* Campo messaggio */}
        {ticket.status !== 'RESOLVED' && ticket.status !== 'CLOSED' ? (
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Scrivi un messaggio..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={handleSend}
              disabled={loading || !isOnline}
              className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg px-4 py-3 flex items-center gap-2 font-semibold disabled:opacity-50"
            >
              <Send className="w-4 h-4" /> Invia
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-gray-500 mb-3">🔒 Questo ticket è stato chiuso o risolto.</p>
            <button
              onClick={handleReopen}
              className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" /> Riapri ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}