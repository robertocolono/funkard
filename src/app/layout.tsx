import "./globals.css";
import { ReactNode } from "react";
import Loader from "@/components/Loader";
import { SessionProvider } from "@/lib/context/SessionContext";

export const metadata = {
  title: "Funkard - Marketplace TCG",
  description: "Il collezionismo moderno, accessibile e divertente.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="relative bg-[#0a0a0a] text-white">
        <SessionProvider>
          <Loader />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}