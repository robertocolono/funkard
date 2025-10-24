'use client';
import { useState, useEffect } from 'react';

interface Payment {
  id: string;
  cardType: string;
  last4: string;
  name: string;
  expiry: string;
  country: string;
}

export function usePayments() {
  const [payments, setPayments] = useState([] as Payment[]);
  const [loading, setLoading] = useState(false);

  const loadPayments = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/payments`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('funkard_token')}` },
      });
      const data = await res.json();
      setPayments(data);
    } catch (e) {
      console.error('Errore caricamento metodi di pagamento:', e);
    } finally {
      setLoading(false);
    }
  };

  const addPayment = async (payment: Omit<Payment, 'id' | 'last4'> & { cardNumber: string }) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('funkard_token')}`,
      },
      body: JSON.stringify(payment),
    });
    await loadPayments();
  };

  const updatePayment = async (id: string, payment: Partial<Payment>) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/payments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('funkard_token')}`,
      },
      body: JSON.stringify(payment),
    });
    await loadPayments();
  };

  const deletePayment = async (id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/payments/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('funkard_token')}` },
    });
    await loadPayments();
  };

  useEffect(() => { loadPayments(); }, []);

  return { payments, loading, addPayment, updatePayment, deletePayment, reload: loadPayments };
}
