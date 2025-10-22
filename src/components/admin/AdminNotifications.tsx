"use client";

import { useEffect, useState } from "react";
import { getAdminNotifications, resolveAdminNotification, markAllAsRead, getNotificationStats, AdminNotification } from "@/services/adminNotifications";
import { Button } from "@/components/ui/button";

interface NotificationStats {
  total: number;
  unread: number;
  errors: number;
  warnings: number;
}

export default function AdminNotifications({ token }: { token: string }) {
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [stats, setStats] = useState<NotificationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resolving, setResolving] = useState<number | null>(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [notificationsData, statsData] = await Promise.all([
          getAdminNotifications(token),
          getNotificationStats(token)
        ]);
        
        setNotifications(notificationsData);
        setStats(statsData);
      } catch (err) {
        console.error("Errore caricamento notifiche:", err);
        setError("Errore nel caricamento delle notifiche");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [token]);

  const handleResolve = async (id: number) => {
    try {
      setResolving(id);
      await resolveAdminNotification(id, token);
      setNotifications(prev => prev.filter(n => n.id !== id));
      
      // Aggiorna le statistiche
      if (stats) {
        setStats(prev => prev ? { ...prev, unread: Math.max(0, prev.unread - 1) } : null);
      }
    } catch (err) {
      console.error("Errore risoluzione:", err);
      alert("Errore nella risoluzione della notifica");
    } finally {
      setResolving(null);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(token);
      setNotifications(prev => prev.map(n => ({ ...n, resolved: true })));
      if (stats) {
        setStats(prev => prev ? { ...prev, unread: 0 } : null);
      }
    } catch (err) {
      console.error("Errore marcatura tutte:", err);
      alert("Errore nella marcatura di tutte le notifiche");
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ERROR": return "🚨";
      case "WARNING": return "⚠️";
      case "INFO": return "ℹ️";
      default: return "📢";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ERROR": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "WARNING": return "bg-funkard-yellow/20 text-yellow-400 border-funkard-yellow/30";
      case "INFO": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-gray-400">Caricamento notifiche...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-red-400">
        <div className="flex items-center gap-2 mb-2">
          <span>🚨</span>
          <span className="font-semibold">Errore</span>
        </div>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!notifications.length) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-xl font-semibold text-white mb-2">Nessuna notifica attiva</h3>
        <p className="text-gray-400">Tutto sotto controllo!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* STATISTICHE */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-sm text-gray-400">Totale</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-yellow-400">{stats.unread}</div>
            <div className="text-sm text-gray-400">Non lette</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-red-400">{stats.errors}</div>
            <div className="text-sm text-gray-400">Errori</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-yellow-400">{stats.warnings}</div>
            <div className="text-sm text-gray-400">Avvisi</div>
          </div>
        </div>
      )}

      {/* AZIONI RAPIDE */}
      <div className="flex gap-3 mb-6">
        <Button
          onClick={handleMarkAllAsRead}
          variant="outline"
          className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Segna tutte come lette
        </Button>
      </div>

      {/* LISTA NOTIFICHE */}
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`border rounded-xl p-4 flex justify-between items-start transition-all ${
              notification.resolved 
                ? "bg-zinc-900/40 border-zinc-800 opacity-60" 
                : "bg-zinc-900/60 border-zinc-700"
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg">{getTypeIcon(notification.type)}</span>
                <h3 className="text-lg font-semibold text-white">
                  {notification.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(notification.type)}`}>
                  {notification.type}
                </span>
              </div>
              
              <p className="text-sm text-gray-300 mb-2">{notification.message}</p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>
                  {new Date(notification.createdAt).toLocaleString("it-IT")}
                </span>
                {notification.resolved && (
                  <span className="text-green-400">✓ Risolta</span>
                )}
              </div>
            </div>
            
            <div className="ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleResolve(notification.id)}
                disabled={resolving === notification.id}
                className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
              >
                {resolving === notification.id ? "..." : "Risolve"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
