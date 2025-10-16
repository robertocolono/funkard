"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getNotificationStats } from "@/services/adminNotifications";

interface NotificationBadgeProps {
  token: string;
}

export default function NotificationBadge({ token }: NotificationBadgeProps) {
  const [stats, setStats] = useState<{
    total: number;
    unread: number;
    errors: number;
    warnings: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await getNotificationStats(token);
        setStats(data);
      } catch (err) {
        console.error("Errore caricamento stats notifiche:", err);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, [token]);

  if (loading || !stats) {
    return null;
  }

  if (stats.unread === 0) {
    return (
      <Link
        href="/admin/notifications"
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
      >
        <span className="text-lg">🔔</span>
        <span className="text-sm text-gray-300">Notifiche</span>
        <span className="text-xs text-green-400">✓ Tutto ok</span>
      </Link>
    );
  }

  return (
    <Link
      href="/admin/notifications"
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors relative"
    >
      <span className="text-lg">🔔</span>
      <span className="text-sm text-white">Notifiche</span>
      
      {/* BADGE CON CONTEGGIO */}
      <div className="flex items-center gap-1">
        {stats.errors > 0 && (
          <span className="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
            {stats.errors}
          </span>
        )}
        {stats.warnings > 0 && (
          <span className="px-2 py-1 text-xs font-bold bg-yellow-500 text-black rounded-full">
            {stats.warnings}
          </span>
        )}
        {stats.unread > 0 && (
          <span className="px-2 py-1 text-xs font-bold bg-yellow-400 text-black rounded-full">
            {stats.unread}
          </span>
        )}
      </div>
    </Link>
  );
}
