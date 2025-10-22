"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    preferredCurrency: "EUR",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.username || !formData.email || !formData.password) {
      setError("Tutti i campi sono obbligatori")
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Le password non coincidono")
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Errore durante la registrazione")

      setSuccess(true)
      setTimeout(() => router.push("/login"), 2000)
    } catch (err: any) {
      console.error(err)
      setError("Errore durante la registrazione")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg p-8 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center mb-2">Crea un account Funkard</h1>
        <p className="text-gray-400 text-center mb-6">
          Esplora, compra e scambia carte da collezione
        </p>

        {/* Username */}
        <div>
          <label className="block mb-1 text-sm text-gray-400">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm text-gray-400">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Conferma Password */}
        <div>
          <label className="block mb-1 text-sm text-gray-400">Conferma Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Selezione valuta */}
        <div>
          <label className="block mb-1 text-sm text-gray-400">Valuta preferita</label>
          <select
            value={formData.preferredCurrency}
            onChange={(e) => handleChange("preferredCurrency", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="EUR">Euro (€)</option>
            <option value="USD">Dollaro ($)</option>
            <option value="GBP">Sterlina (£)</option>
            <option value="JPY">Yen (¥)</option>
            <option value="CHF">Franco Svizzero (CHF)</option>
            <option value="CAD">Dollaro Canadese (C$)</option>
            <option value="AUD">Dollaro Australiano (A$)</option>
          </select>
        </div>

        {/* Messaggi */}
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {success && <p className="text-green-400 text-sm">✅ Registrazione completata!</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50 text-black font-semibold py-3 rounded-lg transition-colors"
        >
          {loading ? "Creazione account..." : "Registrati"}
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Hai già un account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-yellow-400 hover:text-yellow-300 cursor-pointer"
          >
            Accedi qui
          </span>
        </p>
      </form>
    </div>
  )
}
