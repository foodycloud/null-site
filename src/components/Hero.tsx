"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, ShieldCheck, Sparkles, Flame, Users } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = [Sparkles, ShieldCheck, Users, Flame];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { hero, launchStatus, socials } = siteConfig;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 max-w-6xl mx-auto w-full z-10">
      
      {/* Top Launch Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech tracking-wider text-[#CBD2E6] uppercase border-b border-[#22293D] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]"></span>
          </span>
          <span className="text-[#FFFFFF] font-semibold text-[11px]">{launchStatus.statusBadge}</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-[#D4FF00] font-bold">{launchStatus.highlightText}</span>
        </div>
      </div>

      {/* Center Typographic Hero */}
      <div className="my-auto py-10 sm:py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl flex flex-col items-center"
        >
          {/* Live Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4FF00]/40 bg-[#D4FF00]/10 text-[11px] font-mono-tech uppercase tracking-wider text-[#D4FF00] mb-6">
            <Flame size={12} className="animate-pulse" />
            <span>{hero.badge}</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#FFFFFF] mb-5 select-none">
            {hero.headlinePart1}
            <br />
            <span className="text-[#98A2C2] font-normal">UNTIL</span> {hero.headlinePart2.replace("UNTIL ", "")}
          </h1>

          {/* Supporting Subhead - Crisp High-Contrast Silver */}
          <p className="text-sm sm:text-base md:text-lg text-[#CBD2E6] max-w-xl font-normal leading-relaxed mb-8 text-balance">
            {hero.subhead}
          </p>

          {/* Action CTAs Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => scrollTo("#ledger")}
              className="px-6 py-3 rounded-full btn-launch text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>{hero.primaryCtaText}</span>
              <ArrowUpRight size={14} />
            </button>

            <a
              href={socials.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#141A28] hover:bg-[#1E263B] text-[#FFFFFF] hover:text-[#D4FF00] border border-[#2B354F] text-xs font-mono-tech tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send size={13} />
              <span>{hero.secondaryCtaText}</span>
            </a>

            <button
              onClick={() => scrollTo("#manifesto")}
              className="px-5 py-3 rounded-full bg-[#101420] hover:bg-[#171E30] text-[#CBD2E6] hover:text-[#FFFFFF] border border-[#22293D] text-xs font-mono-tech tracking-wider uppercase transition-all cursor-pointer"
            >
              {hero.tertiaryCtaText}
            </button>
          </div>
        </motion.div>
      </div>

      {/* 4 Launch Pillars Strip */}
      <div className="pt-6 border-t border-[#22293D] grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
        {hero.guaranteeBadges.map((badge, idx) => {
          const Icon = iconMap[idx % iconMap.length];
          return (
            <div key={badge.title} className="p-4 rounded-xl glow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFFFFF] mb-1.5">
                <Icon size={14} className="text-[#D4FF00]" />
                <span>{badge.title}</span>
              </div>
              <p className="text-[12px] text-[#CBD2E6] leading-relaxed">
                {badge.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
