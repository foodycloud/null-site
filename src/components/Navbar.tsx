"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const navItems = [
  { href: "#premise", label: "Premise" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#thesis", label: "Thesis" },
  { href: "#community", label: "Community" },
  { href: "#token", label: "Token" },
  { href: "#transparency", label: "Transparency" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand } = siteConfig;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 border-b ${
          scrolled
            ? "border-[#222222] bg-[#0A0A0A]/95 backdrop-blur-sm"
            : "border-transparent bg-[#0A0A0A]"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo & Meta */}
          <Link
            href="/"
            className="flex items-baseline gap-3 text-[#F1F1ED] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#F1F1ED]"
            aria-label={`${brand.name} Homepage`}
          >
            <span className="font-mono-tech text-sm font-bold tracking-[0.2em] text-[#F1F1ED]">
              {brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-xs font-mono-tech uppercase tracking-wider text-[#858580] hover:text-[#F1F1ED] transition-colors cursor-pointer py-1.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#F1F1ED]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#token")}
              className="btn-minimal text-xs py-1.5 px-3 min-h-[36px]"
            >
              ENTER NULL →
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden btn-minimal text-xs py-1.5 px-2.5 min-h-[36px]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "ESC" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#0A0A0A] px-6 py-8 flex flex-col justify-between md:hidden border-b border-[#222222]">
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#858580] mb-2">
              Index
            </span>
            {navItems.map((item, idx) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-lg font-mono-tech uppercase tracking-wider text-[#F1F1ED] hover:text-[#858580] transition-colors flex items-center justify-between border-b border-[#222222] pb-3"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#858580]">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#222222] flex items-center justify-between font-mono-tech text-[10px] text-[#858580]">
            <span>{brand.tagline}</span>
            <span>{brand.year}</span>
          </div>
        </div>
      )}
    </>
  );
}
