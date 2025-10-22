"use client";
import { useEffect, useState } from "react";
import { adminApi } from "@/lib/adminApi";
import Link from "next/link";

interface SupportTicket {
  id: string;
  subject: string;
  message: string;
  userId: string;
  status: "open" | "closed" | "pending";
  createdAt: string;
  updatedAt: string;
  replies?: Array<{
    id: string;
    message: string;
    isAdmin: boolean;
    createdAt: string;
  }>;
}

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reply, setReply] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await adminApi.getTickets();
        setTickets(data);
      } catch (err) {
        setError("Errore nel caricamento dei ticket");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const sendReply = async (ticketId: string) => {
    if (!reply.trim()) return;

    try {
      await adminApi.replyToTicket(ticketId, reply);
      setReply("");
      setReplyingTo(null);
      alert("Risposta inviata!");
      
      // Ricarica i ticket
      const updatedData = await adminApi.getTickets();
      setTickets(updatedData);
    } catch (err) {
      console.error(err);
      alert("Errore nell'invio della risposta");
    }
  };

  const closeTicket = async (ticketId: string) => {
    try {
      await adminApi.closeTicket(ticketId);
      alert("Ticket chiuso!");
      
      // Ricarica i ticket
      const updatedData = await adminApi.getTickets();
      setTickets(updatedData);
    } catch (err) {
      console.error(err);
      alert("Errore nella chiusura del ticket");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-400">Caricamento ticket...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">🎧 Support Clienti</h1>
        <p className="text-gray-400 text-sm">
          Gestisci i ticket di supporto e le segnalazioni degli utenti
        </p>
      </div>

      {tickets.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
          <div className="text-gray-400 mb-2">🎉</div>
          <div className="text-sm text-gray-400">Nessun ticket aperto.</div>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="p-6 border border-zinc-700 rounded-xl bg-zinc-900">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{ticket.subject}</h3>
                  <p className="text-sm text-gray-400">Da: {ticket.userId}</p>
                  <p className="text-xs text-gray-500">
                    Creato: {new Date(ticket.createdAt).toLocaleString("it-IT")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/support/chat/${ticket.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    💬 Chat
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    ticket.status === "open" 
                      ? "bg-green-900 text-green-300" 
                      : ticket.status === "closed"
                      ? "bg-gray-900 text-gray-300"
                      : "bg-yellow-900 text-yellow-300"
                  }`}>
                    {ticket.status === "open" ? "Aperto" : 
                     ticket.status === "closed" ? "Chiuso" : "In attesa"}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-300 text-sm leading-relaxed">{ticket.message}</p>
              </div>

              {/* REPLIES */}
              {ticket.replies && ticket.replies.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Risposte:</h4>
                  <div className="space-y-2">
                    {ticket.replies.map((reply) => (
                      <div key={reply.id} className={`p-3 rounded-lg ${
                        reply.isAdmin 
                          ? "bg-yellow-900/20 border border-yellow-700" 
                          : "bg-zinc-800"
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium">
                            {reply.isAdmin ? "👨‍💼 Admin" : "👤 Utente"}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(reply.createdAt).toLocaleString("it-IT")}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">{reply.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              {ticket.status === "open" && (
                <div className="border-t border-zinc-700 pt-4">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Risposta:
                    </label>
                    <textarea
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-funkard-yellow"
                      placeholder="Scrivi la tua risposta..."
                      value={replyingTo === ticket.id ? reply : ""}
                      onChange={(e) => {
                        setReply(e.target.value);
                        setReplyingTo(ticket.id);
                      }}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => sendReply(ticket.id)}
                      disabled={!reply.trim()}
                      className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Invia risposta
                    </button>
                    <button
                      onClick={() => closeTicket(ticket.id)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 text-sm font-medium"
                    >
                      Chiudi ticket
                    </button>
                  </div>
                </div>
              )}

              {ticket.status === "closed" && (
                <div className="text-sm text-gray-500">
                  Ticket chiuso il {new Date(ticket.updatedAt).toLocaleString("it-IT")}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500">
        <p>💡 <strong>Tip:</strong> I ticket vengono gestiti automaticamente:</p>
        <ul className="mt-1 ml-4 list-disc">
          <li>Invio email di risposta con EmailService</li>
          <li>Aggiornamento automatico stato ticket</li>
          <li>Chiusura manuale ticket</li>
          <li>Visualizzazione in tempo reale</li>
        </ul>
      </div>
    </div>
  );
}
