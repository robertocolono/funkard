"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SupportTicket, CreateMessageRequest } from "@/types/support";

export default function SupportChatPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [ticket, setTicket] = useState(null as SupportTicket | null);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null as string | null);

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

  const sendMessage = async () => {
    if (!newMessage.trim() || !ticket) return;

    setSending(true);
    try {
      const token = localStorage.getItem("funkard_token");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          ticketId: ticket.id,
          message: newMessage
        } as CreateMessageRequest)
      });

      if (!res.ok) {
        throw new Error("Errore nell'invio del messaggio");
      }

      setNewMessage("");
      
      // Ricarica il ticket per aggiornare i messaggi
      const updatedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/tickets/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (updatedRes.ok) {
        const updatedData = await updatedRes.json();
        setTicket(updatedData);
      }
    } catch (err) {
      console.error(err);
      alert("Errore nell'invio del messaggio");
    } finally {
      setSending(false);
    }
  };

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
        <div className="text-gray-400">Caricamento chat...</div>
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
                href="/support" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Torna ai ticket
              </Link>
            </div>
            <h1 className="text-2xl font-bold">{ticket.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(ticket.status)}`}>
                {getStatusText(ticket.status)}
              </span>
              <span className="text-sm text-gray-400">
                Creato il {new Date(ticket.createdAt).toLocaleDateString("it-IT")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT MESSAGES */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">Descrizione iniziale</h3>
          <p className="text-gray-300">{ticket.description}</p>
        </div>

        <div className="space-y-4 mb-6">
          {ticket.messages.map((message: any) => (
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

        {/* NEW MESSAGE FORM */}
        {ticket.status !== "CLOSED" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Invia messaggio</h3>
            <div className="space-y-4">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Scrivi il tuo messaggio..."
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-funkard-yellow"
                rows={3}
              />
              <div className="flex justify-end">
                <Button
                  onClick={sendMessage}
                  disabled={!newMessage.trim() || sending}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold disabled:opacity-50"
                >
                  {sending ? "Invio..." : "Invia messaggio"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {ticket.status === "CLOSED" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-gray-400 mb-2">🔒</div>
            <p className="text-gray-400">Questo ticket è stato chiuso</p>
            <Link 
              href="/support" 
              className="text-yellow-400 hover:text-yellow-300 text-sm mt-2 inline-block"
            >
              Torna ai ticket
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
