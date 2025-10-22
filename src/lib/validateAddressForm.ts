export interface AddressFormData {
  fullName: string
  addressLine: string
  city: string
  postalCode: string
  country: string
}

export interface ValidationErrors {
  [key: string]: string
}

export function validateAddressForm(data: AddressFormData): ValidationErrors {
  const errors: ValidationErrors = {}

  // Nome completo
  if (!data.fullName.trim()) {
    errors.fullName = "Il nome è obbligatorio."
  } else if (data.fullName.length < 2) {
    errors.fullName = "Il nome deve avere almeno 2 caratteri."
  } else if (data.fullName.length > 100) {
    errors.fullName = "Il nome è troppo lungo (max 100 caratteri)."
  }

  // Indirizzo principale
  if (!data.addressLine.trim()) {
    errors.addressLine = "L'indirizzo è obbligatorio."
  } else if (!/^[A-Za-z0-9\s,.'-]{2,100}$/.test(data.addressLine)) {
    errors.addressLine = "Inserisci un indirizzo valido (solo lettere, numeri e simboli comuni)."
  }

  // Città
  if (!data.city.trim()) {
    errors.city = "La città è obbligatoria."
  } else if (data.city.length < 2) {
    errors.city = "La città deve avere almeno 2 caratteri."
  } else if (data.city.length > 50) {
    errors.city = "La città è troppo lunga (max 50 caratteri)."
  }

  // CAP / Codice postale
  if (!data.postalCode.trim()) {
    errors.postalCode = "Il CAP è obbligatorio."
  } else if (!/^[A-Za-z0-9\- ]{3,10}$/.test(data.postalCode)) {
    errors.postalCode = "Inserisci un CAP valido (3–10 caratteri, lettere o numeri)."
  }

  // Paese
  if (!data.country.trim()) {
    errors.country = "Il Paese è obbligatorio."
  } else if (data.country.length < 2) {
    errors.country = "Il nome del Paese deve avere almeno 2 caratteri."
  }

  return errors
}
