'use client';

import { useEffect } from "react";
import toast from "react-hot-toast";

export function useUserSupportEvents(userEmail?: string) {
  useEffect(() => {
    if (!userEmail) return;

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://funkard-backend.onrender.com";
    const es = new EventSource(`${baseUrl}/api/support/stream?email=${encodeURIComponent(userEmail)}`, {
      withCredentials: true,
    });

    // 💬 Nuova risposta a un ticket
    es.addEventListener("ticket-reply", (event) => {
      const data = JSON.parse(event.data);
      toast.success(`💬 Nuova risposta dal supporto`, {
        description: `Ticket #${data.ticketId} — ${data.agentName || "Supporto Funkard"} ti ha risposto.`,
        duration: 5000,
        style: { background: "#1c1c1c", color: "#fff" },
      });
    });

    // ✅ Ticket risolto
    es.addEventListener("ticket-resolved", (event) => {
      const data = JSON.parse(event.data);
      toast.success(`✅ Ticket risolto`, {
        description: `Il tuo ticket #${data.id} è stato chiuso con successo.`,
        duration: 5000,
        style: { background: "#1c1c1c", color: "#fff" },
      });
    });

    // 🆕 Nuovo ticket aperto (feedback all'utente)
    es.addEventListener("ticket-created", (event) => {
      const data = JSON.parse(event.data);
      toast.success(`📨 Ticket creato`, {
        description: `Hai aperto correttamente il ticket #${data.id}. Ti aggiorneremo appena risponderemo.`,
        duration: 4000,
        style: { background: "#1c1c1c", color: "#fff" },
      });
    });

    // 🔌 Gestione errori stream
    es.onerror = () => {
      console.warn("⚠️ Connessione SSE utente interrotta, riconnessione tra 5s...");
      es.close();
      setTimeout(() => useUserSupportEvents(userEmail), 5000);
    };

    return () => {
      es.close();
    };
  }, [userEmail]);
}
