export function getPostalCodePlaceholder(countryCode: string): string {
  switch (countryCode.toUpperCase()) {
    case "IT":
      return "Es. 00184" // Italia
    case "FR":
      return "Es. 75008" // Francia
    case "DE":
      return "Es. 10115" // Germania
    case "ES":
      return "Es. 28013" // Spagna
    case "GB":
      return "Es. SW1A 1AA" // Regno Unito
    case "US":
      return "Es. 90210 o 90210-1234" // Stati Uniti
    case "CA":
      return "Es. M5V 2T6" // Canada
    case "AU":
      return "Es. 2000" // Australia
    case "BR":
      return "Es. 01001-000" // Brasile
    case "JP":
      return "Es. 100-0001" // Giappone
    case "SE":
      return "Es. 114 55" // Svezia
    case "NL":
      return "Es. 1012 JS" // Paesi Bassi
    case "PL":
      return "Es. 00-001" // Polonia
    case "CH":
      return "Es. 8001" // Svizzera
    case "BE":
      return "Es. 1000" // Belgio
    default:
      return "Es. CAP o ZIP" // fallback universale
  }
}
