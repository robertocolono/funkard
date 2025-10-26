export interface MarketCard {
  id: string;
  title: string;                // Nome della carta o prodotto
  game: string;                 // Pokémon, One Piece, NBA, ecc.
  tcgType: "TCG" | "SPORT";     // Categoria
  productType: "card" | "booster" | "box" | "deck" | "etb" | "accessory";
  condition: string;            // Mint 9/10, PSA 9, ecc.
  gradeCompany?: string;        // PSA / BGS / CGC (solo se gradate)
  gradeValue?: number;          // 10 / 9.5 / 9 ...
  price: number;                // Prezzo in euro
  currency: string;             // "EUR", "USD"
  year?: number;                // Anno di rilascio
  images: {
    front: string;
    back: string;
    angle1?: string;
    angle2?: string;
    side1?: string;
    side2?: string;
  };
  seller: {
    id: string;
    username: string;
    verified: boolean;
    type: "user" | "business";
  };
  status: "available" | "sold";
  createdAt: string;
}
