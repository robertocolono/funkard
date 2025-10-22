'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUserProfileCompletion } from '@/lib/checkUserProfileCompletion';
import { toast } from 'sonner';

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const proceedToCheckout = async (productId: string) => {
    setLoading(true);
    try {
      const status = await checkUserProfileCompletion();
      
      if (!status.hasAddress) {
        toast.error('Aggiungi un indirizzo di spedizione per completare l\'acquisto');
        router.push('/account/addresses?fromCheckout=true');
        return;
      }
      
      if (!status.hasPayment) {
        toast.error('Aggiungi un metodo di pagamento per completare l\'acquisto');
        router.push('/account/payments?fromCheckout=true');
        return;
      }
      
      // Se tutto è a posto, procedi con l'acquisto
      await handlePurchase(productId);
      
    } catch (error) {
      console.error('Errore checkout:', error);
      toast.error('Errore durante la verifica del profilo');
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (productId: string) => {
    try {
      // Qui implementerai la logica di acquisto
      // Per ora mostriamo un toast di successo
      toast.success('Acquisto completato! 🎉');
      
      // Redirect alla pagina di successo o alla collezione
      router.push('/collection');
      
    } catch (error) {
      console.error('Errore acquisto:', error);
      toast.error('Errore durante l\'acquisto');
    }
  };

  return {
    proceedToCheckout,
    loading,
  };
}
