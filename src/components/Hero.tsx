"use client";

import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-28 pb-16 px-6 max-w-5xl mx-auto w-full">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between font-mono-tech text-xs text-[#858580] uppercase border-b border-[#222222] pb-4">
        <span>{hero.status}</span>
        <span className="hidden sm:inline">2026</span>
      </div>

      {/* Main Editorial Hero */}
      <div className="my-auto py-20 sm:py-28">
        <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-widest mb-6">
          {hero.brandName}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.04] text-[#F1F1ED] mb-8 select-none max-w-4xl">
          {hero.headlinePart1}
          <br />
          <span className="text-[#858580] font-normal">UNTIL </span>
          {hero.headlinePart2.replace("UNTIL ", "")}
        </h1>

        <p className="text-base sm:text-lg text-[#858580] max-w-xl font-normal leading-relaxed mb-12 whitespace-pre-line">
          {hero.support}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("#token")}
            className="btn-minimal-solid"
          >
            {hero.primaryCta}
          </button>

          <button
            onClick={() => scrollTo("#manifesto")}
            className="btn-minimal"
          >
            {hero.secondaryCta}
          </button>
        </div>
      </div>

      {/* Bottom Hero Meta */}
      <div className="pt-4 border-t border-[#222222] font-mono-tech text-xs text-[#858580] uppercase tracking-wider">
        {hero.meta}
      </div>
    </section>
  );
}
