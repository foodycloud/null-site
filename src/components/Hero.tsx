"use client";

import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-between pt-28 pb-16 px-6 max-w-5xl mx-auto w-full">
      {/* Top Meta Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono-tech text-[11px] text-[#858580] uppercase border-b border-[#282828] pb-4">
        <span>{hero.meta}</span>
        <span className="text-[#F1F1ED] font-medium">{hero.status}</span>
      </div>

      {/* Main Editorial Hero Block */}
      <div className="my-auto py-16 sm:py-24">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.04] text-[#F1F1ED] mb-6 select-none max-w-4xl">
          {hero.headlinePart1}
          <br />
          <span className="text-[#858580] font-normal">UNTIL </span>
          {hero.headlinePart2.replace("UNTIL ", "")}
        </h1>

        <p className="text-base sm:text-lg text-[#858580] max-w-xl font-normal leading-relaxed mb-10">
          {hero.support}
        </p>

        {/* Minimal Rectangular Action Buttons */}
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

      {/* Bottom Technical Grid Rule */}
      <div className="pt-4 border-t border-[#282828] flex items-center justify-between font-mono-tech text-[10px] text-[#858580] uppercase tracking-wider">
        <span>INDEX / 00</span>
        <span>NULL / GENESIS</span>
      </div>
    </section>
  );
}
