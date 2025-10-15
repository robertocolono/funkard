# 🧠 Funkard Admin Setup

## Accesso Admin

Per accedere al pannello admin, devi impostare il token nel localStorage del browser:

```javascript
localStorage.setItem("funkard_admin_token", "YOUR_SECRET_KEY");
```

Poi vai su: `http://localhost:3000/admin`

## Funzionalità Admin

### 1. Lista Pending (`/admin`)
- Mostra tutti i prodotti in attesa di revisione
- Filtra per status: `new_item`, `insufficient_data`, `manual_check`
- Mostra ultimo aggiornamento e categoria

### 2. Dettaglio Prodotto (`/admin/[itemName]`)
- Visualizza il grafico trend del prodotto
- Informazioni complete del prodotto
- Azioni admin:
  - ✅ **Approva**: Rimuove dalla lista pending
  - 🔍 **Marca per revisione**: Flag per controllo futuro
  - ❌ **Rifiuta**: Rimuove dal sistema

## API Endpoints Richiesti

Il frontend si aspetta questi endpoint nell'API:

```
GET /api/admin/valuation/pending
→ Lista prodotti in attesa

GET /api/admin/valuation/product/{itemName}
→ Dettagli prodotto specifico

POST /api/admin/valuation/approve
→ Approva prodotto

POST /api/admin/valuation/reject  
→ Rifiuta prodotto

POST /api/admin/valuation/mark-review
→ Marca per revisione
```

## Sicurezza

⚠️ **IMPORTANTE**: Cambia `YOUR_SECRET_KEY` in produzione!

In futuro implementeremo:
- JWT con ruoli (USER, ADMIN)
- Autenticazione più robusta
- Log delle azioni admin

## Struttura File

```
src/app/admin/
├── layout.tsx          # Autenticazione admin
├── page.tsx            # Lista pending
└── [itemName]/
    └── page.tsx        # Dettaglio prodotto
```
