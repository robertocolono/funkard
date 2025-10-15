"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { adminApi } from "@/lib/adminApi";

interface DashboardStats {
  pendingItems: number;
  openTickets: number;
  totalUsers: number;
  recentActivity: Array<{
    id: string;
    type: string;
    message: string;
    timestamp: string;
  }>;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await adminApi.getDashboard();
        setStats(data);
      } catch (err) {
        setError("Errore nel caricamento dei dati dashboard");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-400">Caricamento dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">📊 Dashboard Admin</h1>
        <p className="text-gray-400 text-sm">
          Panoramica generale del sistema Funkard
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📈</span>
            <h3 className="text-lg font-semibold">Pending Market</h3>
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-1">
            {stats?.pendingItems || 0}
          </div>
          <p className="text-sm text-gray-400">Prodotti in attesa</p>
          <Link 
            href="/admin/market" 
            className="text-yellow-400 hover:text-yellow-300 text-sm mt-2 inline-block"
          >
            Gestisci →
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎧</span>
            <h3 className="text-lg font-semibold">Support Tickets</h3>
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-1">
            {stats?.openTickets || 0}
          </div>
          <p className="text-sm text-gray-400">Ticket aperti</p>
          <Link 
            href="/admin/support" 
            className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
          >
            Gestisci →
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👥</span>
            <h3 className="text-lg font-semibold">Utenti</h3>
          </div>
          <div className="text-3xl font-bold text-green-400 mb-1">
            {stats?.totalUsers || 0}
          </div>
          <p className="text-sm text-gray-400">Utenti registrati</p>
          <Link 
            href="/admin/users" 
            className="text-green-400 hover:text-green-300 text-sm mt-2 inline-block"
          >
            Gestisci →
          </Link>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">📋 Attività Recente</h2>
        {stats?.recentActivity && stats.recentActivity.length > 0 ? (
          <div className="space-y-3">
            {stats.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <span className="text-lg">
                  {activity.type === "pending" ? "📈" : 
                   activity.type === "ticket" ? "🎧" : 
                   activity.type === "user" ? "👥" : "📊"}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-white">{activity.message}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(activity.timestamp).toLocaleString("it-IT")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">📊</div>
            <p className="text-gray-400">Nessuna attività recente</p>
          </div>
        )}
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">⚡ Azioni Rapide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            href="/admin/market"
            className="p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-center"
          >
            <div className="text-2xl mb-2">📈</div>
            <div className="font-medium">Market Pending</div>
            <div className="text-sm text-gray-400">Gestisci trend</div>
          </Link>
          
          <Link 
            href="/admin/support"
            className="p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-center"
          >
            <div className="text-2xl mb-2">🎧</div>
            <div className="font-medium">Support</div>
            <div className="text-sm text-gray-400">Ticket clienti</div>
          </Link>
          
          <Link 
            href="/admin/users"
            className="p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-center"
          >
            <div className="text-2xl mb-2">👥</div>
            <div className="font-medium">Utenti</div>
            <div className="text-sm text-gray-400">Gestisci account</div>
          </Link>
          
          <div className="p-4 bg-zinc-800 rounded-lg text-center">
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-medium">Impostazioni</div>
            <div className="text-sm text-gray-400">Prossimamente</div>
          </div>
        </div>
      </div>
    </div>
  );
}
