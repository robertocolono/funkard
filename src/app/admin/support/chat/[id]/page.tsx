'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Loader2, ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://funkard-backend.onrender.com';

interface Message {
  id: number;
  sender: string;
  content: string;
  createdAt: string;
}

interface Ticket {
  id: number;
  subject: string;
  status: string;
  createdAt: string;
  messages: Message[];
}

export default function AdminTicketChatPage() {
  const { id } = useParams();
  const router = useRouter();
  const [ticket, setTicket] = useState(null as Ticket | null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [client, setClient] = useState(null as Client | null);

  const fetchTicket = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/support/${id}`, {
        headers: {
          'X-Admin-Token': localStorage.getItem('funkard_admin_token') || '',
        },
      });
      if (!res.ok) throw new Error('Errore nel caricamento del ticket');
      const data = await res.json();
      setTicket(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setSending(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/support/${id}/reply`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Admin-Token': localStorage.getItem('funkard_admin_token') || '',
        },
        body: JSON.stringify({
          message: message,
        }),
      });
      if (!res.ok) throw new Error('Errore nell\'invio del messaggio');
      
      // Publish message via WebSocket for real-time updates
      if (client && client.connected) {
        client.publish({
          destination: `/app/support/${id}/send`,
          body: JSON.stringify({ sender: 'admin', content: message }),
        });
      }
      
      setMessage('');
      await fetchTicket();
    } catch (err) {
      console.error(err);
      alert('Errore durante l\'invio del messaggio');
    } finally {
      setSending(false);
    }
  };

  // WebSocket connection for real-time chat
  useEffect(() => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws`);
    const client = new Client({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      webSocketFactory: () => socket as any,
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe(`/topic/support/${id}`, (message) => {
          const data = JSON.parse(message.body);

          if (data.content) {
            // È un messaggio di chat
            setTicket((prev: any) => prev ? ({ ...prev, messages: [...prev.messages, data] }) : prev);
          } else {
            // È un aggiornamento del ticket
            setTicket((prev: any) => prev ? ({ ...prev, ...data }) : prev);
          }
        });
      },
    });

    client.activate();
    setClient(client);

    return () => {
      client.deactivate();
    };
  }, [id]);

  useEffect(() => {
    fetchTicket();
  }, [id, fetchTicket]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-gray-400 flex items-center justify-center">
        <Loader2 className="animate-spin mr-2" size={18} /> Caricamento conversazione...
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen bg-zinc-950 text-gray-400 flex flex-col items-center justify-center">
        <p className="mb-4">❌ Ticket non trovato</p>
        <Button onClick={() => router.push('/admin/support')} variant="outline">
          Torna al supporto
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* HEADER */}
      <div className="border-b border-zinc-800 px-6 py-4 flex items-center gap-3 bg-zinc-900">
        <Button
          onClick={() => router.push('/admin/support')}
          variant="ghost"
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft size={18} />
        </Button>
        <div>
          <h1 className="text-lg font-semibold text-white">{ticket.subject}</h1>
          <p className="text-xs text-gray-500">
            Stato: {ticket.status} • {new Date(ticket.createdAt).toLocaleString('it-IT')}
          </p>
        </div>
      </div>

      {/* MESSAGGI */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {ticket.messages.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Nessun messaggio ancora.</p>
        ) : (
          ticket.messages.map((msg: any) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === 'admin' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === 'admin'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-zinc-800 text-gray-100 border border-zinc-700'
                }`}
              >
                <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                <span className="text-xs text-gray-400 block mt-1">
                  {new Date(msg.createdAt).toLocaleTimeString('it-IT', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* INPUT */}
      <div className="border-t border-zinc-800 p-4 bg-zinc-900 flex items-center gap-3">
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <Button
          onClick={sendMessage}
          disabled={sending || !message.trim()}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg"
        >
          {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </Button>
      </div>
    </div>
  );
}
