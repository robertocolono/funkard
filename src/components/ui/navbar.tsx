import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-[#1a1a1a]">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        <span className="text-[#f2b237]">FUN</span>KARD
      </Link>

      <div className="flex items-center space-x-8 text-lg">
        <Link href="/marketplace" className="hover:text-[#f2b237] transition-colors">
          Marketplace
        </Link>
        <Link href="/register" className="hover:text-[#f2b237] transition-colors">
          Registrati
        </Link>
      </div>
    </nav>
  );
}