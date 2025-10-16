"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNotifications from "@/components/admin/AdminNotifications";
import { Bell, Archive, Filter, Settings } from "lucide-react";
import Link from "next/link";

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
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-8 h-8 text-yellow-500" />
              <div>
                <h1 className="text-3xl font-bold text-white">Notifiche Attive</h1>
                <p className="text-gray-400 mt-1">
                  Gestione notifiche e allerte del sistema Funkard
                </p>
              </div>
            </div>
            
            {/* AZIONI RAPIDE */}
            <div className="flex items-center gap-3">
              <Link
                href="/admin/notifications/archive"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
                <Archive className="w-4 h-4" />
                <span className="text-sm">Archivio</span>
              </Link>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filtri</span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Impostazioni</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* INTRO SECTION */}
        <div className="mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🔔</div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Sistema di Notifiche Funkard
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Qui trovi tutte le notifiche del sistema Funkard che richiedono la tua attenzione. 
                  Puoi segnarle come risolte per spostarle automaticamente nell'archivio. 
                  Le notifiche vengono archiviate automaticamente dopo 30 giorni per ottimizzare le performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS COMPONENT */}
        <AdminNotifications token={token} />

        {/* FOOTER INFO */}
        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-lg">ℹ️</div>
            <h3 className="text-lg font-semibold text-white">Informazioni Sistema</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-white mb-2">📊 Performance</h4>
              <p className="text-gray-400">
                Zero polling - le notifiche vengono caricate solo su refresh o accesso
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">🗄️ Archivio</h4>
              <p className="text-gray-400">
                Notifiche risolte vengono archiviate automaticamente dopo 30 giorni
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">🔒 Sicurezza</h4>
              <p className="text-gray-400">
                Accesso protetto tramite token admin e autenticazione sicura
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}