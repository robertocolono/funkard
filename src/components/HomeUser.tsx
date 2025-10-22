'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export default function HomeUser() {
  const [featured, setFeatured] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // Simulazione API - sostituisci con getFeaturedCards() quando disponibile
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
          },
          {
            id: '5',
            name: 'Lugia Neo Genesis',
            price: 120,
            imageUrl: '/images/placeholder.svg',
          },
          {
            id: '6',
            name: 'Blastoise Base Set',
            price: 80,
            imageUrl: '/images/placeholder.svg',
          },
          {
            id: '7',
            name: 'Venusaur Base Set',
            price: 70,
            imageUrl: '/images/placeholder.svg',
          },
          {
            id: '8',
            name: 'Mewtwo Base Set',
            price: 60,
            imageUrl: '/images/placeholder.svg',
          }
        ];
        setFeatured(mockCards);
      } catch {
        console.warn('Errore caricamento carte in evidenza');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* SEZIONE CARTE IN EVIDENZA */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Carte in evidenza</h1>

        {loading ? (
          <p className="text-gray-400 text-center">Caricamento...</p>
        ) : featured.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {featured.map((card) => (
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
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">
            Nessuna carta in evidenza al momento.
          </p>
        )}
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

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
