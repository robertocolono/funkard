// prisma/seed.js
const { PrismaClient } = require("@prisma/client"); // eslint-disable-line
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Inizio seeding del database...");

  // Prima controlliamo se l'utente esiste già
  let user = await prisma.user.findUnique({
    where: { email: "seller@funkard.com" }
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: "seed_user",
        email: "seller@funkard.com",
        handle: "FunkardSeller",
        rating: 4.8,
        country: "IT",
      },
    });
    console.log("✅ Utente creato:", user.handle);
  } else {
    console.log("ℹ️ Utente già esistente:", user.handle);
  }

  // Controlliamo se il Charizard esiste già
  let charizard = await prisma.product.findFirst({
    where: { title: "Charizard ex (151)" }
  });

  if (!charizard) {
    charizard = await prisma.product.create({
      data: {
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
        imageUrl: "/images/sample/charizard.jpg",
        description: "Carta rara in condizioni perfette da collezione privata.",
        metadata: { cardNumber: "006/165", artist: "aky CG Works" },
        sellerId: user.id,
      },
    });
    console.log("✅ Charizard creato");
  } else {
    console.log("ℹ️ Charizard già esistente");
  }

  // Controlliamo se esistono già dati di price history per questo prodotto
  const existingHistory = await prisma.priceHistory.count({
    where: { productId: charizard.id }
  });

  if (existingHistory === 0) {
    // Aggiungiamo alcuni dati storici di prezzo
    await prisma.priceHistory.createMany({
      data: [
        {
          productId: charizard.id,
          date: new Date("2025-09-15"),
          priceEUR: 16500,
          source: "Marketplace",
          note: "Prezzo iniziale di listino"
        },
        {
          productId: charizard.id,
          date: new Date("2025-09-25"),
          priceEUR: 16800,
          source: "Market Analysis",
          note: "Aumento per domanda crescente"
        },
        {
          productId: charizard.id,
          date: new Date("2025-10-05"),
          priceEUR: 17200,
          source: "Marketplace",
          note: "Aggiustamento per rarità"
        },
        {
          productId: charizard.id,
          date: new Date("2025-10-12"),
          priceEUR: 17900,
          source: "Current Listing",
          note: "Prezzo attuale"
        }
      ]
    });

    console.log("✅ Price history creata per Charizard (4 entries)");
  } else {
    console.log("ℹ️ Price history già esistente:", existingHistory, "entries");
  }
}

main()
  .then(async () => {
    console.log("🎉 Database seeded successfully!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });