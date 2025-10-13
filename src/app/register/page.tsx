"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://funkard-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Registrazione fallita");
      }

      const out = await res.json().catch(() => null);
      console.log("Registrazione OK:", out);
      alert("Registrazione completata!");
    } catch (err: unknown) {
      console.error("Errore registrazione:", err);
      const message = err instanceof Error ? err.message : "Errore durante la registrazione";
      alert(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-[#f2b237]">Crea il tuo account Funkard</h1>

        {/* --- Dati base --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="nome" placeholder="Nome completo" required className="input-funkard" />
          <input name="handle" placeholder="Username / Handle" required className="input-funkard" />
          <input type="email" name="email" placeholder="Email" required className="input-funkard" />
          <input type="password" name="password" placeholder="Password" required className="input-funkard" />
          <select name="paese" required className="input-funkard">
            <option value="">Seleziona Paese</option>
            <option value="IT">Italia</option>
            <option value="US">Stati Uniti</option>
            <option value="UK">Regno Unito</option>
            <option value="FR">Francia</option>
            <option value="DE">Germania</option>
          </select>
          <select name="tipoUtente" required className="input-funkard">
            <option value="PRIVATO">Privato</option>
            <option value="BUSINESS">Business</option>
          </select>
        </div>

        {/* --- Indirizzo di consegna --- */}
        <div>
          <h2 className="text-lg font-semibold mt-4 mb-2 text-[#f2b237]">Indirizzo di consegna (facoltativo)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="indirizzo" placeholder="Via e numero civico" className="input-funkard" />
            <input name="citta" placeholder="Città" className="input-funkard" />
            <input name="cap" placeholder="CAP" className="input-funkard" />
            <input name="telefono" placeholder="Telefono" className="input-funkard" />
          </div>
        </div>

        {/* --- Metodo di pagamento --- */}
        <div>
          <h2 className="text-lg font-semibold mt-4 mb-2 text-[#f2b237]">Metodo di pagamento preferito</h2>
          <select name="metodoPagamento" className="input-funkard">
            <option value="">Seleziona metodo</option>
            <option value="Carta">Carta di credito / debito</option>
            <option value="PayPal">PayPal</option>
            <option value="Crypto">Crypto</option>
          </select>
        </div>

        {/* --- Termini --- */}
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" name="accettaTermini" required className="w-4 h-4 accent-[#f2b237]" />
          <label className="text-sm text-gray-300">
            Dichiaro di aver letto e accettato i{" "}
            <Link href="/terms" className="underline text-[#f2b237] hover:text-[#ffcb4d]">
              Termini e Condizioni
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-[#f2b237] text-black font-bold py-3 rounded-xl hover:bg-[#ffcb4d] transition-all"
        >
          {loading ? "Creazione in corso..." : "Crea account"}
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Hai già un account?{" "}
          <Link href="/login" className="text-[#f2b237] hover:text-[#ffcb4d]">
            Accedi
          </Link>
        </p>
      </form>
    </main>
  );
}
