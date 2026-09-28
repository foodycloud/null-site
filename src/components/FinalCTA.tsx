"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function FinalCTA() {
  const { finalCta, socials } = siteConfig;

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="enter"
      className="py-24 md:py-36 px-6 sm:px-10 border-t border-[#22293D] max-w-5xl mx-auto w-full text-center flex flex-col items-center relative z-10"
      aria-label="Enter NULL"
    >
      <div className="max-w-2xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4FF00]/40 bg-[#D4FF00]/10 text-[11px] font-mono-tech uppercase tracking-wider text-[#D4FF00] mb-6 font-bold">
          <span>{finalCta.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#FFFFFF] mb-5 select-none">
          {finalCta.headlinePart1}
          <br />
          <span className="text-[#98A2C2] font-normal">UNTIL</span> {finalCta.headlinePart2.replace("UNTIL ", "")}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#CBD2E6] max-w-lg mb-8 leading-relaxed">
          {finalCta.subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={() => scrollTo("#ledger")}
            className="px-8 py-3.5 rounded-full btn-launch text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 shadow-lg"
          >
            <span>{finalCta.buttonText}</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono-tech uppercase tracking-wider text-[#CBD2E6] pt-6 border-t border-[#22293D] w-full max-w-md">
          <a
            href={socials.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4FF00] transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>{socials.x.name}</span>
          </a>
          <span className="text-[#3A4568]">/</span>
          <a
            href={socials.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4FF00] transition-colors flex items-center gap-1.5"
          >
            <Send size={14} />
            <span>Telegram</span>
          </a>
          <span className="text-[#3A4568]">/</span>
          <a
            href={socials.discord.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4FF00] transition-colors flex items-center gap-1.5"
          >
            <MessageSquare size={14} />
            <span>Discord</span>
          </a>
        </div>
      </div>
    </section>
  );
}
