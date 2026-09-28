"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export default function Manifesto() {
  const { manifesto } = siteConfig;

  return (
    <section
      id="manifesto"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-4xl mx-auto w-full relative z-10"
      aria-labelledby="manifesto-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{manifesto.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">The Manifesto</span>
      </div>

      {/* Title */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2
          id="manifesto-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] mb-2"
        >
          {manifesto.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {manifesto.subtitle}
        </p>
      </div>

      {/* Statements List */}
      <div className="divide-y divide-[#22293D] border-y border-[#22293D] mb-12 bg-[#101420]/90 rounded-xl overflow-hidden border border-[#22293D] shadow-md">
        {manifesto.axioms.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="px-6 py-4 sm:py-5 flex items-center justify-between gap-4 group hover:bg-[#161D2E] transition-colors"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm font-mono-tech text-[#D4FF00] font-bold">
                0{idx + 1}
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-[#FFFFFF] group-hover:text-[#D4FF00] transition-colors">
                {line}
              </p>
            </div>
            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#98A2C2] group-hover:text-[#FFFFFF] transition-colors font-medium">
              Axiom
            </span>
          </motion.div>
        ))}
      </div>

      {/* Final Axiom */}
      <div className="pt-8 text-center max-w-xl mx-auto">
        <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#D4FF00] block mb-2 font-bold">
          Final Axiom
        </span>
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] leading-tight mb-2">
          {manifesto.conclusionTitle}
        </div>
        <p className="text-sm sm:text-base text-[#CBD2E6] font-normal leading-relaxed">
          {manifesto.conclusionDesc}
        </p>
      </div>

    </section>
  );
}
