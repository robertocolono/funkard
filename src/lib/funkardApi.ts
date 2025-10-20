export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://funkard-backend.onrender.com";

export async function analyzeGradeLens(frontImageUrl: string, backImageUrl: string) {
  const res = await fetch(`${API_BASE}/gradelens/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ frontImageUrl, backImageUrl }),
  });

  if (!res.ok) {
    throw new Error("Errore durante l'analisi GradeLens");
  }

  return res.json();
}

import type { ConfirmGradeLensPayload, ConfirmGradeLensResponse } from "@/types/gradelens";

export async function confirmGradeLens(payload: ConfirmGradeLensPayload): Promise<ConfirmGradeLensResponse> {
  const token = typeof window !== "undefined" ? localStorage.getItem("funkard_token") : null;
  const res = await fetch(`${API_BASE}/gradelens/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || "Errore durante la conferma GradeLens");
  }

  return res.json();
}

export async function updateUserCard(id: string, updates: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}/usercards/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error("Errore durante l'aggiornamento della carta");
  return res.json();
}

export async function getTrend(itemName: string, range: "7d"|"30d"|"1y", category = "card") {
  const base = process.env.NEXT_PUBLIC_API_URL!;
  const res = await fetch(`${base}/api/valuation/trend/${range}/${encodeURIComponent(itemName)}?category=${category}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Trend fetch failed");
  return res.json(); // { itemName, category, rangeType, points, lastSoldPrice, updatedAt, status, manualCheck }
}

// ===== SUPPORT SYSTEM API =====

export async function createSupportTicket({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE}/api/support`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userEmail: email,
      subject,
      message,
      category: "general",
      priority: "normal",
    }),
  });

  if (!res.ok) {
    console.error("Errore API support:", await res.text());
    throw new Error("Errore nella creazione del ticket");
  }

  return res.json();
}

export async function fetchUserTickets(email: string) {
  const token = typeof window !== "undefined" ? localStorage.getItem("funkard_token") : null;
  const res = await fetch(`${API_BASE}/api/support?email=${encodeURIComponent(email)}`, {
    headers: { 
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Errore nel caricamento ticket utente");
  return res.json();
}

export async function fetchTicketById(id: string) {
  const token = typeof window !== "undefined" ? localStorage.getItem("funkard_token") : null;
  const res = await fetch(`${API_BASE}/api/support/${id}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ticket non trovato");
  return res.json();
}

export async function sendSupportMessage(ticketId: string, message: string, sender: string) {
  const token = typeof window !== "undefined" ? localStorage.getItem("funkard_token") : null;
  const res = await fetch(`${API_BASE}/api/support/${ticketId}/message`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ message, sender }),
  });
  if (!res.ok) throw new Error("Errore invio messaggio");
  return res.json();
}
