'use client';

import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useParams } from 'next/navigation';
import { fetchTicketById } from '@/lib/funkardApi';
import toast from 'react-hot-toast';

export default function SupportChatPage() {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ticket, setTicket] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');
  const [client, setClient] = useState<Client | null>(null);

  // 🔄 Carica ticket iniziale
  useEffect(() => {
    const loadTicket = async () => {
      try {
        const data = await fetchTicketById(id as string);
        setTicket(data);
      } catch (err) {
        console.error('Errore caricamento ticket:', err);
        toast.error('Errore nel caricamento del ticket');
      }
    };
    loadTicket();
  }, [id]);

  // ⚡ WebSocket Setup
  useEffect(() => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws`);
    const stompClient = new Client({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      webSocketFactory: () => socket as any,
      reconnectDelay: 5000,
      onConnect: () => {
        stompClient.subscribe(`/topic/support/${id}`, (message) => {
          const data = JSON.parse(message.body);

          // Se contiene content → è un messaggio
          if (data.content) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setTicket((prev: any) =>
              prev ? { ...prev, messages: [...prev.messages, data] } : prev
            );
          } else {
            // Altrimenti è un aggiornamento ticket (status, ecc.)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setTicket((prev: any) => ({ ...prev, ...data }));
          }

          // 🎯 Notifiche toast per eventi specifici
          if (data.event === "NEW_MESSAGE") {
            toast.success(`💬 Nuova risposta al ticket "${data.subject}"`);
          }
          if (data.event === "RESOLVED") {
            toast.success(`✅ Il ticket "${data.subject}" è stato risolto`);
          }
          if (data.event === "REOPENED") {
            toast.success(`🔄 Il ticket "${data.subject}" è stato riaperto`);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setTicket((prev: any) => ({ ...prev, status: "OPEN" }));
          }
          // ⚫ Ignora CLOSED: non serve mostrare nulla
        });
      },
    });

    stompClient.activate();
    setClient(stompClient);
    return () => {
      stompClient.deactivate();
    };
  }, [id]);

  // ✉️ Invia nuovo messaggio
  const handleSend = () => {
    if (!newMessage.trim() || !client) return;
    client.publish({
      destination: `/app/support/${id}/send`,
      body: JSON.stringify({
        sender: 'user',
        content: newMessage.trim(),
      }),
    });
    setNewMessage('');
  };

  // 🔄 Riapri ticket
  const reopenTicket = async (ticketId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/${ticketId}/reopen`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Errore riapertura ticket");

      const updated = await res.json();
      toast.success(`🔄 Ticket "${updated.subject}" riaperto con successo`);
      setTicket(updated); // aggiorna stato locale
    } catch (err) {
      console.error(err);
      toast.error("Impossibile riaprire il ticket");
    }
  };

  if (!ticket) return <div className="p-6 text-gray-400">Caricamento...</div>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <h1 className="text-2xl font-semibold mb-4">{ticket.subject}</h1>
      <p className="text-sm mb-4">
        Stato: <span className="text-yellow-400">{ticket.status}</span>
      </p>

      {/* Banner per ticket risolti */}
      {ticket.status === "RESOLVED" && (
        <div className="mt-4 bg-green-950/40 border border-green-800 rounded-xl p-4 flex flex-col items-center text-center">
          <p className="text-green-400 mb-2">✅ Questo ticket è stato risolto.</p>
          <button
            onClick={() => reopenTicket(ticket.id)}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition"
          >
            Riapri ticket
          </button>
        </div>
      )}

      <div className="space-y-2 mb-4">
        {ticket.messages?.map((msg: any, i: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
          <div
            key={i}
            className={`p-3 rounded-lg max-w-lg ${
              msg.sender === 'admin'
                ? 'bg-yellow-500/10 border border-yellow-500/40 ml-auto text-yellow-300'
                : 'bg-zinc-800 border border-zinc-700 text-white'
            }`}
          >
            <p className="text-sm">{msg.content}</p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(msg.createdAt).toLocaleString('it-IT')}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Scrivi un messaggio..."
          className="flex-1 bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 rounded-lg"
        >
          Invia
        </button>
      </div>
    </div>
  );
}