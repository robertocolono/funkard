"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] text-gray-300 pt-16 pb-10 px-6 relative overflow-hidden">
      {/* Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-yellow-400/20 to-orange-500/10 rounded-full blur-[120px] opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.png"
              alt="Funkard Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="text-2xl font-bold text-yellow-400 tracking-wide">
              FUN<span className="text-white">KARD</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Il marketplace moderno per i collezionisti di carte TCG.  
            Sicuro, globale e costruito per passione.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigazione</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/marketplace" className="hover:text-yellow-400">Marketplace</Link></li>
            <li><Link href="/collection" className="hover:text-yellow-400">Collezione</Link></li>
            <li><Link href="/gradelens" className="hover:text-yellow-400">GradeLens</Link></li>
            <li><Link href="/support" className="hover:text-yellow-400">Supporto</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legale</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/terms" className="hover:text-yellow-400">Termini e Condizioni</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-yellow-400">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contatti</h3>
          <div className="flex gap-4 mt-2">
            <Link
              href="mailto:support@funkard.com"
              className="hover:text-yellow-400 transition"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://t.me/funkard"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <Send size={20} />
            </Link>
            <Link
              href="https://instagram.com/funkard"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://youtube.com/@funkard"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1f1f1f] mt-14 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Funkard. Tutti i diritti riservati.  
        <span className="block text-gray-600 mt-1">Made by collezionisti, per collezionisti.</span>
      </div>
    </footer>
  );
}