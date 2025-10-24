"use client"

import { useState } from "react"
import { validateAddressForm, AddressFormData } from "@/lib/validateAddressForm"
import { getPostalCodePlaceholder } from "@/lib/getPostalCodePlaceholder"

interface AddressFormProps {
  initialData?: AddressFormData
  onSave: (data: AddressFormData) => Promise<void>
}

export default function AddressForm({ initialData, onSave }: AddressFormProps) {
  const [formData, setFormData] = useState(
    initialData || {
      fullName: "",
      addressLine: "",
      city: "",
      postalCode: "",
      country: "IT",
    } as AddressFormData
  )

  const [errors, setErrors] = useState({} as Record<string, string>)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (field: keyof AddressFormData, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev: any) => ({ ...prev, [field]: "" })) // pulizia errore
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validateAddressForm(formData)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setLoading(true)
    try {
      await onSave(formData)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error(err)
      alert("Errore nel salvataggio dell'indirizzo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-zinc-900 text-white rounded-xl border border-zinc-800 p-6 w-full max-w-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Indirizzo di spedizione</h2>

      <div>
        <label className="block mb-1 text-sm text-gray-400">Nome completo</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-400">Indirizzo</label>
        <input
          type="text"
          value={formData.addressLine}
          onChange={(e) => handleChange("addressLine", e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.addressLine && <p className="text-red-400 text-sm mt-1">{errors.addressLine}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-400">Città</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm text-gray-400">CAP</label>
          <input
            type="text"
            value={formData.postalCode}
            placeholder={getPostalCodePlaceholder(formData.country)}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.postalCode && <p className="text-red-400 text-sm mt-1">{errors.postalCode}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-400">Paese</label>
          <select
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="IT">Italia</option>
            <option value="FR">Francia</option>
            <option value="DE">Germania</option>
            <option value="ES">Spagna</option>
            <option value="GB">Regno Unito</option>
            <option value="US">Stati Uniti</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="BR">Brasile</option>
            <option value="JP">Giappone</option>
          </select>
          {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50 text-black font-semibold py-3 rounded-lg transition-colors"
      >
        {loading ? "Salvataggio..." : "Salva indirizzo"}
      </button>

      {success && (
        <p className="text-green-400 text-center mt-3">✅ Indirizzo salvato correttamente</p>
      )}
    </form>
  )
}
