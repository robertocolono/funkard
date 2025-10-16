"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SupportTicket } from "@/types/support";

export default function SupportHistoryDetailPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [ticket, setTicket] = useState<SupportTicket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const token = localStorage.getItem("funkard_token");
        if (!token) {
          router.push("/login");
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/tickets/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setTicket(data);
      } catch (err) {
        setError("Errore nel caricamento del ticket");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Caricamento ticket...</div>
      </div>
    );
  }

  if (error || !ticket) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-red-400">{error || "Ticket non trovato"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 py-6 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link 
                href="/support/history" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Torna allo storico
              </Link>
            </div>
            <h1 className="text-2xl font-bold">{ticket.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="px-2 py-1 rounded text-xs font-medium bg-gray-900 text-gray-300">
                Chiuso
              </span>
              <span className="text-sm text-gray-400">
                Creato il {new Date(ticket.createdAt).toLocaleDateString("it-IT")}
              </span>
              {ticket.closedAt && (
                <span className="text-sm text-gray-400">
                  • Chiuso il {new Date(ticket.closedAt).toLocaleDateString("it-IT")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* TICKET DETAILS */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">Descrizione iniziale</h3>
          <p className="text-gray-300">{ticket.description}</p>
        </div>

        {/* CONVERSATION */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold">Conversazione</h3>
          {ticket.messages.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <div className="text-2xl mb-2">💬</div>
              <p>Nessun messaggio in questa conversazione</p>
            </div>
          ) : (
            <div className="space-y-4">
              {ticket.messages.map((message) => (
                <div key={message.id} className={`flex ${message.isAdmin ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.isAdmin 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-zinc-800 text-white'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium">
                        {message.isAdmin ? "👨‍💼 Staff" : "👤 Tu"}
                      </span>
                      <span className="text-xs opacity-70">
                        {new Date(message.createdAt).toLocaleString("it-IT", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TICKET INFO */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Informazioni Ticket</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">ID Ticket:</span>
              <span className="text-white ml-2">{ticket.id}</span>
            </div>
            <div>
              <span className="text-gray-500">Categoria:</span>
              <span className="text-white ml-2">{ticket.category || "Non specificata"}</span>
            </div>
            <div>
              <span className="text-gray-500">Creato:</span>
              <span className="text-white ml-2">
                {new Date(ticket.createdAt).toLocaleString("it-IT")}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Ultimo aggiornamento:</span>
              <span className="text-white ml-2">
                {new Date(ticket.updatedAt).toLocaleString("it-IT")}
              </span>
            </div>
            {ticket.closedAt && (
              <div className="md:col-span-2">
                <span className="text-gray-500">Chiuso:</span>
                <span className="text-white ml-2">
                  {new Date(ticket.closedAt).toLocaleString("it-IT")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex gap-3">
          <Link
            href="/support/history"
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            Torna allo storico
          </Link>
          <Link
            href="/support"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors font-semibold"
          >
            Nuovo ticket
          </Link>
        </div>
      </div>
    </div>
  );
}
