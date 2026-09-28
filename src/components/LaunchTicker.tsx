"use client";

import { siteConfig } from "@/config/siteConfig";

export default function LaunchTicker() {
  const items = siteConfig.launchStatus.tickerItems;

  return (
    <div
      className="w-full overflow-hidden border-y border-[#22293D] bg-[#0E131F]/90 py-3.5 select-none backdrop-blur-md relative z-10"
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="text-xs font-mono-tech tracking-[0.2em] font-bold text-[#CBD2E6] hover:text-[#D4FF00] transition-colors flex items-center gap-2">
              {text.startsWith("⚡") && <span className="text-[#D4FF00]">⚡</span>}
              <span>{text.replace("⚡ ", "")}</span>
            </span>
            <span className="text-[#3A4568] font-mono-tech text-xs">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
