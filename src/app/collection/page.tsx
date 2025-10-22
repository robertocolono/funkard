'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/context/SessionContext';

export default function CollectionPage() {
  const { isAuthenticated, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/register');
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Caricamento...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <h1 className="text-3xl font-bold mb-8">La tua collezione</h1>
      <p className="text-gray-500">Qui vedrai le tue carte da collezione...</p>
      {/* Componenti reali della collezione */}
    </div>
  );
}