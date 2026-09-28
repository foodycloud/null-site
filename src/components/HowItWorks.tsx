"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export default function HowItWorks() {
  const { howItWorks } = siteConfig;

  return (
    <section
      id="how"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-6xl mx-auto w-full relative z-10"
      aria-labelledby="how-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{howItWorks.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">Mechanics</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2
          id="how-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] mb-2"
        >
          {howItWorks.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {howItWorks.subtitle}
        </p>
      </div>

      {/* 3 Step Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {howItWorks.steps.map((st, idx) => (
          <motion.div
            key={st.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="p-6 sm:p-7 rounded-xl glow-card flex flex-col justify-between"
          >
            <div>
              <span className="text-xs sm:text-sm font-mono-tech text-[#D4FF00] block mb-4 font-bold">
                Step {st.num}
              </span>

              <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-2.5 tracking-tight">
                {st.action}
              </h3>

              <p className="text-xs sm:text-sm text-[#CBD2E6] leading-relaxed">
                {st.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
