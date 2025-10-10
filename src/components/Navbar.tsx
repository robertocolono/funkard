
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold">
        <span className="text-[#f2b237]">FUN</span>KARD
      </h1>

      <div className="flex space-x-6 text-lg">
        <a href="/marketplace" className="hover:text-[#f2b237] transition-colors">
          Marketplace
        </a>
        <a href="/register" className="hover:text-[#f2b237] transition-colors">
          Registrati
        </a>
      </div>
    </nav>
  );
}
