"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const links = [
  { href: "#premise", label: "Premise" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#thesis", label: "Thesis" },
  { href: "#community", label: "Community" },
  { href: "#ledger", label: "Ledger" },
  { href: "#how", label: "Mechanics" },
  { href: "#internet", label: "Internet" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  const { brand, footer, socials } = siteConfig;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#22293D] bg-[#07090F] text-[#CBD2E6] py-20 px-6 sm:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#22293D]">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black tracking-[0.2em] text-[#FFFFFF]">{brand.name}</span>
              <span className="text-xs text-[#D4FF00] font-mono-tech font-bold">/ Ø</span>
            </div>
            <p className="text-xs sm:text-sm text-[#CBD2E6] max-w-sm leading-relaxed">
              {brand.tagline} {brand.shortDescription}
            </p>
          </div>

          {/* Directory */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#FFFFFF] font-bold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[#CBD2E6] hover:text-[#D4FF00] transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#FFFFFF] font-bold block mb-4">
                Official Channels
              </span>
              <div className="space-y-2 text-xs sm:text-sm font-mono-tech">
                <a
                  href={socials.x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#CBD2E6] hover:text-[#D4FF00] transition-colors"
                >
                  {socials.x.name}
                </a>
                <a
                  href={socials.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#CBD2E6] hover:text-[#D4FF00] transition-colors"
                >
                  {socials.telegram.name}
                </a>
                <a
                  href={socials.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#CBD2E6] hover:text-[#D4FF00] transition-colors"
                >
                  {socials.discord.name}
                </a>
              </div>
            </div>

            <button
              onClick={toTop}
              className="text-xs font-mono-tech uppercase tracking-wider text-[#CBD2E6] hover:text-[#D4FF00] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs leading-relaxed text-[#98A2C2]">
          <div className="max-w-2xl">
            {footer.disclaimer}
          </div>

          <div className="font-mono-tech text-[11px] text-[#CBD2E6] shrink-0 font-medium">
            {footer.copyright}
          </div>
        </div>

      </div>
    </footer>
  );
}
