export default function SupportCommunity() {
  return (
    <section className="mt-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Supporto */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-4">Supporto</h3>
          <p className="text-zinc-400 mb-4">
            Hai domande o problemi? Il nostro team è a disposizione. Apri un ticket e ti aiutiamo subito.
          </p>
          <a 
            href="/support" 
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Vai al supporto →
          </a>
        </div>

        {/* Community */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-4">Community</h3>
          <p className="text-zinc-400 mb-4">
            Scopri consigli, guide e novità dal mondo del collezionismo. Condividi esperienze con altri collezionisti.
          </p>
          <a 
            href="/community" 
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Entra in community →
          </a>
        </div>
      </div>

      {/* Bottone Registrati Centrale */}
      <div className="text-center mt-12">
        <a
          href="/register"
          className="inline-block bg-yellow-400 text-black font-bold rounded-xl px-12 py-4 text-lg hover:bg-yellow-300 transition-colors"
        >
          Registrati ora
        </a>
      </div>
    </section>
  );
}
