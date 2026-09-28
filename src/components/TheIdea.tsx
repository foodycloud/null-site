"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, Layers, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const icons = [ShieldAlert, Zap, Layers, Sparkles];

export default function TheIdea() {
  const { premise } = siteConfig;

  return (
    <section
      id="premise"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-5xl mx-auto w-full relative z-10"
      aria-labelledby="premise-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{premise.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">The Premise</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <motion.h2
          id="premise-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] leading-snug mb-3"
        >
          {premise.title}
        </motion.h2>
        <p className="text-sm sm:text-base text-[#CBD2E6] leading-relaxed">
          {premise.subtitle}
        </p>
      </div>

      {/* 4 Luminous Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {premise.pillars.map((p, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-xl glow-card transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-[#141A28] border border-[#2B354F] flex items-center justify-center text-[#D4FF00] mb-4 shadow-sm">
                <Icon size={17} />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF] mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD2E6] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Thesis Quote Callout */}
      <div className="p-6 sm:p-8 rounded-2xl glow-card text-center max-w-2xl mx-auto border border-[#2B354F]">
        <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#D4FF00] block mb-2 font-bold">
          The Core Hypothesis
        </span>
        <p className="text-base sm:text-lg font-bold tracking-tight text-[#FFFFFF] leading-snug">
          &ldquo;{premise.thesisQuestion}&rdquo;
        </p>
      </div>
    </section>
  );
}
