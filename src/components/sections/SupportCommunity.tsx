import Link from "next/link";

export default function SupportCommunity() {
  return (
    <section
      className="rounded-xl border bg-[var(--card)] p-6 shadow-card"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Supporto</h3>
          <p className="mb-4 text-[var(--text-muted)]">
            Hai domande o problemi? Il nostro team è a disposizione. Apri un ticket e ti aiutiamo subito.
          </p>
          <Link href="/support" className="text-[var(--accent)] hover:opacity-80">
            Vai al supporto →
          </Link>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">Community</h3>
          <p className="mb-4 text-[var(--text-muted)]">
            Scopri consigli, guide e novità dal mondo del collezionismo. Condividi esperienze con altri collezionisti.
          </p>
          <Link href="/community" className="text-[var(--accent)] hover:opacity-80">
            Entra in community →
          </Link>
        </div>
      </div>
    </section>
  );
}
