"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export default function TheInternet() {
  const { theInternet } = siteConfig;

  return (
    <section
      id="internet"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-5xl mx-auto w-full relative z-10"
      aria-labelledby="internet-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{theInternet.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">The Internet</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2
          id="internet-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] leading-snug mb-2"
        >
          {theInternet.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {theInternet.subtitle}
        </p>
      </div>

      {/* 2x2 Axioms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {theInternet.axioms.map((ax, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-6 sm:p-7 rounded-xl glow-card"
          >
            <span className="text-xs sm:text-sm font-mono-tech text-[#D4FF00] block mb-2 font-bold">
              0{idx + 1}
            </span>
            <p className="text-base sm:text-lg font-semibold text-[#FFFFFF] leading-snug">
              &ldquo;{ax}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
