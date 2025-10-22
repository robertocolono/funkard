'use client';
import { useState, useEffect } from 'react';

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
}

export function useAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);

  const loadAddresses = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/addresses`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('funkard_token')}` },
      });
      const data = await res.json();
      setAddresses(data);
    } catch (e) {
      console.error('Errore caricamento indirizzi:', e);
    } finally {
      setLoading(false);
    }
  };

  const addAddress = async (address: Omit<Address, 'id'>) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('funkard_token')}`,
      },
      body: JSON.stringify(address),
    });
    await loadAddresses();
  };

  const updateAddress = async (id: string, address: Partial<Address>) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/addresses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('funkard_token')}`,
      },
      body: JSON.stringify(address),
    });
    await loadAddresses();
  };

  const deleteAddress = async (id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/addresses/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('funkard_token')}` },
    });
    await loadAddresses();
  };

  useEffect(() => { loadAddresses(); }, []);

  return { addresses, loading, addAddress, updateAddress, deleteAddress, reload: loadAddresses };
}
