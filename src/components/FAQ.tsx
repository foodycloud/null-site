"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { faq } = siteConfig;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-4xl mx-auto w-full relative z-10"
      aria-labelledby="faq-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{faq.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">Frequently Answered</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] mb-2"
        >
          {faq.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {faq.subtitle}
        </p>
      </div>

      {/* Accordion List - High-Contrast & Crisp */}
      <div className="divide-y divide-[#22293D] border-y border-[#22293D] bg-[#101420]/90 rounded-xl overflow-hidden border border-[#22293D] shadow-md">
        {faq.questions.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-4 cursor-pointer group hover:bg-[#161D2E]"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm font-mono-tech text-[#D4FF00] font-bold">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#FFFFFF] group-hover:text-[#D4FF00] transition-colors leading-snug">
                    {item.q}
                  </span>
                </div>

                <span className="text-[11px] font-mono-tech text-[#CBD2E6] group-hover:text-[#D4FF00] transition-colors shrink-0 pt-0.5 font-semibold">
                  {isOpen ? "[ Close ]" : "[ Read ]"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 pl-12 sm:pl-16 text-xs sm:text-sm text-[#CBD2E6] leading-relaxed max-w-2xl border-t border-[#1C2436]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
