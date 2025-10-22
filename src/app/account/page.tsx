'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/context/SessionContext';
import { useRouter } from 'next/navigation';
import ShippingSection from './components/ShippingSection';
import PaymentSection from './components/PaymentSection';
import { fetchShippingAddresses, fetchPaymentMethods } from '@/lib/funkardApi';

export default function AccountPage() {
  const { isAuthenticated, loading } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'shipping' | 'payments'>('shipping');
  const [shippingData, setShippingData] = useState<any[]>([]);
  const [paymentData, setPaymentData] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/register');
    }
  }, [isAuthenticated, loading, router]);

  const loadData = async () => {
    setLoadingData(true);
    try {
      const [shipping, payments] = await Promise.all([
        fetchShippingAddresses(),
        fetchPaymentMethods(),
      ]);
      setShippingData(shipping);
      setPaymentData(payments);
    } catch (err) {
      console.error('Errore caricamento dati account:', err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

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

  if (loadingData) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-funkard-yellow mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Caricamento dati account...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 px-4 md:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Il tuo account</h1>

        {/* Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-8">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-4 py-2 font-semibold transition-colors ${
              activeTab === 'shipping'
                ? 'text-funkard-yellow border-b-2 border-funkard-yellow'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            Indirizzi di spedizione
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2 font-semibold transition-colors ${
              activeTab === 'payments'
                ? 'text-funkard-yellow border-b-2 border-funkard-yellow'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            Metodi di pagamento
          </button>
        </div>

        {/* Contenuto tab */}
        {activeTab === 'shipping' && (
          <ShippingSection
            data={shippingData}
            onUpdate={loadData}
          />
        )}
        {activeTab === 'payments' && (
          <PaymentSection
            data={paymentData}
            onUpdate={loadData}
          />
        )}
      </div>
    </div>
  );
}
