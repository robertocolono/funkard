"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SupportTicket } from "@/types/support";

export default function SupportHistoryPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("funkard_token");
        if (!token) {
          router.push("/login");
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/history`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setTickets(data.tickets || []);
      } catch (err) {
        setError("Errore nel caricamento dello storico");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Caricamento storico...</div>
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
            <div className="flex items-center gap-3 mb-2">
              <Link 
                href="/support" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Torna ai ticket
              </Link>
            </div>
            <h1 className="text-3xl font-bold">📚 Storico Ticket</h1>
            <p className="text-gray-400 text-sm mt-1">
              Visualizza i tuoi ticket di supporto risolti
            </p>
          </div>
        </div>
      </div>

      {/* TICKETS HISTORY */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {tickets.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="text-gray-400 mb-2">📚</div>
            <div className="text-sm text-gray-400 mb-4">Nessun ticket risolto</div>
            <Link 
              href="/support"
              className="text-yellow-400 hover:text-yellow-300 text-sm"
            >
              Torna ai ticket attivi
            </Link>
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
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gray-900 text-gray-300">
                      Chiuso
                    </span>
                    <span className="text-xs text-gray-500">
                      {ticket.closedAt 
                        ? new Date(ticket.closedAt).toLocaleDateString("it-IT")
                        : new Date(ticket.updatedAt).toLocaleDateString("it-IT")
                      }
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
                    <span className="ml-2 text-xs">
                      Risolto in {Math.ceil(
                        (new Date(ticket.closedAt || ticket.updatedAt).getTime() - 
                         new Date(ticket.createdAt).getTime()) / (1000 * 60 * 60 * 24)
                      )} giorni
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/support/history/${ticket.id}`}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                    >
                      Visualizza →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {tickets.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <button className="px-3 py-2 bg-zinc-800 text-gray-400 rounded-lg hover:bg-zinc-700 disabled:opacity-50">
                ← Precedente
              </button>
              <button className="px-3 py-2 bg-zinc-800 text-gray-400 rounded-lg hover:bg-zinc-700 disabled:opacity-50">
                Successiva →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
