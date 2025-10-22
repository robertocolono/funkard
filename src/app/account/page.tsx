'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function AccountPage() {
  const tabs = ['Profilo', 'Indirizzi di spedizione', 'Metodi di pagamento', 'Preferenze'];
  const [activeTab, setActiveTab] = useState('Profilo');

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header fisso */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Account</h1>
          <p className="text-sm text-muted-foreground">Gestisci le impostazioni del tuo profilo Funkard</p>
        </div>

        {/* Tabs */}
        <nav className="border-t border-border bg-card/30">
          <div className="max-w-5xl mx-auto flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                  activeTab === tab
                    ? 'text-funkard-yellow border-b-2 border-funkard-yellow'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Contenuto dinamico */}
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {activeTab === 'Profilo' && <ProfileSection />}
        {activeTab === 'Indirizzi di spedizione' && <ShippingSection />}
        {activeTab === 'Metodi di pagamento' && <PaymentSection />}
        {activeTab === 'Preferenze' && <PreferencesSection />}
      </main>
    </div>
  );
}

/* =====================
   🔸 Sezioni Componenti
   ===================== */

function ProfileSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Profilo personale</h2>
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <Field label="Nome completo" value="Mario Rossi" />
        <Field label="Email" value="mario.rossi@example.com" />
        <Field label="Valuta" value="EUR (€)" />
        <Field label="Data registrazione" value="21/10/2025" />
        <button className="bg-funkard-yellow text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
          Modifica password
        </button>
      </div>
    </section>
  );
}

function ShippingSection() {
  const addresses = [
    {
      id: 1,
      name: 'Indirizzo principale',
      street: 'Via Roma 12',
      city: 'Milano',
      cap: '20100',
      country: 'Italia',
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Indirizzi di spedizione</h2>
      <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-medium">{addr.name}</p>
              <p className="text-sm text-muted-foreground">
                {addr.street}, {addr.city} ({addr.cap}) - {addr.country}
              </p>
            </div>
            <div className="mt-3 md:mt-0 flex gap-2">
              <button className="text-sm px-3 py-2 bg-muted rounded-md hover:bg-muted-foreground/10 transition-colors">
                Modifica
              </button>
              <button className="text-sm px-3 py-2 bg-red-600/20 text-red-500 rounded-md hover:bg-red-600/30 transition-colors">
                Elimina
              </button>
            </div>
          </div>
        ))}
        <button className="bg-funkard-yellow text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
          + Aggiungi indirizzo
        </button>
      </div>
    </section>
  );
}

function PaymentSection() {
  const payments = [
    { id: 1, type: 'Visa', last4: '1234', expiry: '06/27' },
    { id: 2, type: 'MasterCard', last4: '5678', expiry: '03/28' },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Metodi di pagamento</h2>
      <div className="space-y-4">
        {payments.map((card) => (
          <div
            key={card.id}
            className="bg-card border border-border rounded-xl p-5 flex items-center justify-between"
          >
            <p>
              <span className="font-medium">{card.type}</span> •••• {card.last4} <br />
              <span className="text-sm text-muted-foreground">Scadenza: {card.expiry}</span>
            </p>
            <button className="text-sm px-3 py-2 bg-red-600/20 text-red-500 rounded-md hover:bg-red-600/30 transition-colors">
              Elimina
            </button>
          </div>
        ))}
        <button className="bg-funkard-yellow text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
          + Aggiungi metodo di pagamento
        </button>
      </div>
    </section>
  );
}

function PreferencesSection() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [language, setLanguage] = useState('it');

  // Carica il tema salvato
  useEffect(() => {
    const savedTheme = localStorage.getItem('funkard-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Cambia tema e salva
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('funkard-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Preferenze</h2>
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span>Tema</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
          >
            {theme === 'dark' ? 'Passa a Light' : 'Passa a Dark'}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span>Notifiche email</span>
          <input
            type="checkbox"
            checked={emailNotifs}
            onChange={() => setEmailNotifs(!emailNotifs)}
            className="accent-funkard-yellow scale-125"
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Lingua</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-background border border-border rounded-lg px-3 py-2 text-sm"
          >
            <option value="it">Italiano</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </section>
  );
}

/* Utility per campo */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}