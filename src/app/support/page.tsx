"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SupportTicket, SupportStats } from "@/types/support";

export default function SupportPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [stats, setStats] = useState<SupportStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("funkard_token");
        if (!token) {
          router.push("/login");
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/tickets`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setTickets(data.tickets || []);
        setStats(data.stats || null);
      } catch (err) {
        setError("Errore nel caricamento dei ticket");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [router]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OPEN":
        return "bg-green-900 text-green-300";
      case "IN_PROGRESS":
        return "bg-yellow-900 text-yellow-300";
      case "CLOSED":
        return "bg-gray-900 text-gray-300";
      default:
        return "bg-gray-900 text-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "OPEN":
        return "Aperto";
      case "IN_PROGRESS":
        return "In corso";
      case "CLOSED":
        return "Chiuso";
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Caricamento ticket...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-6 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">🎧 Supporto Funkard</h1>
            <p className="text-gray-400 text-sm mt-1">
              Gestisci i tuoi ticket di supporto e contatta il nostro team
            </p>
          </div>
          <Button
            onClick={() => setShowNewTicketForm(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            Nuovo Ticket
          </Button>
        </div>
      </div>

      {/* STATS */}
      {stats && (
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400">{stats.openTickets}</div>
              <div className="text-sm text-gray-400">Aperti</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-400">{stats.inProgressTickets}</div>
              <div className="text-sm text-gray-400">In corso</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-gray-400">{stats.closedTickets}</div>
              <div className="text-sm text-gray-400">Chiusi</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">{stats.totalTickets}</div>
              <div className="text-sm text-gray-400">Totale</div>
            </div>
          </div>
        </div>
      )}

      {/* TICKETS LIST */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {tickets.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="text-gray-400 mb-2">🎧</div>
            <div className="text-sm text-gray-400 mb-4">Nessun ticket di supporto</div>
            <Button
              onClick={() => setShowNewTicketForm(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Crea il tuo primo ticket
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{ticket.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{ticket.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {getStatusText(ticket.status)}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(ticket.createdAt).toLocaleDateString("it-IT")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {ticket.messages.length} messaggi
                    {ticket.category && (
                      <span className="ml-2 px-2 py-1 bg-zinc-800 rounded text-xs">
                        {ticket.category}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/support/${ticket.id}`}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                    >
                      Apri chat →
                    </Link>
                    {ticket.status === "CLOSED" && (
                      <Link
                        href={`/support/history/${ticket.id}`}
                        className="text-gray-400 hover:text-gray-300 text-sm"
                      >
                        Storico
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* NEW TICKET FORM MODAL */}
      {showNewTicketForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Nuovo Ticket di Supporto</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Titolo
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                  placeholder="Breve descrizione del problema..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categoria
                </label>
                <select className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-yellow-500">
                  <option value="">Seleziona categoria</option>
                  <option value="technical">Problema tecnico</option>
                  <option value="billing">Fatturazione</option>
                  <option value="account">Account</option>
                  <option value="marketplace">Marketplace</option>
                  <option value="other">Altro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descrizione
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                  placeholder="Descrivi il problema in dettaglio..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={() => setShowNewTicketForm(false)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white"
                >
                  Annulla
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Crea Ticket
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
