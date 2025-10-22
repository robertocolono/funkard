'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Features } from '@/components/Features';
import { GradeLensShowcase } from '@/components/GradeLensShowcase';
import { Footer } from '@/components/Footer';

export default function HomeMarketing() {
  const router = useRouter();
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // Simulazione API - sostituisci con getMarketplacePreview(4) quando disponibile
        const mockCards = [
          {
            id: '1',
            name: 'Charizard Base Set',
            price: 150,
            imageUrl: '/images/sample/charizard.jpg',
          },
          {
            id: '2', 
            name: 'Booster Box',
            price: 80,
            imageUrl: '/images/sample/booster-box.jpg',
          },
          {
            id: '3',
            name: 'Elite Trainer Box',
            price: 45,
            imageUrl: '/images/sample/etb.jpg',
          },
          {
            id: '4',
            name: 'Pikachu VMAX',
            price: 25,
            imageUrl: '/images/placeholder.svg',
          }
        ];
        setCards(mockCards);
      } catch {
        console.warn('Preview non disponibile');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="flex flex-col items-center text-center py-section px-4">
        <div className="mb-4">
          <Image
            src="/logo2.png"
            alt="Funkard Logo"
            width={160}
            height={160}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Esplora, compra, vendi e scambia la tua collezione con un semplice click!
        </h1>
        <p className="text-gray-500 max-w-2xl mb-8">
          Funkard è il marketplace moderno per collezionisti. Scopri il valore delle tue carte, gestisci la tua collezione e connettiti con la community.
        </p>
      </section>

      {/* PREVIEW MARKETPLACE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Carte in evidenza</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? (
            <p className="text-gray-400 col-span-full text-center">Caricamento...</p>
          ) : cards.length > 0 ? (
            cards.map((card) => (
              <div
                key={card.id}
                className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={card.imageUrl}
                  alt={card.name}
                  width={300}
                  height={400}
                  className="rounded-lg mb-3 object-cover w-full"
                />
                <p className="text-sm font-medium truncate">{card.name}</p>
                <p className="text-xs text-gray-500">{card.price}€</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              Nessuna carta disponibile al momento.
            </p>
          )}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/marketplace"
            className="bg-funkard-yellow text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Esplora il Marketplace
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <Features />

      {/* GRADE LENS SHOWCASE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Valuta le tue carte con GradeLens</h2>
        <GradeLensShowcase />
      </section>

      {/* SUPPORTO & COMMUNITY */}
      <section className="bg-muted py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Hai bisogno di aiuto o vuoi entrare nella community?</h2>
        <p className="text-gray-500 mb-6">
          Il nostro team di supporto e la community sono sempre pronti ad aiutarti a migliorare la tua esperienza su Funkard.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/support"
            className="bg-funkard-yellow text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Contatta il supporto
          </Link>
          <Link
            href="https://t.me/funkard"
            target="_blank"
            className="border border-border px-6 py-3 rounded-lg hover:bg-border/10 transition-colors"
          >
            Unisciti alla community
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">Inizia ora la tua avventura da collezionista</h2>
        <Link
          href="/register"
          className="bg-funkard-yellow text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Registrati ora
        </Link>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
