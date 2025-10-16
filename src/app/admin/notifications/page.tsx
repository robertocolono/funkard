"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNotifications from "@/components/admin/AdminNotifications";

export default function AdminNotificationsPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const adminToken = localStorage.getItem("funkard_admin_token");
      
      if (!adminToken || adminToken !== "b7d525303780f51248225e8130a8697e56d6c3ba070a83e19136f74bd83134d4") {
        router.push("/");
        return;
      }
      
      setToken(adminToken);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Verifica accesso admin...</div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-red-400">Accesso non autorizzato</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <div className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">📢 Notifiche Admin</h1>
              <p className="text-sm text-gray-400 mt-1">
                Gestione notifiche e allerte del sistema
              </p>
            </div>
            <div className="text-sm text-gray-400">
              Sistema di monitoraggio in tempo reale
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔔</span>
              <h2 className="text-xl font-semibold text-white">Notifiche Attive</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Monitora le notifiche del sistema, errori, avvisi e informazioni importanti.
              Le notifiche vengono archiviate automaticamente dopo 30 giorni.
            </p>
          </div>
        </div>

        <AdminNotifications token={token} />
      </div>
    </div>
  );
}
