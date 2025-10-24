import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { SessionProvider } from "@/lib/context/SessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Funkard",
  description: "Marketplace TCG per collezionisti di tutto il mondo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-black text-white`}>
        <SessionProvider>
          <header className="border-b border-neutral-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-bold tracking-tight">
                <span className="text-yellow-400">FUN</span>
                <span className="text-white">KARD</span>
              </Link>

              <nav className="flex items-center space-x-10 text-sm">
                <Link href="/marketplace" className="hover:text-yellow-400 transition">
                  Marketplace
                </Link>
                <Link href="/collezione" className="hover:text-yellow-400 transition">
                  Collezione
                </Link>
                <Link href="/gradelens" className="hover:text-yellow-400 transition">
                  GradeLens
                </Link>
                <Link href="/supporto" className="hover:text-yellow-400 transition">
                  Supporto
                </Link>
                <Link
                  href="/registrati"
                  className="ml-4 rounded-md bg-yellow-400 text-black font-semibold px-4 py-2 hover:bg-yellow-500 transition"
                >
                  Registrati
                </Link>
              </nav>
            </div>
          </header>

          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}