"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      // 🔧 chiamata al backend Java
      const res = await fetch("https://funkard-api.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const data = await res.json();

      if (res.ok) {
        // salva token solo se “Ricordami” è selezionato
        if (form.remember && data?.token) localStorage.setItem("funkard_token", data.token);
        setMessage("✅ Accesso riuscito!");
        router.push("/");
      } else {
        setMessage(`❌ ${data?.error || "Credenziali non valide"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Errore di connessione al server.");
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-2">Accedi al tuo account</h1>
      <p className="text-gray-400 mb-8">Bentornato su Funkard 👋</p>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:border-yellow-500 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:border-yellow-500 outline-none"
          required
        />

        <label className="flex items-center gap-2 text-sm text-gray-400">
          <input
            type="checkbox"
            checked={form.remember}
            onChange={(e) => setForm({ ...form, remember: e.target.checked })}
            className="accent-yellow-500"
          />
          Ricordami
        </label>

        <button
          type="submit"
          className="btn-funkard py-2"
        >
          Accedi
        </button>

        {message && <p className="text-center mt-2 text-sm text-gray-300">{message}</p>}
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
    </main>
  );
}