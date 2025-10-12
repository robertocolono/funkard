import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111]/95 backdrop-blur-md border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1 select-none">
          <span className="text-[#f2b237] font-[Bungee] text-3xl leading-none">FUN</span>
          <span className="text-white font-[Bungee] text-3xl leading-none">KARD</span>
        </Link>

        {/* Registrati (solo testo) */}
        <Link
          href="/register"
          className="mr-2 font-semibold text-[#f2b237] hover:text-[#ffca47] transition-colors duration-200"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
}