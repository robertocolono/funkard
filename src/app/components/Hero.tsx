export default function Hero() {
  return (
    <section className="text-center mt-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Esplora, compra, vendi e scambia la tua collezione con un semplice click!
      </h2>
      <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
        Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
      </p>
      <a
        href="/marketplace"
        className="inline-block bg-yellow-400 text-black font-semibold rounded-xl px-6 py-3 hover:bg-yellow-300 transition"
      >
        Esplora il marketplace →
      </a>
    </section>
  );
}
