const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Crea utente demo
  const user = await prisma.user.upsert({
    where: { email: "demo@funkard.com" },
    update: {},
    create: {
      email: "demo@funkard.com",
      username: "funkard_demo",
      name: "Demo Seller",
      listings: {
        create: [
          {
            title: "Charizard Holo 1st Edition",
            description: "Carta leggendaria, ottimo stato.",
            price: 1200,
            condition: "Near Mint",
            imageUrl: "https://images.pokemontcg.io/base2/4_hires.png",
            card: {
              create: {
                name: "Charizard",
                setName: "Base Set 2",
                rarity: "Ultra Rare",
                marketValue: 1100,
              },
            },
          },
          {
            title: "Blue-Eyes White Dragon",
            description: "Carta storica Yu-Gi-Oh!",
            price: 800,
            condition: "Lightly Played",
            imageUrl: "https://static.wikia.nocookie.net/yugioh/images/f/fd/BlueEyesWhiteDragon-LOB-EN-UR-1E.png",
            card: {
              create: {
                name: "Blue-Eyes White Dragon",
                setName: "Legend of Blue Eyes White Dragon",
                rarity: "Ultra Rare",
                marketValue: 750,
              },
            },
          },
        ],
      },
    },
  });

  console.log("✅ Database popolato con successo per Funkard!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });