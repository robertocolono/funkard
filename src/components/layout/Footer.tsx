export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-2">Navigazione</h4>
            <ul className="space-y-1 text-zinc-300">
              <li><a href="/market">Marketplace</a></li>
              <li><a href="/collection">Collezione</a></li>
              <li><a href="/gradelens">GradeLens</a></li>
              <li><a href="/support">Supporto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legale</h4>
            <ul className="space-y-1 text-zinc-300">
              <li><a href="/terms">Termini e Condizioni</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contatti</h4>
            <ul className="space-y-1 text-zinc-300">
              <li>info@funkard.com</li>
              <li>@funkard</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Funkard — made by collezionisti, per collezionisti.
        </p>
      </div>
    </footer>
  );
}
