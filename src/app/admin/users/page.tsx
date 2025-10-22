"use client";
import { useEffect, useState } from "react";
import { adminApi } from "@/lib/adminApi";

interface User {
  id: string;
  email: string;
  handle?: string;
  tipoUtente?: "PRIVATO" | "BUSINESS";
  verified?: boolean;
  createdAt: string;
  lastLogin?: string;
  totalCards?: number;
  totalValue?: number;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "PRIVATO" | "BUSINESS">("all");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await adminApi.getUsers();
        setUsers(data);
      } catch (err) {
        setError("Errore nel caricamento degli utenti");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.handle?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || user.tipoUtente === filterType;
    return matchesSearch && matchesFilter;
  });

  const toggleUserVerification = async (userId: string, currentStatus: boolean) => {
    try {
      await adminApi.toggleUserVerification(userId, !currentStatus);

      // Aggiorna lo stato locale
      setUsers(users.map(user => 
        user.id === userId 
          ? { ...user, verified: !currentStatus }
          : user
      ));

      alert(`Utente ${!currentStatus ? 'verificato' : 'non verificato'} con successo!`);
    } catch (err) {
      console.error(err);
      alert("Errore nell'aggiornamento dello stato");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-400">Caricamento utenti...</div>
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
        <h1 className="text-2xl font-bold mb-2">👥 Gestione Utenti</h1>
        <p className="text-gray-400 text-sm">
          Gestisci gli account utenti e le verifiche business
        </p>
      </div>

      {/* FILTERS */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Cerca per email o handle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-funkard-yellow"
          />
        </div>
        <div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as "all" | "PRIVATO" | "BUSINESS")}
            className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-funkard-yellow"
          >
            <option value="all">Tutti i tipi</option>
            <option value="PRIVATO">Privati</option>
            <option value="BUSINESS">Business</option>
          </select>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{users.length}</div>
          <div className="text-sm text-gray-400">Totale utenti</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-green-400">
            {users.filter(u => u.verified).length}
          </div>
          <div className="text-sm text-gray-400">Verificati</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-blue-400">
            {users.filter(u => u.tipoUtente === "BUSINESS").length}
          </div>
          <div className="text-sm text-gray-400">Business</div>
        </div>
      </div>

      {/* USERS TABLE */}
      {filteredUsers.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
          <div className="text-gray-400 mb-2">👥</div>
          <div className="text-sm text-gray-400">
            {searchTerm ? "Nessun utente trovato" : "Nessun utente registrato"}
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-800 text-gray-300">
              <tr>
                <th className="p-4 text-left font-medium">Utente</th>
                <th className="p-4 text-left font-medium">Tipo</th>
                <th className="p-4 text-left font-medium">Stato</th>
                <th className="p-4 text-left font-medium">Carte</th>
                <th className="p-4 text-left font-medium">Ultimo accesso</th>
                <th className="p-4 text-left font-medium">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-zinc-700 hover:bg-zinc-800/50">
                  <td className="p-4">
                    <div>
                      <div className="font-medium text-white">{user.email}</div>
                      {user.handle && (
                        <div className="text-sm text-gray-400">@{user.handle}</div>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      user.tipoUtente === "BUSINESS" 
                        ? "bg-blue-900 text-blue-300" 
                        : "bg-gray-900 text-gray-300"
                    }`}>
                      {user.tipoUtente || "PRIVATO"}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      user.verified 
                        ? "bg-green-900 text-green-300" 
                        : "bg-orange-900 text-orange-300"
                    }`}>
                      {user.verified ? "Verificato" : "Non verificato"}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">
                    {user.totalCards || 0} carte
                    {user.totalValue && (
                      <div className="text-xs text-gray-500">
                        €{(user.totalValue / 100).toFixed(2)}
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-gray-400">
                    {user.lastLogin 
                      ? new Date(user.lastLogin).toLocaleDateString("it-IT")
                      : "Mai"
                    }
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleUserVerification(user.id, user.verified || false)}
                        className={`px-3 py-1 rounded text-xs font-medium ${
                          user.verified
                            ? "bg-orange-600 hover:bg-orange-700 text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                      >
                        {user.verified ? "Non verificare" : "Verifica"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500">
        <p>💡 <strong>Tip:</strong> Gestione utenti:</p>
        <ul className="mt-1 ml-4 list-disc">
          <li>Verifica account business per funzionalità avanzate</li>
          <li>Monitora attività e collezioni utenti</li>
          <li>Gestisci accessi e permessi</li>
        </ul>
      </div>
    </div>
  );
}
