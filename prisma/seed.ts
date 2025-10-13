// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Prima creiamo un utente
  const user = await prisma.user.create({
    data: {
      id: "seed_user",
      email: "seller@funkard.com",
      passwordHash: "seed-password-hash", // placeholder
      handle: "FunkardSeller",
      nome: "Demo Seller",
      paese: "IT",
      tipoUtente: "BUSINESS",
      indirizzo: "Via Roma 1",
      citta: "Roma",
      cap: "00100",
      telefono: "+39 333 0000000",
      metodoPagamento: "Carta",
      accettaTermini: true,
      verified: true,
    },
  });

  console.log("Utente creato:", user.handle);

  // Poi creiamo i prodotti
  await prisma.product.createMany({
    data: [
      {
        title: "Charizard ex (151)",
        type: "SINGLE",
        tcg: "Pokémon",
        setName: "Pokémon 151",
        releaseYear: 2023,
        rarity: "Ultra Rare",
        edition: "Regular",
        isSealed: false,
        condition: "MINT",
        priceEUR: 17900,
        quantity: 1,
        imageUrl: "/images/placeholder.svg",
        description: "Carta rara in condizioni perfette da collezione privata.",
        metadata: { cardNumber: "006/165", artist: "aky CG Works" },
        sellerId: "seed_user",
      },
      {
        title: "Scarlet & Violet Booster Box",
        type: "BOX",
        tcg: "Pokémon",
        setName: "Scarlet & Violet",
        releaseYear: 2023,
        isSealed: true,
        priceEUR: 13900,
        quantity: 2,
        imageUrl: "/images/placeholder.svg",
        description: "36 pacchetti sigillati, perfetto per draft o collezione.",
        metadata: { boosterCount: 36, language: "IT" },
        sellerId: "seed_user",
      },
      {
        title: "Elite Trainer Box Paradox Rift",
        type: "ETB",
        tcg: "Pokémon",
        setName: "Paradox Rift",
        releaseYear: 2023,
        isSealed: true,
        priceEUR: 4500,
        quantity: 3,
        imageUrl: "/images/placeholder.svg",
        description: "ETB con 9 booster, dadi, segnalini e deck box.",
        metadata: { boosterCount: 9, includes: ["dice", "damage_counters", "deckbox"] },
        sellerId: "seed_user",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("✅ Database seeded successfully!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });