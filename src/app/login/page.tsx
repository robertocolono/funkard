"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://funkard-api.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          passwordHash: form.password, // il backend si aspetta passwordHash
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data || "Credenziali non valide");
        return;
      }

      // ✅ Salva token nel localStorage
      localStorage.setItem("funkard_token", data.token);

      // ✅ Se "ricordami" è disattivato → token dura solo in sessione
      if (!form.remember) {
        window.addEventListener("beforeunload", () => localStorage.removeItem("funkard_token"));
      }

      router.push("/");
    } catch {
      setLoading(false);
      setError("Errore di connessione al server");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-yellow-400">🔑 Accedi al tuo account</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white"
          />

          <label className="text-sm flex items-center gap-2 text-gray-400">
            <input
              type="checkbox"
              checked={form.remember}
              onChange={(e) => setForm({ ...form, remember: e.target.checked })}
            />
            Ricordami
          </label>

          <button
            type="submit"
            disabled={loading}
            className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            {loading ? "Accesso in corso..." : "Accedi"}
          </button>

          {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
        </form>

        <p className="mt-6 text-gray-400 text-sm">
          Non hai un account?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-yellow-400 hover:underline"
          >
            Registrati
          </button>
        </p>
      </div>
    </main>
  );
}