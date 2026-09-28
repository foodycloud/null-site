"use client";

import { motion } from "framer-motion";
import { Layers, Flame, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const icons = [Layers, Flame, Sparkles];

export default function WhyNull() {
  const { thesis } = siteConfig;

  return (
    <section
      id="thesis"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-6xl mx-auto w-full relative z-10"
      aria-labelledby="thesis-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{thesis.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">The Thesis</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2
          id="thesis-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] mb-2"
        >
          {thesis.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {thesis.subtitle}
        </p>
      </div>

      {/* 3 Luminous Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {thesis.columns.map((col, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`p-6 sm:p-7 rounded-xl glow-card flex flex-col justify-between transition-all ${
                col.isChosen
                  ? "border-[#D4FF00]/50 shadow-[0_0_24px_rgba(212,255,0,0.1)] bg-[#141B2B]"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    col.isChosen ? "bg-[#D4FF00]/20 text-[#D4FF00]" : "bg-[#141A28] text-[#CBD2E6]"
                  }`}>
                    <Icon size={17} />
                  </div>
                  <span className={`text-[11px] font-mono-tech uppercase px-2.5 py-0.5 rounded-full font-bold ${
                    col.isChosen
                      ? "bg-[#D4FF00]/20 text-[#D4FF00] border border-[#D4FF00]/40"
                      : "bg-[#141A28] text-[#98A2C2] border border-[#22293D]"
                  }`}>
                    {col.num}
                  </span>
                </div>

                <div className="text-[11px] font-mono-tech text-[#D4FF00] mb-1.5 font-bold tracking-wider uppercase">
                  {col.subtitle}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-2.5 tracking-tight">
                  {col.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#CBD2E6] leading-relaxed">
                  {col.copy}
                </p>
              </div>

              {col.isChosen && (
                <div className="mt-6 pt-3 border-t border-[#2B354F] text-[11px] font-mono-tech text-[#D4FF00] font-bold">
                  ✓ THE CHOSEN BLUEPRINT
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
