"use client";

import { useState } from "react";
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
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="faq-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {faq.index} / {faq.label}
      </div>

      <div className="mb-10">
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {faq.headline}
        </h2>
      </div>

      {/* Clean Accordion List */}
      <div className="border-t border-[#222222]">
        {faq.questions.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border-b border-[#222222]">
              <button
                onClick={() => toggle(idx)}
                className="w-full py-5 text-left flex items-start justify-between gap-6 cursor-pointer group focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#F1F1ED]"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-6 sm:gap-8">
                  <span className="font-mono-tech text-xs text-[#858580]">
                    0{idx + 1}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-[#F1F1ED] group-hover:text-[#858580] transition-colors">
                    {item.q}
                  </span>
                </div>

                <span className="font-mono-tech text-base text-[#858580] shrink-0 pt-0.5 select-none font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="pb-6 pl-10 sm:pl-14 text-sm sm:text-base text-[#858580] leading-relaxed max-w-2xl font-normal">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
