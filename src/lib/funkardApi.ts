export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://funkard-backend.onrender.com";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://funkard-backend.onrender.com/api';

// ✅ Funzione helper per richieste
async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-User-Id': localStorage.getItem('funkard_user_id') || '', // ID utente locale o da JWT
      ...options.headers,
    },
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || 'Errore API');
  }

  return res.status === 204 ? null : res.json();
}

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

export async function reopenTicket(id: string) {
  const res = await fetch(`${API_BASE}/api/support/${id}/reopen`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Errore riapertura ticket");
  return res.json();
}

// ===== SHIPPING ADDRESSES API =====

export interface ShippingAddress {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export async function getShippingAddresses(): Promise<ShippingAddress[]> {
  const token = localStorage.getItem("funkard_token");
  if (!token) throw new Error("Token non trovato");

  const response = await fetch(`${API_BASE}/api/user/addresses`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Errore durante il caricamento degli indirizzi");
  }

  return response.json();
}

export async function addShippingAddress(address: Omit<ShippingAddress, 'id'>): Promise<ShippingAddress> {
  const token = localStorage.getItem("funkard_token");
  if (!token) throw new Error("Token non trovato");

  const response = await fetch(`${API_BASE}/api/user/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(address),
  });

  if (!response.ok) {
    throw new Error("Errore durante l'aggiunta dell'indirizzo");
  }

  return response.json();
}

export async function updateShippingAddress(id: string, address: Omit<ShippingAddress, 'id'>): Promise<ShippingAddress> {
  const token = localStorage.getItem("funkard_token");
  if (!token) throw new Error("Token non trovato");

  const response = await fetch(`${API_BASE}/api/user/addresses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(address),
  });

  if (!response.ok) {
    throw new Error("Errore durante l'aggiornamento dell'indirizzo");
  }

  return response.json();
}

export async function deleteShippingAddress(id: string): Promise<void> {
  const token = localStorage.getItem("funkard_token");
  if (!token) throw new Error("Token non trovato");

  const response = await fetch(`${API_BASE}/api/user/addresses/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Errore durante l'eliminazione dell'indirizzo");
  }
}

export async function setDefaultShippingAddress(id: string): Promise<void> {
  const token = localStorage.getItem("funkard_token");
  if (!token) throw new Error("Token non trovato");

  const response = await fetch(`${API_BASE}/api/user/addresses/${id}/default`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Errore durante l'impostazione dell'indirizzo predefinito");
  }
}

/* ───────────────────────────────────────────────
 * 📦 SHIPPING ADDRESS API (Nuova versione)
 * ─────────────────────────────────────────────── */
export async function fetchShippingAddresses() {
  return apiFetch('/user/addresses', { method: 'GET' });
}

export async function createShippingAddress(data: any) {
  return apiFetch('/user/addresses', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function updateShippingAddress(id: string, data: any) {
  return apiFetch(`/user/addresses/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deleteShippingAddress(id: string) {
  return apiFetch(`/user/addresses/${id}`, { method: 'DELETE' });
}

export async function setDefaultShippingAddress(id: string) {
  return apiFetch(`/user/addresses/${id}/default`, { method: 'PATCH' });
}

/* ───────────────────────────────────────────────
 * 💳 PAYMENT METHODS API
 * ─────────────────────────────────────────────── */
export async function fetchPaymentMethods() {
  return apiFetch('/user/payments', { method: 'GET' });
}

export async function addPaymentMethod(data: any) {
  return apiFetch('/user/payments', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function deletePaymentMethod(id: string) {
  return apiFetch(`/user/payments/${id}`, { method: 'DELETE' });
}

export async function setDefaultPaymentMethod(id: string) {
  return apiFetch(`/user/payments/${id}/default`, { method: 'PATCH' });
}
