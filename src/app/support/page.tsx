'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createSupportTicket, fetchUserTickets } from '@/lib/funkardApi';
import { useSession } from '@/lib/context/SessionContext';

interface Ticket {
  id: string;
  subject: string;
  description: string;
  status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED';
  priority: string;
  category: string;
  createdAt: string;
}

interface User {
  id: string;
  email: string;
  username?: string;
}

const STATUS_COLOR = {
  NEW: 'bg-red-600/20 text-red-400',
  IN_PROGRESS: 'bg-orange-500/20 text-orange-400',
  RESOLVED: 'bg-green-500/20 text-green-400',
  ARCHIVED: 'bg-neutral-600/20 text-neutral-400',
} as const;

export default function SupportPage() {
  const { user, isAuthenticated } = useSession();
  const router = useRouter();
  
  const [tickets, setTickets] = useState([] as Ticket[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newTicket, setNewTicket] = useState({
    subject: '',
    description: '',
    priority: 'MEDIUM',
    category: 'GENERAL'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect se non autenticato
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/register');
    }
  }, [isAuthenticated, router]);

  const loadTickets = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchUserTickets(user?.email || '');
      setTickets(data || []);
    } catch (err) {
      setError('Errore nel caricamento dei ticket');
      console.error('Error loading tickets:', err);
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    if (isAuthenticated) {
      loadTickets();
    }
  }, [isAuthenticated, loadTickets]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicket.subject.trim() || !newTicket.description.trim()) {
      setError('Compila tutti i campi obbligatori');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      
      const ticketData = {
        email: user?.email || '',
        subject: newTicket.subject,
        message: newTicket.description
      };

      await createSupportTicket(ticketData);
      
      // Reset form
      setNewTicket({
        subject: '',
        description: '',
        priority: 'MEDIUM',
        category: 'GENERAL'
      });
      
      // Reload tickets
      await loadTickets();
      
    } catch (err) {
      setError('Errore nella creazione del ticket');
      console.error('Error creating ticket:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setNewTicket((prev: any) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  if (!isAuthenticated) {
    return null; // Redirect in corso
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Supporto</h1>
          <p className="text-muted-foreground">
            Gestisci i tuoi ticket di supporto o creane uno nuovo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Lista Ticket */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">I tuoi ticket</h2>
            
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-card border rounded-lg p-4 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : tickets.length === 0 ? (
              <div className="bg-card border rounded-lg p-8 text-center">
                <p className="text-muted-foreground">Nessun ticket trovato</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tickets.map((ticket: Ticket) => (
                  <div key={ticket.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${STATUS_COLOR[ticket.status as keyof typeof STATUS_COLOR]}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {ticket.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>#{ticket.id}</span>
                      <span>{new Date(ticket.createdAt).toLocaleDateString('it-IT')}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <Link 
                        href={`/support/chat/${ticket.id}`}
                        className="text-funkard-yellow hover:opacity-80 font-medium text-sm"
                      >
                        Apri chat / Dettagli →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Nuovo Ticket */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Nuovo ticket</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Oggetto *
                </label>
                <input
                  type="text"
                  value={newTicket.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-funkard-yellow focus:outline-none"
                  placeholder="Descrivi brevemente il problema"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Descrizione *
                </label>
                <textarea
                  value={newTicket.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-funkard-yellow focus:outline-none"
                  placeholder="Fornisci dettagli sul problema che stai riscontrando"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Priorità
                  </label>
                  <select
                    value={newTicket.priority}
                    onChange={(e) => handleInputChange('priority', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-funkard-yellow focus:outline-none"
                  >
                    <option value="LOW">Bassa</option>
                    <option value="MEDIUM">Media</option>
                    <option value="HIGH">Alta</option>
                    <option value="URGENT">Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Categoria
                  </label>
                  <select
                    value={newTicket.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-funkard-yellow focus:outline-none"
                  >
                    <option value="GENERAL">Generale</option>
                    <option value="TECHNICAL">Tecnico</option>
                    <option value="BILLING">Fatturazione</option>
                    <option value="ACCOUNT">Account</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-funkard-yellow text-black font-semibold py-2 px-4 rounded-md hover:opacity-90 disabled:opacity-50 transition"
              >
                {isSubmitting ? 'Creazione...' : 'Crea ticket'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}