"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Archive, ArrowLeft, Calendar, Search } from "lucide-react";
import Link from "next/link";
import { getAdminNotifications } from "@/services/adminNotifications";

interface ArchivedNotification {
  id: number;
  title: string;
  message: string;
  type: "ERROR" | "WARNING" | "INFO";
  createdAt: string;
  resolvedAt: string;
  resolved: boolean;
}

export default function AdminNotificationsArchivePage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<ArchivedNotification[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "ERROR" | "WARNING" | "INFO">("all");

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

  useEffect(() => {
    if (token) {
      const loadArchivedNotifications = async () => {
        try {
          // Simula il caricamento delle notifiche archiviate
          // In un'implementazione reale, questo chiamerebbe un endpoint specifico per l'archivio
          const data = await getAdminNotifications(token);
          // Filtra solo le notifiche risolte per simulare l'archivio
          const archived = data.filter(n => n.resolved).map(n => ({
            ...n,
            resolvedAt: new Date().toISOString() // Simula data di risoluzione
          }));
          setNotifications(archived);
        } catch (err) {
          console.error("Errore caricamento archivio:", err);
        }
      };

      loadArchivedNotifications();
    }
  }, [token]);

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
      case "WARNING": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "INFO": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || notification.type === filterType;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Caricamento archivio...</div>
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
              <Archive className="w-8 h-8 text-yellow-500" />
              <div>
                <h1 className="text-3xl font-bold text-white">Archivio Notifiche</h1>
                <p className="text-gray-400 mt-1">
                  Storico delle notifiche risolte e archiviate
                </p>
              </div>
            </div>
            
            <Link
              href="/admin/notifications"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Torna alle notifiche</span>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* FILTRI */}
        <div className="mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cerca nelle notifiche
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cerca per titolo o messaggio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              
              <div className="md:w-48">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Filtra per tipo
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as "all" | "ERROR" | "WARNING" | "INFO")}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">Tutti i tipi</option>
                  <option value="ERROR">Errori</option>
                  <option value="WARNING">Avvisi</option>
                  <option value="INFO">Informazioni</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* LISTA NOTIFICHE ARCHIVIATE */}
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {searchTerm || filterType !== "all" 
                ? "Nessuna notifica trovata" 
                : "Archivio vuoto"
              }
            </h3>
            <p className="text-gray-400">
              {searchTerm || filterType !== "all"
                ? "Prova a modificare i filtri di ricerca"
                : "Le notifiche risolte appariranno qui"
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className="border rounded-xl p-4 bg-zinc-900/40 border-zinc-800 opacity-75"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">{getTypeIcon(notification.type)}</span>
                      <h3 className="text-lg font-semibold text-white">
                        {notification.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(notification.type)}`}>
                        {notification.type}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        ✓ Risolta
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-3">{notification.message}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Creata: {new Date(notification.createdAt).toLocaleDateString("it-IT")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>✓</span>
                        <span>Risolta: {new Date(notification.resolvedAt).toLocaleDateString("it-IT")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STATISTICHE ARCHIVIO */}
        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">📊</div>
            <h3 className="text-lg font-semibold text-white">Statistiche Archivio</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-white">{notifications.length}</div>
              <div className="text-gray-400">Totale archiviate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">
                {notifications.filter(n => n.type === "ERROR").length}
              </div>
              <div className="text-gray-400">Errori risolti</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {notifications.filter(n => n.type === "WARNING").length}
              </div>
              <div className="text-gray-400">Avvisi risolti</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {notifications.filter(n => n.type === "INFO").length}
              </div>
              <div className="text-gray-400">Info risolte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
