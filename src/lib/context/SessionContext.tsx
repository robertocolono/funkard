'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

type User = {
  id: string;
  email: string;
  username?: string;
  role?: string;
};

type SessionContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  reload: () => void;
  logout: () => void;
};

const SessionContext = createContext(null as SessionContextType | null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null as User | null);
  const [loading, setLoading] = useState(true);

  const loadSession = useCallback(() => {
    setLoading(true);
    const token = localStorage.getItem('funkard_token');
    const storedUser = localStorage.getItem('funkard_user');

    if (!token || !storedUser) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('funkard_token');
    localStorage.removeItem('funkard_user');
    setUser(null);
  }, []);

  useEffect(() => {
    loadSession();
  }, [loadSession]);

  // Sincronizzazione tra tab/finestre
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'funkard_token' || e.key === 'funkard_user') {
        loadSession();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [loadSession]);

  return (
    <SessionContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        reload: loadSession,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession must be used within a SessionProvider');
  return ctx;
}
