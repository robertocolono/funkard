'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useSession } from '@/lib/context/SessionContext';
import { useRouter } from 'next/navigation';

const tabs = [
  { id: 'account', label: 'Account' },
  { id: 'preferences', label: 'Preferenze' },
  { id: 'history', label: 'Storico attività' },
  { id: 'security', label: 'Sicurezza' },
  { id: 'shipping', label: 'Indirizzi di spedizione' },
  { id: 'payment', label: 'Metodi di pagamento' },
];

export default function AccountPage() {
  const { isAuthenticated, loading } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('account');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/register');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-funkard-yellow mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Caricamento...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const renderSection = () => {
    switch (activeTab) {
      case 'account':
        return <div>📄 Sezione Account (dati utente, email, nome, ecc.)</div>;
      case 'preferences':
        return <div>⚙️ Sezione Preferenze (tema, lingua, notifiche)</div>;
      case 'history':
        return <div>🧾 Storico attività (ticket, vendite, valutazioni)</div>;
      case 'security':
        return <div>🔒 Sicurezza (password, sessioni attive, logout)</div>;
      case 'shipping':
        return <div>📦 Indirizzi di spedizione (multipli salvati)</div>;
      case 'payment':
        return <div>💳 Metodi di pagamento (coming soon)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Account utente</h1>
          <div className="flex overflow-x-auto sm:overflow-visible mt-3 sm:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                  activeTab === tab.id
                    ? 'text-funkard-yellow font-semibold'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-funkard-yellow rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenuto sezione */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}
