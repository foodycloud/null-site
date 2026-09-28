"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const navItems = [
  { href: "#premise", label: "Premise" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#thesis", label: "Thesis" },
  { href: "#community", label: "Community" },
  { href: "#ledger", label: "Token & Ledger" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand } = siteConfig;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#22293D] bg-[#0A0D14]/95 backdrop-blur-xl shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-[#FFFFFF] hover:text-[#D4FF00] transition-colors group"
            aria-label={`${brand.name} Homepage`}
          >
            <div className="w-8 h-8 rounded-lg bg-[#141A28] border border-[#2B354F] flex items-center justify-center text-sm font-bold text-white group-hover:border-[#D4FF00] group-hover:text-[#D4FF00] transition-colors shadow-sm">
              Ø
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-[0.2em] text-[#FFFFFF] group-hover:text-[#D4FF00] transition-colors leading-none">
                {brand.name}
              </span>
              <span className="text-[9px] font-mono-tech text-[#98A2C2] tracking-widest mt-1">
                GENESIS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121724]/90 px-3 py-1.5 rounded-full border border-[#22293D] backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-1.5 text-xs font-medium text-[#CBD2E6] hover:text-[#FFFFFF] hover:bg-[#1C2337] rounded-full transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Live Launch Action */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#CBD2E6]">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-ping" />
              <span className="text-[#D4FF00] font-bold text-[11px] tracking-wider">LIVE SOON</span>
            </div>

            <button
              onClick={() => scrollTo("#ledger")}
              className="px-5 py-2.5 rounded-full btn-launch text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Deck</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xs font-mono-tech uppercase tracking-widest text-[#FFFFFF] px-3 py-2 rounded-lg bg-[#141A28] border border-[#22293D]"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-[#0A0D14]/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between md:hidden border-b border-[#22293D]"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#D4FF00] mb-2 block font-bold">
                Index Navigation
              </span>
              {navItems.map((item, idx) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-2xl font-bold tracking-tight text-[#FFFFFF] hover:text-[#D4FF00] transition-colors flex items-baseline justify-between border-b border-[#22293D] pb-3"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono-tech text-[#677294]">0{idx + 1}</span>
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-[#22293D]">
              <button
                onClick={() => scrollTo("#ledger")}
                className="w-full py-4 rounded-xl btn-launch text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2"
              >
                <span>Enter Launch Portal</span>
                <ArrowUpRight size={16} />
              </button>
              <div className="text-[11px] font-mono-tech text-[#CBD2E6] flex justify-between">
                <span>{brand.tagline}</span>
                <span className="text-[#D4FF00]">GENESIS {brand.year}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
