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
      toast.success(`💬 Nuova risposta dal supporto - Ticket #${data.ticketId}`, {
        duration: 5000,
        style: { background: "#1c1c1c", color: "#fff" },
      });
      
      // Emetti evento custom per aggiornare badge
      window.dispatchEvent(new CustomEvent('ticket-reply', { 
        detail: { ticketId: data.ticketId } 
      }));
    });

    // ✅ Ticket risolto
    es.addEventListener("ticket-resolved", (event) => {
      const data = JSON.parse(event.data);
      toast.success(`✅ Ticket #${data.id} risolto con successo`, {
        duration: 5000,
        style: { background: "#1c1c1c", color: "#fff" },
      });
    });

    // 🆕 Nuovo ticket aperto (feedback all'utente)
    es.addEventListener("ticket-created", (event) => {
      const data = JSON.parse(event.data);
      toast.success(`📨 Ticket #${data.id} creato correttamente`, {
        duration: 4000,
        style: { background: "#1c1c1c", color: "#fff" },
      });
    });

    // 🔌 Gestione errori stream
    es.onerror = () => {
      console.warn("⚠️ Connessione SSE utente interrotta, riconnessione tra 5s...");
      es.close();
      // Riconnessione automatica gestita dal browser
    };

    return () => {
      es.close();
    };
  }, [userEmail]);
}
