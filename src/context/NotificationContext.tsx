'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

interface Notification {
  ticketId: string;
  subject: string;
  unread: boolean;
}

type NotificationContextType = {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (ticketId: string) => void;
};

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  unreadCount: 0,
  markAsRead: () => {},
});

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // 📦 1️⃣ Carichiamo le notifiche salvate al mount
  useEffect(() => {
    const saved = localStorage.getItem('funkard_notifications');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setNotifications(parsed);
      } catch (err) {
        console.warn('Errore parsing notifiche salvate:', err);
      }
    }
  }, []);

  // 💾 2️⃣ Ogni volta che cambiano, salviamo su localStorage
  useEffect(() => {
    localStorage.setItem('funkard_notifications', JSON.stringify(notifications));
  }, [notifications]);

  // 📊 Calcolo automatico del totale non letti
  const unreadCount = notifications.filter((n) => n.unread).length;

  // 👀 Segna come letta una notifica specifica
  const markAsRead = useCallback((ticketId: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.ticketId === ticketId ? { ...n, unread: false } : n))
    );
  }, []);

  // 🎵 Riproduzione suono per nuove risposte
  const playNotificationSound = useCallback(() => {
    const audio = new Audio('/sounds/notification.mp3');
    audio.volume = 0.25; // volume basso, non invasivo
    audio.play().catch(() => {
      // evita errori autoplay
    });
  }, []);

  // 🎧 SSE real-time
  useEffect(() => {
    const email = localStorage.getItem('funkard_email');
    if (!email) return;

    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_URL || "https://funkard-backend.onrender.com"}/api/support/stream?email=${encodeURIComponent(email)}`
    );

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === 'ticket-reply') {
          setNotifications((prev) => {
            const exists = prev.find((n) => n.ticketId === data.ticketId);
            if (exists) {
              return prev.map((n) =>
                n.ticketId === data.ticketId ? { ...n, unread: true } : n
              );
            }
            return [
              ...prev,
              { ticketId: data.ticketId, subject: data.subject || 'Ticket aggiornato', unread: true },
            ];
          });

          // 🔔 Suono leggero
          playNotificationSound();

          // 💬 Toast visivo
          toast.custom(
            (t) => (
              <div
                onClick={() => {
                  toast.dismiss(t.id);
                  window.location.href = `/support/chat/${data.ticketId}`;
                }}
                className="cursor-pointer bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-3 shadow-lg flex flex-col gap-1 hover:border-yellow-500 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-sm font-semibold">💬 Nuova risposta</span>
                  <span className="text-gray-400 text-xs">
                    {new Date().toLocaleTimeString('it-IT')}
                  </span>
                </div>
                <div className="text-sm text-gray-300">{data.subject || 'Ticket aggiornato'}</div>
              </div>
            ),
            { duration: 5000 }
          );
        }

        if (data.type === 'ticket-resolved') {
          setNotifications((prev) => prev.filter((n) => n.ticketId !== data.ticketId));
          
          toast.success(`✅ Il ticket "${data.subject || 'senza titolo'}" è stato risolto.`);
        }
      } catch (err) {
        console.error('Errore SSE:', err);
      }
    };

    eventSource.onerror = (err) => {
      console.warn('SSE disconnected:', err);
      eventSource.close();
      // riconnessione automatica ogni 10s
      setTimeout(() => {
        window.location.reload();
      }, 10000);
    };

    return () => eventSource.close();
  }, [playNotificationSound]);

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};
