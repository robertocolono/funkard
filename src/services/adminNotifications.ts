const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://funkard-api.onrender.com";

export interface AdminNotification {
  id: number;
  title: string;
  message: string;
  type: "ERROR" | "WARNING" | "INFO";
  createdAt: string;
  resolved: boolean;
}

export async function getAdminNotifications(token: string): Promise<AdminNotification[]> {
  const res = await fetch(`${API_BASE}/api/admin/notifications/active`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Admin-Token": token,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Errore nel caricamento notifiche: ${res.status}`);
  }
  
  return res.json();
}

export async function resolveAdminNotification(id: number, token: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/admin/notifications/resolve/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Admin-Token": token,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Errore nella risoluzione della notifica: ${res.status}`);
  }
  
  return true;
}

export async function markAllAsRead(token: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/admin/notifications/mark-all-read`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Admin-Token": token,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Errore nella marcatura di tutte le notifiche: ${res.status}`);
  }
  
  return true;
}

export async function getNotificationStats(token: string): Promise<{
  total: number;
  unread: number;
  errors: number;
  warnings: number;
}> {
  const res = await fetch(`${API_BASE}/api/admin/notifications/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Admin-Token": token,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Errore nel caricamento statistiche: ${res.status}`);
  }
  
  return res.json();
}
