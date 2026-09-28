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
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="faq-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {faq.index} / {faq.label}
      </div>

      <div className="mb-8">
        <h2
          id="faq-heading"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {faq.headline}
        </h2>
      </div>

      {/* Clean Accordion List */}
      <div className="border-t border-[#282828]">
        {faq.questions.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border-b border-[#282828]">
              <button
                onClick={() => toggle(idx)}
                className="w-full py-4 text-left flex items-start justify-between gap-4 cursor-pointer group focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#F1F1ED]"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono-tech text-xs text-[#858580]">
                    0{idx + 1}
                  </span>
                  <span className="text-base font-semibold text-[#F1F1ED] group-hover:text-[#858580] transition-colors leading-snug">
                    {item.q}
                  </span>
                </div>

                <span className="font-mono-tech text-xs text-[#858580] shrink-0 pt-0.5">
                  {isOpen ? "[-]" : "[+]"}
                </span>
              </button>

              {isOpen && (
                <div className="pb-5 pl-10 sm:pl-12 text-sm text-[#858580] leading-relaxed max-w-2xl">
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
